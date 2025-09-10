import { NextApiRequest } from "next";
import User, { IUser } from "@/models/user.model";
import generateAccessToken from "@/utils/jwt.util";
import { v4 as uuidv4 } from "uuid";
import Verify from "@/models/verify.model";
import { ghasedak } from "@/utils/sms.util";
import crypto from "crypto";
import { sendOtpEmail } from "@/utils/mailer.util";
interface OAuthUserBody {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  provider: string;
  providerId: string;
}

interface AuthRequest extends NextApiRequest {
  user?: {
    _id: string;
  };
  file?: {
    path: string;
    filename: string;
  };
}
export async function signInGoogleUser(body: OAuthUserBody) {
  try {
    let user = await User.findOne({ email: body.email });
    if (!user) {
      user = new User({
        googleId: body.id || body.providerId,
        name: body.name,
        email: body.email,
        avatar: body.avatar
          ? { url: body.avatar, public_id: "google", originalName: "google" }
          : undefined,
        password: crypto.randomBytes(8).toString("hex"),
        status: "active",
        provider: body.provider,
        providerId: body.providerId
      });

      await user.save();
    }
    const accessToken = generateAccessToken({
      _id: user._id,
      name: user.name,
      email: user.email
    });
    return {
      success: true,
      message: "ورود با گوگل با موفقیت انجام شد",
      accessToken,
      user
    };
  } catch (error: any) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
}

// signup
export async function signUpUser(req: AuthRequest) {
  try {
    const user = await User.create({
      ...req.body,
      avatar: req.file
        ? { url: req.file.path, public_id: req.file.filename }
        : undefined
    });

    const result = await user.save({ validateBeforeSave: true });

    if (result) {
      return { success: true, message: "کاربر با موفقیت ایجاد شد" };
    } else {
      return { success: false, message: "کاربر ایجاد نشد" };
    }
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

// signin
export async function signInUser(req: AuthRequest) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return { success: false, message: "کاربر یافت نشد" };
    }

    if (user.status !== "active") {
      return { success: false, message: "حساب کاربری شما غیرفعال است" };
    }

    const accessToken = generateAccessToken({
      _id: user._id.toString(),
      name: user.name,
      email: user.email
    });

    return {
      success: true,
      message: "ورود با موفقیت انجام شد",
      accessToken
    };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

// forgot password
export async function forgotPassword(req: AuthRequest) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return { success: false, message: "کاربر یافت نشد" };
    }

    const hashedPassword = user.encryptPassword(req.body.password);

    const result = await User.findByIdAndUpdate(user._id, {
      $set: { password: hashedPassword }
    });

    if (result) {
      return { success: true, message: "رمز عبور با موفقیت تغییر یافت" };
    } else {
      return { success: false, message: "تغییر رمز عبور انجام نشد" };
    }
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

// persist user
export async function persistUser(req: AuthRequest) {
  try {
    const user = await User.findById(req.user?._id).populate([
      {
        path: "favorite",
        populate: [
          "user",
          {
            path: "rents",
            populate: ["owner"]
          }
        ]
      }
    ]);

    if (user) {
      return {
        success: true,
        message: "اطلاعات کاربر با موفقیت دریافت شد",
        data: user
      };
    } else {
      return {
        success: false,
        message: "دریافت اطلاعات کاربر موفقیت‌آمیز نبود"
      };
    }
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

interface AuthResponse {
  success: boolean;
  message: string;
  accessToken?: string;
  user?: {
    id: string;
    name: string;
    email: string;
    phone?: string;
  };
}

interface AuthBody {
  email?: string;
  phone?: string;
  password?: string;
  name?: string;
}

export async function phoneLogin(req: AuthRequest): Promise<AuthResponse> {
  try {
    const { phone } = req.body as AuthBody;
    if (!phone) {
      return { success: false, message: "شماره تلفن الزامی است" };
    }
    const phoneRegex = /^\+?\d{10,15}$/;
    if (!phoneRegex.test(phone)) {
      return { success: false, message: "شماره تلفن نامعتبر است" };
    }
    let user = await User.findOne({ phone });
    if (!user) {
      user = new User({
        phone,
        password: crypto.randomBytes(8).toString("hex"),
        status: "inactive"
      });

      await user.save();
    }

    // Generate OTP
    const otpCode = Math.floor(1000 + Math.random() * 900000).toString();
    const clientReferenceId = uuidv4();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    await Verify.create({
      phone,
      code: otpCode,
      templateName: "newOTP",
      clientReferenceId,
      expiresAt
    });

    // Send OTP via Ghasedak
    const otpSmsCommand = {
      sendDate: new Date().toISOString(),
      receptors: [{ mobile: phone, clientReferenceId }],
      templateName: "newOTP",
      inputs: [{ param: "Code", value: otpCode }],
      udh: true
    };

    await ghasedak.sendOtpSms(otpSmsCommand);

    return {
      success: true,
      message: "کد تأیید به شماره تلفن ارسال شد",
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

export async function emailLogin(req: AuthRequest): Promise<AuthResponse> {
  try {
    const { email } = req.body as AuthBody;
    if (!email) {
      return { success: false, message: "آدرس ایمیل الزامی است" };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: "آدرس ایمیل نامعتبر است" };
    }
    let user = await User.findOne({ email });
    if (!user) {
      const tempPassword = crypto.randomBytes(8).toString("hex");
      user = new User({
        email,
        password: tempPassword,
        status: "inactive",
        name: email.split("@")[0]
      });
      await user.save();
    }

    // Generate OTP
 const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    try {
          await Verify.create({
      email,
      code: otpCode,
      templateName: "newOTP",
      clientReferenceId:user._id,
      expiresAt
    });
    } catch (error:any) {
      console.error("خطا در ارسال ایمیل OTP:", error.message);
      return {
        success: false,
        message: "خطا در ثبت کد تایید. لطفاً دوباره تلاش کنید"
      };
    }


    try {
      await sendOtpEmail(email, otpCode);
    } catch (smsError: any) {
      console.error("خطا در ارسال ایمیل OTP:", smsError);
      return {
        success: false,
        message: "خطا در ارسال کد تأیید. لطفاً دوباره تلاش کنید"
      };
    }

    return {
      success: true,
      message: "کد تأیید به ایمیل ارسال شد",
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    };
  } catch (error: any) {
    console.error("خطا در کنترلر emailLogin:", error.message);
    if (error.code === 11000) {
      return { success: false, message: "این ایمیل قبلاً ثبت شده است" };
    }
    return {
      success: false,
      message: error.message || "خطای سرور"
    };
  }
}

export async function verifyOtp(req: AuthRequest): Promise<AuthResponse> {
  try {
    const { authMethod, contactInfo, otp } = req.body as { authMethod: "email" | "phone"; contactInfo: string; otp: string };

    console.log("ورودی دریافت‌شده:", { authMethod, contactInfo, otp });

    if (!authMethod || !contactInfo || !otp) {
      console.log("ورودی ناقص است");
      return { success: false, message: "اطلاعات ورودی ناقص است" };
    }

    let query: any = {};
    if (authMethod === "email") {
      query.email = contactInfo;
      query.code = otp;
    } else if (authMethod === "phone") {
      query.phone = contactInfo;
      query.code = otp;
    } else {
      console.log("نوع ورود نامعتبر:", authMethod);
      return { success: false, message: "نوع ورود نامعتبر است" };
    }

    const otpRecord = await Verify.findOne(query);
    console.log("OTP پیدا شد؟", otpRecord);

    if (!otpRecord) {
      console.log("کد تأیید نامعتبر است");
      return { success: false, message: "کد تأیید نامعتبر است" };
    }

    if (otpRecord.expiresAt < new Date()) {
      console.log("کد منقضی شده است");
      return { success: false, message: "کد تأیید منقضی شده است" };
    }

    let userQuery: any = {};
    if (authMethod === "email") userQuery.email = contactInfo;
    else userQuery.phone = contactInfo;

    const user = await User.findOne(userQuery);
    console.log("کاربر پیدا شد؟", user);

    if (!user) {
      console.log("کاربر یافت نشد");
      return { success: false, message: "کاربر یافت نشد" };
    }

    // فعال کردن کاربر
    user.status = "active";
    await user.save();
    console.log("کاربر فعال شد");

    const accessToken = generateAccessToken({
      _id: user._id,
      name: user.name,
      email: user.email
    });
console.log("توکن دسترسی ایجاد شد");
console.log("توکن دسترسی:", accessToken);
console.log("کاربر:", user);
    return {
      success: true,
      message: "کاربر فعال شد و ورود با موفقیت انجام شد",
      accessToken,
      user
    };
  } catch (error: any) {
    console.error("خطا در کنترلر verifyOtp:", error);
    return { success: false, message: error.message || "خطای سرور" };
  }
}

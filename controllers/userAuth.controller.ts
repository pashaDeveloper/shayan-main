import { NextApiRequest } from "next";
import User, { IUser } from "@/models/user.model";
import generateAccessToken from "@/utils/jwt.util";
interface OAuthUserBody {
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
      user = await User.create({
        name: body.name,
        email: body.email,
        avatar: body.avatar
          ? { url: body.avatar, public_id: "google", originalName: "google" }
          : undefined,
        password: Math.random().toString(36).slice(-8),
        status: "active",
      });
    }

    const accessToken = generateAccessToken({
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
    });
console.log(accessToken)
    return {
      success: true,
      message: "ورود با گوگل با موفقیت انجام شد",
      accessToken,
      user,
    };
  } catch (error: any) {
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
        : undefined,
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
  _id: user._id.toString() , 
  name: user.name,
  email: user.email,
});

    return {
      success: true,
      message: "ورود با موفقیت انجام شد",
      accessToken,
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
      $set: { password: hashedPassword },
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
            populate: ["owner"],
          },
        ],
      },
      

   
    ]);

    if (user) {
      return {
        success: true,
        message: "اطلاعات کاربر با موفقیت دریافت شد",
        data: user,
      };
    } else {
      return { success: false, message: "دریافت اطلاعات کاربر موفقیت‌آمیز نبود" };
    }
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}

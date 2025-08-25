import { NextApiRequest } from "next";
import Admin from "@/models/admin.model";
import Address from "@/models/address.model";
import generateAccessToken from "@/utils/jwtAdmin.util";

interface AddressType {
  country: string;
  city: string;
  street: string;
  state?: string;
  floor?: string;
  unit?: string;
  plateNumber?: string;
  postalCode: string;
}

interface AuthRequest extends NextApiRequest {
  admin?: {
    _id: string;
  };
  uploadedFiles?: {
    [key: string]: { url: string; key: string }[];
  };
  body: {
    name: string;
    email: string;
    password: string;
    phone: string;
    avatarUrl?: string;
    bio: string;
    address: AddressType;
    folderType?: string; // For dynamic Cloudinary folder
  };
}

interface ResponseData {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

// signup
export async function signupAdmin(req: AuthRequest): Promise<ResponseData> {
  try {
    const {
      name,
      email,
      password,
      phone,
      avatarUrl,
      bio,
      address,
      folderType
    } = req.body;
    if (!name || !email || !password || !phone || !bio || !address) {
      return {
        success: false,
        message: "درخواست نادرست",
        error: "همه فیلدها الزامی است"
      };
    }

    const existingAdmin = await Admin.findOne({ $or: [{ email }, { phone }] });
    if (existingAdmin) {
      return {
        success: false,
        message: "کاربر تکراری",
        error:
          "کاربری با این ایمیل یا شماره تلفن قبلاً ثبت‌نام کرده است."
      };
    }

    const existingAddress = await Address.findOne({
      $or: [{ postalCode: address.postalCode }, { phone }]
    });
    if (existingAddress) {
      return {
        success: false,
        message: "آدرس تکراری",
        error:
          "آدرسی با این شماره پستی یا شماره تلفن قبلاً ثبت شده است."
      };
    }
    const addressProp = await Address.create({
      country: address.country,
      city: address.city,
      street: address.street,
      state: address.state,
      floor: address.floor,
      unit: address.unit,
      plateNumber: address.plateNumber,
      phone,
      email,
      location: { lat: 0, lng: 0 },
      postalCode: address.postalCode
    });

    // تعیین avatar
    let avatar: { url: string | null; public_id: string | null } = {
      url: avatarUrl || null,
      public_id: null
    };

    if (req.uploadedFiles?.["avatar"]?.[0]?.url) {
      avatar = {
        url: req.uploadedFiles["avatar"][0].url,
        public_id: req.uploadedFiles["avatar"][0].key
      };
    }

    // تعیین نقش و وضعیت
    const adminCount = await Admin.countDocuments();
    const role = adminCount === 0 ? "superAdmin" : "operator";
    const status = adminCount === 0 ? "active" : "inactive";

    // ایجاد ادمین
    const newAdmin = new Admin({
      name,
      email,
      password,
      phone,
      address: addressProp._id,
      role,
      status,
      avatar,
      bio
    });

    const result = await newAdmin.save();

    // اتصال آدرس به ادمین
    addressProp.admin = result._id;
    await addressProp.save();

    return {
      success: true,
      message: "کاربر با موفقیت ایجاد شد",
      data: result
    };
  } catch (error: any) {
    console.error("signupAdmin error:", error);

    let errorMsg = error.message || "خطای داخلی سرور";

    const lastColonIndex = errorMsg.lastIndexOf(":");
    if (lastColonIndex !== -1) {
      errorMsg = errorMsg.slice(lastColonIndex + 1).trim();
    }

    return {
      success: false,
      message: "خطای داخلی سرور",
      error: errorMsg
    };
  }
}

// signin
export async function signinAdmin(req: AuthRequest): Promise<ResponseData> {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return {
        success: false,
        message: "کاربر یافت نشد"
      };
    }

    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      return {
        success: false,
        message: "رمز عبور نادرست است"
      };
    }

    if (admin.status !== "active") {
      return {
        success: false,
        message: "حساب کاربری شما غیرفعال است"
      };
    }

    const accessToken = generateAccessToken({
      _id: admin._id.toString(),
      name: admin.name,
      avatar:admin.avatar,
      email: admin.email,
      adminLevel:admin.adminLevel,
      role:admin.role
    });

    return {
      success: true,
      message: "ورود با موفقیت انجام شد",
      data: { accessToken }
    };
  } catch (error: any) {
    console.error("signupAdmin error:", error);

    let errorMsg = error.message || "خطای داخلی سرور";

    const lastColonIndex = errorMsg.lastIndexOf(":");
    if (lastColonIndex !== -1) {
      errorMsg = errorMsg.slice(lastColonIndex + 1).trim();
    }

    return {
      success: false,
      message: "خطای داخلی سرور",
      error: errorMsg
    };
  }
}

// persist admin
export async function persistAdmin(req:any): Promise<ResponseData> {
  try {
    if (!req.admin?._id) {
      return {
        success: false,
        message: "کاربر احراز هویت نشده است"
      };
    }

    const admin = await Admin.findById(req.admin._id).select(
      "name avatar role adminLevel email phone"
    );;

    if (!admin) {
      return {
        success: false,
        message: "کاربر یافت نشد"
      };
    }

    return {
      success: true,
      message: "اطلاعات کاربر با موفقیت دریافت شد",
      data: admin
    };
  } catch (error: any) {
    console.error("persistAdmin error:", error);
    return {
      success: false,
      message: "خطای داخلی سرور",
      error: error.message
    };
  }
}

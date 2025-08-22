import multer, { FileFilterCallback } from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import { Request } from "express";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (_: Request, file: Express.Multer.File) => {
    return {
      folder: "travello-template",
      public_id: `${Date.now()}_${file.originalname
        .replace(/[^\w\s.-]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase()}`,
    };
  },
});

const upload = multer({
  storage,
  fileFilter: (_: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const supportedImage = /jpg|jpeg|png/i; 
    const extension = file.originalname.substring(file.originalname.lastIndexOf(".") + 1);

    if (supportedImage.test(extension)) {
      cb(null, true);
    } else {
      cb(new Error("فرمت فایل باید jpg، jpeg یا png باشد"));
    }
  },
});

export default upload;

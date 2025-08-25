import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import type { Request } from "express"; // For compatibility with multer types

/* cloudinary config */
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

// Configure multer storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req: Request, file: Express.Multer.File) => {
    const folderType = (req.body.folderType as string) || "admin"; // Default to "admin" if not provided
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Zero-pad month
    const folderPath = `${folderType}/${year}/${month}`; // e.g., admin/2025/08

    return {
      folder: folderPath,
      public_id: `${Date.now()}_${file.originalname
        .replace(/[^\w\s.-]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase()}`,
    };
  },
});

const upload = multer({
  storage,
  fileFilter: (_req: Request, file: Express.Multer.File, cb) => {
    const supportedImage = /jpg|jpeg|png/i; // Case-insensitive matching
    const extension = file.originalname.split(".").pop() || "";

    if (supportedImage.test(extension)) {
      cb(null, true);
    } else {
      cb(new Error("فایل باید در فرمت png، jpg یا jpeg باشد"));
    }
  },
});

export default upload;
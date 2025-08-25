import type { NextApiRequest, NextApiResponse } from "next";
import { signInUser } from "@/controllers/userAuth.controller";

interface ResponseData {
  success: boolean;
  error?: string;
  [key: string]: any; 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const result = await signInUser(req);
        res.status(200).json({ ...result });
      } catch (error: any) {
        res.status(400).json({
          success: false,
          error: error.message || "خطای سرور رخ داده است"
        });
      }
      break;

    default:
      res.status(405).json({
        success: false,
        error: "متد مجاز نیست"
      });
      break;
  }
}

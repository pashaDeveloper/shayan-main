import type { NextApiRequest, NextApiResponse } from "next";
import { signInGoogleUser } from "@/controllers/userAuth.controller";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
          console.log("awdawdawd")

    if (req.method === "POST") {
    try {
      const result = await signInGoogleUser(req.body);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: "متد مجاز نیست" });
  }
}

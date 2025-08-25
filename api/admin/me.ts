import type { NextApiResponse } from "next";
import { persistUser } from "@/controllers/userAuth.controller";
import verify, { AuthRequest } from "@/middleware/verifyUser.middleware";

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function handler(req: AuthRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      return verify(req, res, async (reqWithUser) => {
        const result = await persistUser(reqWithUser);
        return res.status(200).json(result);
      });

    default:
      return res.status(405).json({
        success: false,
        error: "Method not allowed",
      });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface DecodedUser extends JwtPayload {
  id?: string;
  _id: string;
}

export interface AuthRequest extends NextApiRequest {
  user?: DecodedUser;
}

// ما next رو شبیه callback می‌گیریم
const verify = async (
  req: AuthRequest,
  res: NextApiResponse,
  next: (reqWithUser: AuthRequest) => void
) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    if (!token) {
      return res.status(401).json({
        acknowledgement: false,
        message: "عدم دسترسی: توکن موجود نیست",
      });
    }

    const decoded = (await new Promise<DecodedUser>((resolve, reject) => {
      jwt.verify(token, process.env.TOKEN_SECRET as string, (err, decoded) => {
        if (err) return reject(err);
        resolve(decoded as DecodedUser);
      });
    })) as DecodedUser;

    req.user = decoded;

    return next(req);
  } catch (error) {
    return res.status(401).json({
      acknowledgement: false,
      message: "عدم دسترسی: توکن نامعتبر است",
    });
  }
};

export default verify;

// utils/jwt.util.ts
import jwt from "jsonwebtoken";

interface UserPayload {
  _id: string;
  name: string;
  email: string;
}

export default function generateAccessToken(user: UserPayload): string {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.TOKEN_SECRET as string,
    { expiresIn: "7d" }
  );
}

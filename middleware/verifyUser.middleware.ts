// middleware/verifyUser.middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface DecodedUser extends JwtPayload {
  id?: string;
  _id: string;
}

export async function verify(req: NextRequest): Promise<DecodedUser | null> {
  try {
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if (!token) {
      return null; // Return null instead of sending a response
    }

    const decoded = await new Promise<DecodedUser>((resolve, reject) => {
      jwt.verify(token, process.env.TOKEN_SECRET as string, (err, decoded) => {
        if (err) return reject(err);
        resolve(decoded as DecodedUser);
      });
    });

    return decoded;
  } catch (error) {
    return null; // Return null on error
  }
}
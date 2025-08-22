import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

const authorization = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "عدم دسترسی: اطلاعات کاربر یافت نشد",
      });
    }

    const userRole = req.user.role;

    if (!roles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        message: "عدم دسترسی: اجازه دسترسی به این ویژگی را ندارید",
      });
    }

    next();
  };
};

export default authorization;

// import type { NextApiRequest, NextApiResponse } from "next";
// import { signupAdmin } from "@/controllers/adminAuth.controller";
// import upload from "@/middleware/upload.middleware";

// interface ResponseData {
//   success: boolean;
//   error?: string;
//   [key: string]: any;
// }
// export const config = { api: { bodyParser: true } };


// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   const { method } = req;
//         console.log("POST request received:", req.body);

//   switch (method) {
    
//     case "POST":
//       try {
//         console.log("POST request received:", req.body);

     

//         const result = await signupAdmin(req as any);
//         console.log("Signup result:", result);

//         res.status(result.success ? 201 : 400).json(result);
//       } catch (error: any) {
//         console.error("Handler error:", error);
//         res.status(400).json({
//           success: false,
//           error: error.message || "خطای سرور رخ داده است",
//         });
//       }
//       break;

//     default:
//       console.warn("Method not allowed:", method);
//       res.status(405).json({
//         success: false,
//         error: "متد مجاز نیست",
//       });
//       break;
//   }
// }

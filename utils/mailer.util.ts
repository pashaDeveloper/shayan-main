import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER, 
    pass: process.env.SMTP_PASS, 
  },
});

export async function sendOtpEmail(email: string, otpCode: string) {
  const htmlTemplate = `
  <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background: #f9f9f9;">
    <div style="max-width: 400px; margin: auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <!-- Logo -->
      <img src="https://2shigroup.com/banner.jpg" alt="وبسایت شایسته و شایان" style="width: 100px; margin-bottom: 15px;" />
      
      <!-- Title -->
      <h2 style="color: #333;">🔑 کد تأیید ورود به وبسایت شایسته و شایان</h2>
      
      <!-- Greeting -->
      <p style="font-size: 16px; color: #555;">سلام 👋</p>
      <p style="font-size: 16px; color: #555;">
        برای ورود به حساب کاربری خود در <strong>وبسایت شایسته و شایان</strong>، لطفاً کد زیر را وارد کنید:
      </p>
      
      <!-- OTP -->
      <h1 style="font-size: 32px; color: #007bff; letter-spacing: 5px; margin: 20px 0;">${otpCode}</h1>
      
      <p style="font-size: 14px; color: #888;">
        ⏳ این کد فقط به مدت <strong>۱۰ دقیقه</strong> معتبر است.
      </p>
    </div>
    
    <!-- Footer -->
    <p style="font-size: 12px; color: #aaa; margin-top: 20px;">
      اگر شما این درخواست را انجام نداده‌اید، این پیام را نادیده بگیرید.
    </p>
    <p style="font-size: 13px; color: #555; margin-top: 10px;">
      🌐 <a href="https://shayesteh-shayan.com" style="color: #007bff; text-decoration: none;">وبسایت شایسته و شایان</a>
    </p>
  </div>
  `;

  await transporter.sendMail({
    from: `"وبسایت شایسته و شایان" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "کد تأیید ورود - وبسایت شایسته و شایان",
    html: htmlTemplate,
  });
}

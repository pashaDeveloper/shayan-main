import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function sendOtpEmail(email: string, otpCode: string) {
  const htmlTemplate = `
  <div dir="rtl" style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background: #f9f9f9;">
    <div style="max-width: 400px; margin: auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <!-- Logo -->
      <img src="https://2shigroup.com/banner.jpg" alt="وبسایت شایسته و شایان" style="width: 100%; margin-bottom: 15px;" />
      

      
<p style="font-size: 16px; color: #888;">سلام 👋</p>
<p style="font-size: 16px; color: #888; margin: 5px 0;">
  برای ورود به حساب کاربری خود
</p>
<p style="font-size: 16px; color: #007bff; margin: 5px 0;">
  در <strong>وبسایت رسمی شرکت شایسته و شایان</strong>
</p>
<p style="font-size: 16px; color: #888; margin: 5px 0;">
  لطفاً کد زیر را وارد کنید:
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
      🌐 <a href="https://2shigroup.com" style="color: #007bff; text-decoration: none;">وبسایت شایسته و شایان</a>
    </p>
  </div>
  `;

  await transporter.sendMail({
    from: `"وبسایت شایسته و شایان" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `کد تأیید شما: ${otpCode}`,
    text: `کد ورود شما: ${otpCode}`,
    html: htmlTemplate
  });
}

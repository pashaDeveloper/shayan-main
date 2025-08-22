"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import GoogleLoginButton from "./GoogleLoginButton";
import TabSelector from "./TabSelector";
import ErrorMessage from "./ErrorMessage";

interface FormData {
  email: string;
  phone: string;
  otp: string;
}

const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"email" | "phone">("email");
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    otp: "",
  });
  const [error, setError] = useState<string>("");
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const { toast } = useToast();

  const handleTabChange = (tab: "email" | "phone") => {
    setActiveTab(tab);
    setError("");
    setIsOtpSent(false);
    setFormData({ email: "", phone: "", otp: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = () => {
    setError("");
    setTimeout(() => {
      setIsOtpSent(true);
      toast({
        title: "کد OTP ارسال شد",
        description: "کد تأیید ارسال گردید",
      });
    }, 1000);
  };

  const handleVerifyOtp = () => {
    setError("");
    if (formData.otp === "1234") {
      toast({
        title: "ورود موفق",
        description: "به داشبورد هدایت می‌شوید...",
      });
    } else {
      setError("کد OTP اشتباه است");
    }
  };

  const handleGoogleLogin = () => {
    toast({
      title: "ورود با گوگل",
      description: "در حال اتصال به گوگل...",
    });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4"
      dir="rtl"
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          ورود به حساب کاربری
        </h2>

        {!isOtpSent && (
          <>
            <GoogleLoginButton  />

            <div className="flex items-center mb-6">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-gray-500">یا</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <TabSelector activeTab={activeTab} onTabChange={handleTabChange} />
          </>
        )}

        <ErrorMessage error={error} />

        {isOtpSent ? (
          // فرم OTP
          <div className="space-y-4">
            <div>
              <label
                className="block text-gray-700 mb-2 text-lg"
                htmlFor="otp"
              >
                کد OTP (1234 را وارد کنید)
              </label>
              <Input
                type="text"
                id="otp"
                name="otp"
                value={formData.otp}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-xl tracking-wider"
                required
                maxLength={4}
                pattern="[0-9]{4}"
                placeholder="1234"
              />
            </div>
            <Button
              onClick={handleVerifyOtp}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg"
            >
              تأیید کد OTP
            </Button>
            <button
              type="button"
              onClick={() => setIsOtpSent(false)}
              className="w-full text-gray-600 hover:text-gray-800 transition-colors text-lg"
            >
              بازگشت
            </button>
          </div>
        ) : activeTab === "email" ? (
          // فرم ایمیل
          <div className="space-y-4">
            <div>
              <label
                className="block text-gray-700 mb-2 text-lg"
                htmlFor="email"
              >
                ایمیل
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-lg"
                required
                placeholder="example@email.com"
              />
            </div>
            <Button
              onClick={handleSendOtp}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg"
            >
              ارسال کد OTP
            </Button>
          </div>
        ) : (
          // فرم موبایل
          <div className="space-y-4">
            <div>
              <label
                className="block text-gray-700 mb-2 text-lg"
                htmlFor="phone"
              >
                شماره موبایل
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-5 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                required
                pattern="[0-9]{10,12}"
                placeholder="09123456789"
              />
            </div>
            <Button
              onClick={handleSendOtp}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg"
            >
              ارسال کد
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

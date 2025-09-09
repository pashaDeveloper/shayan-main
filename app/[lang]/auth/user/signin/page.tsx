
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";
import PhoneLogin from "./PhoneLogin";
import EmailLogin from "./EmailLogin";
import GoogleLogin from "./GoogleLogin";
import OTPVerificationWrapper from "./OTPVerificationWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Shield, Phone, Mail } from "lucide-react";
import { toast } from "react-hot-toast";

// Zod schemas for form validation
const createPhoneSchema = (t: (key: string) => string | undefined) =>
  z.object({
    phone: z
      .string()
      .regex(/^\+?\d{10,15}$/, t("auth.invalidPhone") ?? "Please enter a valid phone number"),
  });

const createEmailSchema = (t: (key: string) => string | undefined) =>
  z.object({
    email: z.string().email(t("auth.invalidEmail") ?? "Please enter a valid email address"),
  });

type PhoneFormData = z.infer<ReturnType<typeof createPhoneSchema>>;
type EmailFormData = z.infer<ReturnType<typeof createEmailSchema>>;
type AuthStep = "signin" | "otp";
type AuthMethod = "phone" | "email";

export default function SignInPage() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState<AuthStep>("signin");
  const [authMethod, setAuthMethod] = useState<AuthMethod>("phone");
  const [contactInfo, setContactInfo] = useState("");

  // Form hooks for phone and email
  const phoneForm = useForm<PhoneFormData>({
    resolver: zodResolver(createPhoneSchema(t)),
    defaultValues: { phone: "" },
  });

  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(createEmailSchema(t)),
    defaultValues: { email: "" },
  });

  const handleOTPSuccess = () => {
    toast.success(t("auth.verified") ?? "Verification successful");
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div
      style={{
        backgroundImage: "url('/img/login.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="w-full max-w-md">
        {currentStep === "otp" ? (
          <OTPVerificationWrapper
            authMethod={authMethod}
            contactInfo={contactInfo}
            onBack={() => setCurrentStep("signin")}
            onSuccess={handleOTPSuccess}
            t={t}
          />
        ) : (
          <Card className="shadow-xl border-0 md:scale-110 bg-white/95 backdrop-blur-sm">
            <CardHeader className="space-y-4 text-center pb-6">
              <div className="mx-auto inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {t("auth.welcomeBack") ?? "Welcome Back"}
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  {t("auth.signInContinue") ?? "Sign in to continue"}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <GoogleLogin t={t} />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-yellow-400 px-4 text-white font-medium">
                    {t("auth.orContinueWith") ?? "Or continue with"}
                  </span>
                </div>
              </div>
              <Tabs defaultValue="phone" className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-11">
                  <TabsTrigger
                    value="phone"
                    onClick={() => setAuthMethod("phone")}
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {t("auth.mobile") ?? "Mobile"}
                  </TabsTrigger>
                  <TabsTrigger
                    value="email"
                    onClick={() => setAuthMethod("email")}
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {t("auth.email") ?? "Email"}
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="phone" className="space-y-4 mt-6">
                  <PhoneLogin
                    form={phoneForm}
                    setAuthMethod={setAuthMethod}
                    setContactInfo={setContactInfo}
                    setCurrentStep={setCurrentStep}
                    t={t}
                  />
                </TabsContent>
                <TabsContent value="email" className="space-y-4 mt-6">
                  <EmailLogin
                    form={emailForm}
                    setAuthMethod={setAuthMethod}
                    setContactInfo={setContactInfo}
                    setCurrentStep={setCurrentStep}
                    t={t}
                  />
                </TabsContent>
              </Tabs>
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  {t("auth.agreeTerms") ?? "By signing in, you agree to our"}{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    {t("auth.termsOfService") ?? "Terms of Service"}
                  </a>{" "}
                  {t("auth.and") ?? "and"}{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    {t("auth.privacyPolicy") ?? "Privacy Policy"}
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

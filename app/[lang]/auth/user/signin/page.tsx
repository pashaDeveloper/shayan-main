"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Chrome, Phone, Mail, ArrowLeft, Shield } from "lucide-react";
import OTPVerification from "@/components/auth/OTPVerification";

// Validation schemas
const phoneSchema = z.object({
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\-\s\(\)]+$/, "Invalid phone number format")
});

const emailSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required")
});

type PhoneForm = z.infer<typeof phoneSchema>;
type EmailForm = z.infer<typeof emailSchema>;

type AuthStep = "signin" | "otp";
type AuthMethod = "phone" | "email";

export default function SignInPage() {
  const [currentStep, setCurrentStep] = useState<AuthStep>("signin");
  const [authMethod, setAuthMethod] = useState<AuthMethod>("phone");
  const [contactInfo, setContactInfo] = useState("");

  const phoneForm = useForm<PhoneForm>({
    resolver: zodResolver(phoneSchema),
    defaultValues: { phone: "" }
  });

  const emailForm = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" }
  });

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
      toast.success("Redirecting to Google...");
    } catch (error) {
      toast.error("Failed to sign in with Google");
    }
  };

  const handlePhoneSubmit = async (data: PhoneForm) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setContactInfo(data.phone);
      setAuthMethod("phone");
      setCurrentStep("otp");
      toast.success("OTP sent to your phone number");
    } catch (error) {
      toast.error("Failed to send OTP");
    }
  };

  const handleEmailSubmit = async (data: EmailForm) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setContactInfo(data.email);
      setAuthMethod("email");
      setCurrentStep("otp");
      toast.success("OTP sent to your email");
    } catch (error) {
      toast.error("Failed to send OTP");
    }
  };

  const handleOTPSuccess = () => {
    toast.success("Successfully verified! Redirecting...");
    // Redirect to dashboard or home page
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };


  if (currentStep === "otp") {
    return (
      <div className="min-h-screen  bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md ">
          <Card className="shadow-xl border-0  bg-white/95 backdrop-blur-sm">
            <CardHeader className="space-y-4 text-center pb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="absolute left-4 top-4 p-2"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                {authMethod === "phone" ? (
                  <Phone className="h-8 w-8 text-blue-600" />
                ) : (
                  <Mail className="h-8 w-8 text-blue-600" />
                )}
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Verify OTP
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  We've sent a 4-digit code to{" "}
                  <span className="font-medium text-gray-900">
                    {authMethod === "phone" ? contactInfo : contactInfo}
                  </span>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <OTPVerification
                onSuccess={handleOTPSuccess}
                onResend={() => {
                  toast.success(`OTP resent to your ${authMethod}`);
                }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: "url('/img/login.jpg')",
        backgroundSize: "cover", // تصویر کل صفحه رو بپوشونه
        backgroundPosition: "center", // وسط تصویر باشه
        backgroundRepeat: "no-repeat"
      }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0 md:scale-110 bg-white/95 backdrop-blur-sm">
          <CardHeader className="space-y-4 text-center pb-6">
            <div className="mx-auto inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-6 ">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Welcome back
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Sign in to your account to continue
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Google Sign In */}
            <Button
              onClick={handleGoogleSignIn}
              variant="outline"
              className="w-full h-12 text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
            >
              <Chrome className="mr-3 h-5 w-5" />
              Sign in with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-gray-500 font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Tabs for Phone/Email */}
            <Tabs defaultValue="phone" className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-11">
                <TabsTrigger
                  value="phone"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Mobile
                </TabsTrigger>
                <TabsTrigger
                  value="email"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </TabsTrigger>
              </TabsList>

              <TabsContent value="phone" className="space-y-4 mt-6">
                <form
                  onSubmit={phoneForm.handleSubmit(handlePhoneSubmit)}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      {...phoneForm.register("phone")}
                    />
                    {phoneForm.formState.errors.phone && (
                      <p className="text-sm text-red-600">
                        {phoneForm.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                    disabled={phoneForm.formState.isSubmitting}
                  >
                    {phoneForm.formState.isSubmitting
                      ? "Sending..."
                      : "Continue"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="email" className="space-y-4 mt-6">
                <form
                  onSubmit={emailForm.handleSubmit(handleEmailSubmit)}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      {...emailForm.register("email")}
                    />
                    {emailForm.formState.errors.email && (
                      <p className="text-sm text-red-600">
                        {emailForm.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                    disabled={emailForm.formState.isSubmitting}
                  >
                    {emailForm.formState.isSubmitting
                      ? "Sending..."
                      : "Continue"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                By continuing, you agree to our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

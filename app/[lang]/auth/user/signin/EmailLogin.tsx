
"use client";

import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { toast } from "react-hot-toast";
import { useEmailLoginMutation } from "@/services/auth/userAuthApi";
import { EmailFormData } from "@/types/auth";

interface EmailLoginProps {
  form: UseFormReturn<EmailFormData>;
  setAuthMethod: (method: "phone" | "email") => void;
  setContactInfo: (contact: string) => void;
  setCurrentStep: (step: "signin" | "otp") => void;
  t: (key: string) => string | undefined;
}

export default function EmailLogin({ form, setAuthMethod, setContactInfo, setCurrentStep, t }: EmailLoginProps) {
  const [emailSignin, { data: emailData, isLoading: emailLoading, error: emailError }] = useEmailLoginMutation();


  
  useEffect(() => {
    if (emailLoading) {
      toast.loading(t("10") ?? "Loading...", { id: "signup" });
    }

    if (emailData?.success) {
      toast.success(emailData?.message ?? t("auth.success") ?? "Success", { id: "signup" });
      setTimeout(() => {
        setContactInfo(emailData.user?.phone ?? "");
        setAuthMethod("phone");
        setCurrentStep("otp");
      }, 1000);
    }
    if (emailData && !emailData?.success) {
      toast.error(emailData?.message ?? t("auth.error") ?? "An error occurred", { id: "signup" });
    }

    if (emailError) {
      const err = emailError as { data?: { message?: string } };
      toast.error(err?.data?.message ?? t("auth.error") ?? "An error occurred", { id: "signup" });
    }
  }, [emailLoading, emailData, emailError, setContactInfo, setAuthMethod, setCurrentStep, t]);

  const handleSubmit = async (formData: EmailFormData) => {
    try {
      await emailSignin({ email: formData.email }).unwrap();
      toast.success(t("auth.otpSentEmail") ?? "OTP sent to email");
    } catch (error) {
      toast.error(t("auth.otpFailed") ?? "Failed to send OTP");
    }
  };

  return (
    <div className="space-y-4">
      <Button
        variant="outline"
        onClick={() => setAuthMethod("email")}
        className="w-full h-11 flex items-center justify-center border-gray-200 hover:bg-blue-50"
      >
        <Mail className="mr-2 h-4 w-4" />
        {t("auth.email") ?? "Email"}
      </Button>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            {t("auth.emailAddress") ?? "Email Address"}
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...form.register("email")}
            className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
          )}
        </div>
        <Button
          type="submit"
          disabled={emailLoading}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white"
        >
          {t("auth.submit") ?? "Submit"}
        </Button>
      </form>
    </div>
  );
}

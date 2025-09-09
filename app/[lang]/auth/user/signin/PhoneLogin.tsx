
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";
import { toast } from "react-hot-toast";
import { usePhoneLoginMutation } from "@/services/auth/userAuthApi";
import { PhoneFormData } from "@/types/auth";

interface PhoneLoginProps {
  form: UseFormReturn<PhoneFormData>;
  setAuthMethod: (method: "phone" | "email") => void;
  setContactInfo: (contact: string) => void;
  setCurrentStep: (step: "signin" | "otp") => void;
  t: (key: string) => string | undefined;
}

export default function PhoneLogin({ form, setAuthMethod, setContactInfo, setCurrentStep, t }: PhoneLoginProps) {
  const [phoneSignin, { data: phoneData, isLoading: phoneLoading, error: phoneError }] = usePhoneLoginMutation();

  useEffect(() => {
    if (phoneLoading) {
      toast.loading(t("10") ?? "Loading...", { id: "signup" });
    }

    if (phoneData?.success) {
      toast.success(phoneData?.message ?? t("auth.success") ?? "Success", { id: "signup" });
      setTimeout(() => {
        setContactInfo(phoneData.user?.phone ?? "");
        setAuthMethod("phone");
        setCurrentStep("otp");
      }, 1000);
    }
    if (phoneData && !phoneData?.success) {
      toast.error(phoneData?.message ?? t("auth.error") ?? "An error occurred", { id: "signup" });
    }

    if (phoneError) {
      const err = phoneError as { data?: { message?: string } };
      toast.error(err?.data?.message ?? t("auth.error") ?? "An error occurred", { id: "signup" });
    }
  }, [phoneLoading, phoneData, phoneError   , t]);

  const handleSubmit = async (formData: PhoneFormData) => {
    try {
      await phoneSignin({ phone: formData.phone }).unwrap();
      toast.success(t("auth.otpSentPhone") ?? "OTP sent to phone");
    } catch (error) {
      toast.error(t("auth.otpFailed") ?? "Failed to send OTP");
    }
  };

  return (
    <div className="space-y-4">
      <Button
        variant="outline"
        onClick={() => setAuthMethod("phone")}
        className="w-full h-11 flex items-center justify-center border-gray-200 hover:bg-blue-50"
      >
        <Phone className="mr-2 h-4 w-4" />
        {t("auth.mobile") ?? "Mobile"}
      </Button>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            {t("auth.phoneNumber") ?? "Phone Number"}
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            {...form.register("phone")}
            className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
          {form.formState.errors.phone && (
            <p className="text-red-500 text-sm">{form.formState.errors.phone.message}</p>
          )}
        </div>
        <Button
          type="submit"
          disabled={phoneLoading}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white"
        >
          {t("auth.submit") ?? "Submit"}
        </Button>
      </form>
    </div>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import OTPVerification from "@/components/auth/OTPVerification";
import { toast } from "react-hot-toast";

interface OTPVerificationWrapperProps {
  authMethod: "phone" | "email";
  contactInfo: string;
  onBack: () => void;
  onSuccess: () => void;
  t: (key: string) => string | undefined;
}

export default function OTPVerificationWrapper({
  authMethod,
  contactInfo,
  onBack,
  onSuccess,
  t,
}: OTPVerificationWrapperProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="space-y-4 text-center pb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
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
                {t("auth.verifyOTP") ?? "Verify OTP"}
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                {t("auth.sentCodeTo") ?? "We sent a code to"}{" "}
                <span className="font-medium text-gray-900">{contactInfo}</span>
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <OTPVerification
              onSuccess={onSuccess}
              onResend={() => toast.success(t("auth.otpResent") ?? "OTP resent")}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

interface GoogleLoginProps {
  t: (key: string) => string | undefined;
}

export default function GoogleLogin({ t }: GoogleLoginProps) {
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
      toast.success(t("auth.redirectGoogle") ?? "Redirecting to Google...");
    } catch (error) {
      toast.error(t("auth.failedGoogle") ?? "Failed to sign in with Google");
    }
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={handleGoogleSignIn}
        className="w-full h-12 flex items-center justify-center bg-red-600 text-white hover:bg-red-700 transition-all duration-200 rounded-md"
      >
        <Chrome className="ltr:mr-2 rtl:ml-2 h-5 w-5" />
        {t("auth.signInGoogle") ?? "Sign in with Google"}
      </Button>
      
    </div>
  );
}

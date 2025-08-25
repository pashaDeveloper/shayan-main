"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, Facebook, Twitter, Linkedin, Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";

interface ShareButtonsProps {
  url?: string;
  title?: string;
}

export function ShareButtons({
  url,
  title = "مطلب جالب از سفر ایران",
}: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(url || window.location.href);
    }
  }, [url]);

  const [copied, setCopied] = useState(false);

  const shareLinks = {
    telegram: `https://t.me/share/url?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      title + " " + currentUrl
    )}`,
    instagram: `https://www.instagram.com/?url=${encodeURIComponent(
      currentUrl
    )}`, // اینستاگرام لینک مستقیم نداره
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl
    )}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const openShareWindow = (shareUrl: string) => {
    if (typeof window !== "undefined") {
      window.open(
        shareUrl,
        "_blank",
        "width=600,height=400,scrollbars=yes,resizable=yes"
      );
    }
  };

  if (!currentUrl) return null;

  return (
    <Card className="border-0 bg-card sticky top-24">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Share2 className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">اشتراک‌گذاری</h3>
        </div>

        <div className="space-y-3">
          {/* Telegram */}
          <Button
            variant="outline"
            className="w-full justify-start hover:bg-blue-50 hover:border-blue-200 hover:text-sky-600"
            onClick={() => openShareWindow(shareLinks.telegram)}
          >
            <FaTelegramPlane className="w-4 h-4 rtl:ml-2 ltr:mr-2 text-sky-600" />
            تلگرام
          </Button>

          {/* WhatsApp */}
          <Button
            variant="outline"
            className="w-full justify-start hover:bg-green-50 hover:border-green-200 hover:text-green-600"
            onClick={() => openShareWindow(shareLinks.whatsapp)}
          >
            <FaWhatsapp className="w-4 h-4 rtl:ml-2 ltr:mr-2 text-green-600" />
            واتس‌اپ
          </Button>

          {/* Instagram */}
          <Button
            variant="outline"
            className="w-full justify-start hover:bg-pink-50 hover:border-pink-200 hover:text-pink-500"
            onClick={() => openShareWindow(shareLinks.instagram)}
          >
            <FaInstagram className="w-4 h-4 rtl:ml-2 ltr:mr-2 text-pink-500" />
            اینستاگرام
          </Button>

          {/* Facebook */}
          <Button
            variant="outline"
            className="w-full justify-start hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
            onClick={() => openShareWindow(shareLinks.facebook)}
          >
            <Facebook className="w-4 h-4 rtl:ml-2 ltr:mr-2 text-blue-600" />
            فیس‌بوک
          </Button>

          {/* Twitter */}
          <Button
            variant="outline"
            className="w-full justify-start hover:bg-blue-50 hover:border-blue-400 hover:text-blue-500"
            onClick={() => openShareWindow(shareLinks.twitter)}
          >
            <Twitter className="w-4 h-4 rtl:ml-2 ltr:mr-2 text-blue-500" />
            توییتر
          </Button>

          {/* LinkedIn */}
          <Button
            variant="outline"
            className="w-full justify-start hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700"
            onClick={() => openShareWindow(shareLinks.linkedin)}
          >
            <Linkedin className="w-4 h-4 rtl:ml-2 ltr:mr-2 text-blue-700" />
            لینکدین
          </Button>

          {/* Copy Link */}
          <Button
            variant="outline"
            className="w-full justify-start hover:bg-gray-50 hover:border-gray-200 hover:text-gray-700"
            onClick={handleCopyLink}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 rtl:ml-2 ltr:mr-2 text-green-600" />
                کپی شد!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 rtl:ml-2 ltr:mr-2" />
                کپی لینک
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

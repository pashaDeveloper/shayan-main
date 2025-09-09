'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from "react-hot-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface OTPVerificationProps {
  authMethod: "phone" | "email";
  contactInfo: string;
}

export default function OTPVerification({ authMethod, contactInfo }: OTPVerificationProps) {
  const { t } = useLanguage()
  const [otp, setOtp] = useState(['', '', '', ''])
  const [countdown, setCountdown] = useState(30)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [countdown])

  const handleInputChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(0, 1)
    const newOtp = [...otp]
    newOtp[index] = digit
    setOtp(newOtp)

    if (digit && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const paste = e.clipboardData.getData('text')
    const digits = paste.replace(/\D/g, '').slice(0, 4).split('')

    if (digits.length === 0) return

    const newOtp = [...otp]
    digits.forEach((digit, i) => {
      if (i < 4) newOtp[i] = digit
    })
    setOtp(newOtp)

    const firstEmpty = newOtp.findIndex((d) => !d)
    if (firstEmpty === -1) inputRefs.current[3]?.focus()
    else inputRefs.current[firstEmpty]?.focus()
  }

  const handleVerifyOTP = async () => {
    const otpString = otp.join('')
    if (otpString.length !== 4) {
      toast.error(t("auth.enter_all_digits"))
      return
    }

    setLoading(true)
    const result = await signIn("OTP", {
      redirect: false,
      authMethod,
      contactInfo,
      otp: otpString
    })

    setLoading(false)
    setOtp(['', '', '', ''])
    inputRefs.current[0]?.focus()

    if (result?.ok) {
      toast.success(t("auth.success") ?? "ورود موفقیت‌آمیز")
      router.push("/") // ریدایرکت بعد از موفقیت
    } else {
      toast.error(t("auth.error") ?? "کد اشتباه یا منقضی شده است")
    }
  }

  const handleResend = () => {
    setCountdown(30)
    setCanResend(false)
    setOtp(['', '', '', ''])
    inputRefs.current[0]?.focus()
  }

  return (
    <div className="space-y-6" dir="rtl">
      {/* OTP Input */}
      <div className="flex justify-center gap-x-2 rtl:flex-row-reverse">
        {otp.map((digit, index) => (
          <Input
            key={index}
            ref={(el) => { inputRefs.current[index] = el }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="w-14 h-14 text-center text-xl font-semibold border-2 border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg"
          />
        ))}
      </div>

      {/* Verify Button */}
      <Button
        onClick={handleVerifyOTP}
        disabled={loading || otp.some(digit => !digit)}
        className="w-full h-12 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 text-white transition-colors duration-200"
      >
        {loading ? t("auth.verifying") : t("auth.verify_otp")}
      </Button>

      {/* Resend Section */}
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-600">{t("auth.didnt_receive_code")}</p>
        {canResend ? (
          <Button
            variant="link"
            onClick={handleResend}
            className="text-orange-600 hover:text-orange-700 p-0 h-auto font-medium"
          >
            {t("auth.resend_code")}
          </Button>
        ) : (
          <p className="text-sm text-gray-500">
            {t("auth.resend_in").replace("{seconds}", countdown.toString())}
          </p>
        )}
      </div>
    </div>
  )
}

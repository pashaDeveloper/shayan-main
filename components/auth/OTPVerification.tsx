'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

interface OTPVerificationProps {
  onSuccess: () => void
  onResend: () => void
}

export default function OTPVerification({ onSuccess, onResend }: OTPVerificationProps) {
  const [otp, setOtp] = useState(['', '', '', ''])
  const [isVerifying, setIsVerifying] = useState(false)
  const [countdown, setCountdown] = useState(30)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    // Focus first input on mount
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
    // Only allow digits and limit to 1 character
    const digit = value.replace(/\D/g, '').slice(0, 1)
    
    const newOtp = [...otp]
    newOtp[index] = digit
    setOtp(newOtp)

    // Auto-focus next input
    if (digit && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
    
    // Handle paste
    if (e.key === 'v' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      navigator.clipboard.readText().then((text) => {
        const digits = text.replace(/\D/g, '').slice(0, 4).split('')
        const newOtp = [...otp]
        
        digits.forEach((digit, i) => {
          if (i < 4) newOtp[i] = digit
        })
        
        setOtp(newOtp)
        
        // Focus the next empty input or the last input
        const nextIndex = Math.min(digits.length, 3)
        inputRefs.current[nextIndex]?.focus()
      })
    }
  }

  const handleVerifyOTP = async () => {
    const otpString = otp.join('')
    
    if (otpString.length !== 4) {
      toast.error('Please enter all 4 digits')
      return
    }

    setIsVerifying(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // For demo purposes, accept any 4-digit code
      // In real app, validate against server
      if (otpString === '0000') {
        toast.error('Invalid OTP. Please try again.')
        setOtp(['', '', '', ''])
        inputRefs.current[0]?.focus()
      } else {
        onSuccess()
      }
    } catch (error) {
      toast.error('Verification failed. Please try again.')
    } finally {
      setIsVerifying(false)
    }
  }

  const handleResend = () => {
    setCountdown(30)
    setCanResend(false)
    setOtp(['', '', '', ''])
    inputRefs.current[0]?.focus()
    onResend()
  }

  return (
    <div className="space-y-6">
      {/* OTP Input */}
      <div className="flex justify-center space-x-3">
        {otp.map((digit, index) => (
          <Input
            key={index}
ref={(el) => {
  inputRefs.current[index] = el
}}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-14 h-14 text-center text-xl font-semibold border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
            aria-label={`Digit ${index + 1}`}
          />
        ))}
      </div>

      {/* Verify Button */}
      <Button
        onClick={handleVerifyOTP}
        disabled={isVerifying || otp.some(digit => !digit)}
        className="w-full h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 transition-colors duration-200"
      >
        {isVerifying ? 'Verifying...' : 'Verify OTP'}
      </Button>

      {/* Resend Section */}
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-600">
          Didn't receive the code?
        </p>
        {canResend ? (
          <Button
            variant="link"
            onClick={handleResend}
            className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium"
          >
            Resend Code
          </Button>
        ) : (
          <p className="text-sm text-gray-500">
            Resend in {countdown}s
          </p>
        )}
      </div>

      {/* Help Text */}
      <div className="text-center">
        <p className="text-xs text-gray-500">
          For demo purposes, enter any 4-digit code except "0000"
        </p>
      </div>
    </div>
  )
}
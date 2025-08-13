'use client';

import React, { useState } from 'react';
import { X, Mail, Lock, User, Phone, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { login, register, isLoading } = useAuth();
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (mode === 'register') {
      if (!formData.name.trim()) {
        newErrors.name = language === 'fa' ? 'نام الزامی است' : 'Name is required';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = language === 'fa' ? 'شماره تلفن الزامی است' : 'Phone is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = language === 'fa' ? 'رمز عبور مطابقت ندارد' : 'Passwords do not match';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = language === 'fa' ? 'ایمیل الزامی است' : 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = language === 'fa' ? 'ایمیل معتبر نیست' : 'Email is invalid';
    }

    if (!formData.password.trim()) {
      newErrors.password = language === 'fa' ? 'رمز عبور الزامی است' : 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = language === 'fa' ? 'رمز عبور باید حداقل 6 کاراکتر باشد' : 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      let success = false;
      
      if (mode === 'login') {
        success = await login(formData.email, formData.password);
        if (!success) {
          setErrors({ general: language === 'fa' ? 'ایمیل یا رمز عبور اشتباه است' : 'Invalid email or password' });
        }
      } else {
        success = await register({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password
        });
        if (!success) {
          setErrors({ general: language === 'fa' ? 'کاربری با این ایمیل قبلاً ثبت نام کرده است' : 'User with this email already exists' });
        }
      }

      if (success) {
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: ''
        });
        setErrors({});
      }
    } catch (error) {
      setErrors({ general: language === 'fa' ? 'خطایی رخ داده است' : 'An error occurred' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#0F4C75] to-[#1e3a8a] p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              {mode === 'login' 
                ? (language === 'fa' ? 'ورود به حساب' : 'Login to Account')
                : (language === 'fa' ? 'ثبت نام' : 'Create Account')
              }
            </h2>
            <p className="text-blue-100">
              {mode === 'login'
                ? (language === 'fa' ? 'به حساب کاربری خود وارد شوید' : 'Sign in to your account')
                : (language === 'fa' ? 'حساب کاربری جدید ایجاد کنید' : 'Create a new account')
              }
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* General Error */}
            {errors.general && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                <p className="text-red-600 dark:text-red-400 text-sm">{errors.general}</p>
              </div>
            )}

            {/* Name Field (Register only) */}
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {language === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0F4C75] focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } dark:bg-gray-700 dark:text-white`}
                    placeholder={language === 'fa' ? 'نام خود را وارد کنید' : 'Enter your name'}
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'fa' ? 'ایمیل' : 'Email'}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0F4C75] focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } dark:bg-gray-700 dark:text-white`}
                  placeholder={language === 'fa' ? 'ایمیل خود را وارد کنید' : 'Enter your email'}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone Field (Register only) */}
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {language === 'fa' ? 'شماره تلفن' : 'Phone Number'}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0F4C75] focus:border-transparent transition-all ${
                      errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } dark:bg-gray-700 dark:text-white`}
                    placeholder={language === 'fa' ? 'شماره تلفن خود را وارد کنید' : 'Enter your phone number'}
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            )}

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'fa' ? 'رمز عبور' : 'Password'}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#0F4C75] focus:border-transparent transition-all ${
                    errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  } dark:bg-gray-700 dark:text-white`}
                  placeholder={language === 'fa' ? 'رمز عبور خود را وارد کنید' : 'Enter your password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password Field (Register only) */}
            {mode === 'register' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {language === 'fa' ? 'تکرار رمز عبور' : 'Confirm Password'}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0F4C75] focus:border-transparent transition-all ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } dark:bg-gray-700 dark:text-white`}
                    placeholder={language === 'fa' ? 'رمز عبور را تکرار کنید' : 'Confirm your password'}
                  />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#0F4C75] to-[#FFD700] text-white py-3 rounded-lg font-semibold hover:from-[#FFD700] hover:to-[#0F4C75] transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              {mode === 'login'
                ? (language === 'fa' ? 'ورود' : 'Login')
                : (language === 'fa' ? 'ثبت نام' : 'Register')
              }
            </button>
          </form>

          {/* Mode Switch */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              {mode === 'login'
                ? (language === 'fa' ? 'حساب کاربری ندارید؟' : "Don't have an account?")
                : (language === 'fa' ? 'قبلاً ثبت نام کرده‌اید؟' : 'Already have an account?')
              }
              <button
                type="button"
                onClick={() => {
                  setMode(mode === 'login' ? 'register' : 'login');
                  setErrors({});
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    confirmPassword: ''
                  });
                }}
                className="ml-2 text-[#0F4C75] hover:text-[#FFD700] font-semibold transition-colors"
              >
                {mode === 'login'
                  ? (language === 'fa' ? 'ثبت نام کنید' : 'Sign up')
                  : (language === 'fa' ? 'وارد شوید' : 'Sign in')
                }
              </button>
            </p>
          </div>

          {/* Demo Account Info */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="text-xs text-blue-600 dark:text-blue-400 text-center">
              {language === 'fa' ? 'حساب آزمایشی: admin@2shigroup.com / admin123' : 'Demo Account: admin@2shigroup.com / admin123'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
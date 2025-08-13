'use client';

import React, { useState } from 'react';
import { User, Settings, LogOut, Edit, Save, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile = ({ isOpen, onClose }: UserProfileProps) => {
  const { user, logout, updateProfile, isLoading } = useAuth();
  const { language } = useLanguage();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  if (!isOpen || !user) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const success = await updateProfile(formData);
    if (success) {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || ''
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    logout();
    onClose();
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
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
              ) : (
                <User className="h-10 w-10" />
              )}
            </div>
            <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
            <p className="text-blue-100 text-sm">{user.email}</p>
            <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs mt-2">
              {user.role === 'admin' 
                ? (language === 'fa' ? 'مدیر' : 'Admin')
                : (language === 'fa' ? 'کاربر' : 'User')
              }
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'}
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#0F4C75] focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              ) : (
                <div className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                  {user.name}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'fa' ? 'ایمیل' : 'Email'}
              </label>
              <div className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                {user.email}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {language === 'fa' ? 'ایمیل قابل تغییر نیست' : 'Email cannot be changed'}
              </p>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'fa' ? 'شماره تلفن' : 'Phone Number'}
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#0F4C75] focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              ) : (
                <div className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                  {user.phone || (language === 'fa' ? 'وارد نشده' : 'Not provided')}
                </div>
              )}
            </div>

            {/* Member Since */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'fa' ? 'عضو از تاریخ' : 'Member Since'}
              </label>
              <div className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white">
                {new Date(user.createdAt).toLocaleDateString(language === 'fa' ? 'fa-IR' : 'en-US')}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3">
            {isEditing ? (
              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {language === 'fa' ? 'ذخیره' : 'Save'}
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <X className="h-4 w-4" />
                  {language === 'fa' ? 'لغو' : 'Cancel'}
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-gradient-to-r from-[#0F4C75] to-[#FFD700] text-white py-3 rounded-lg font-semibold hover:from-[#FFD700] hover:to-[#0F4C75] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Edit className="h-4 w-4" />
                {language === 'fa' ? 'ویرایش پروفایل' : 'Edit Profile'}
              </button>
            )}

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              {language === 'fa' ? 'خروج از حساب' : 'Logout'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
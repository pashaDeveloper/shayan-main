'use client';

import React, { useEffect, useState } from 'react';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle,
  TrendingUp,
  Calendar,
  Bell,
  Star
} from 'lucide-react';
import '@/app/globals.css';
import { useAuth } from "@/contexts/AuthContext";

export default function UserDashboard() {
  const [stats, setStats] = useState<any>(null);

  const { user, isLoggedIn, status } = useAuth();

  const recentActivities = [
    {
      id: 1,
      type: 'service_request',
      title: 'درخواست خدمات مهاجرت',
      description: 'درخواست شما برای خدمات مهاجرت ثبت شد',
      date: '2 ساعت پیش',
      status: 'pending'
    },
    {
      id: 2,
      type: 'profile_update',
      title: 'بروزرسانی پروفایل',
      description: 'اطلاعات پروفایل شما بروزرسانی شد',
      date: '1 روز پیش',
      status: 'completed'
    },
    {
      id: 3,
      type: 'document_upload',
      title: 'آپلود مدارک',
      description: 'مدارک شما با موفقیت آپلود شد',
      date: '3 روز پیش',
      status: 'completed'
    }
  ];

  if (!user ) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0F4C75]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
    

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">کل درخواست‌ها</p>
              {/* <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalServices}</p> */}
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">در انتظار</p>
              {/* <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.pendingServices}</p> */}
            </div>
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">در حال بررسی</p>
              {/* <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.processingServices}</p> */}
            </div>
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">تکمیل شده</p>
              {/* <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.completedServices}</p> */}
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">فعالیت‌های اخیر</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.status === 'completed' ? 'bg-green-100 dark:bg-green-900/20' : 
                  activity.status === 'pending' ? 'bg-yellow-100 dark:bg-yellow-900/20' : 
                  'bg-blue-100 dark:bg-blue-900/20'
                }`}>
                  {activity.status === 'completed' ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : activity.status === 'pending' ? (
                    <Clock className="h-5 w-5 text-yellow-600" />
                  ) : (
                    <Bell className="h-5 w-5 text-blue-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{activity.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{activity.description}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">دسترسی سریع</h2>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="/dashboard/user/requests"
              className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              <FileText className="h-8 w-8 mb-2" />
              <h3 className="font-semibold">درخواست جدید</h3>
              <p className="text-sm opacity-90">ثبت درخواست خدمات</p>
            </a>

            <a
              href="/dashboard/user/profile"
              className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105"
            >
              <Calendar className="h-8 w-8 mb-2" />
              <h3 className="font-semibold">پروفایل</h3>
              <p className="text-sm opacity-90">ویرایش اطلاعات</p>
            </a>

            <a
              href="/fa/services"
              className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              <Star className="h-8 w-8 mb-2" />
              <h3 className="font-semibold">خدمات</h3>
              <p className="text-sm opacity-90">مشاهده خدمات</p>
            </a>

            <a
              href="/fa/contact"
              className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105"
            >
              <Bell className="h-8 w-8 mb-2" />
              <h3 className="font-semibold">پشتیبانی</h3>
              <p className="text-sm opacity-90">تماس با ما</p>
            </a>
          </div>
        </div>
      </div>

      {/* Member Info */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">اطلاعات عضویت</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">عضو از تاریخ</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {/* {new Date(stats.memberSince).toLocaleDateString('fa-IR')} */}
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">آخرین ورود</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {/* {stats.lastLogin ? new Date(stats.lastLogin).toLocaleDateString('fa-IR') : 'هرگز'} */}
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">وضعیت حساب</p>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
              فعال
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
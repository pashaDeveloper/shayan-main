'use client';

import React, { useEffect, useState } from 'react';
import { 
  Users, 
  FileText, 
  TrendingUp, 
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  BarChart3,
  PieChart
} from 'lucide-react';
import { Admin, AdminStats } from '@/lib/models/Admin';
import { AdminController } from '@/lib/controllers/AdminController';

export default function AdminDashboard() {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [stats, setStats] = useState<AdminStats | null>(null);

  useEffect(() => {
    const session = localStorage.getItem('adminSession');
    if (session) {
      const { admin: sessionAdmin } = JSON.parse(session);
      setAdmin(sessionAdmin);
      
      // Load admin stats
      AdminController.getAdminStats().then(setStats);
    }
  }, []);

  const recentActivities = [
    {
      id: 1,
      type: 'user_registration',
      title: 'کاربر جدید ثبت نام کرد',
      description: 'احمد محمدی حساب کاربری جدید ایجاد کرد',
      date: '30 دقیقه پیش',
      status: 'info'
    },
    {
      id: 2,
      type: 'service_completed',
      title: 'خدمات تکمیل شد',
      description: 'درخواست مهاجرت مریم احمدی تکمیل شد',
      date: '2 ساعت پیش',
      status: 'success'
    },
    {
      id: 3,
      type: 'payment_received',
      title: 'پرداخت دریافت شد',
      description: 'پرداخت 2000 دلاری از علی رضایی',
      date: '4 ساعت پیش',
      status: 'success'
    },
    {
      id: 4,
      type: 'service_request',
      title: 'درخواست خدمات جدید',
      description: 'درخواست خدمات املاک از فاطمه کریمی',
      date: '6 ساعت پیش',
      status: 'warning'
    }
  ];

  if (!admin || !stats) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              خوش آمدید، {admin.name}! 🛡️
            </h1>
            <p className="text-red-100 text-lg">
              پنل مدیریت سیستم - کنترل کامل بر عملکرد سیستم
            </p>
            <div className="mt-4 flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                admin.role === 'super_admin' 
                  ? 'bg-white/20 text-white' 
                  : 'bg-orange-200 text-orange-800'
              }`}>
                {admin.role === 'super_admin' ? 'مدیر کل' : 'مدیر'}
              </span>
              <span className="text-red-100">
                {admin.department} - {admin.position}
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
              <BarChart3 className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">کل کاربران</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalUsers}</p>
              <p className="text-green-600 text-sm">+{stats.newUsersThisMonth} این ماه</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">کل درخواست‌ها</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalServices}</p>
              <p className="text-orange-600 text-sm">{stats.pendingServices} در انتظار</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
              <FileText className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">درآمد ماهانه</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">${stats.monthlyRevenue.toLocaleString()}</p>
              <p className="text-green-600 text-sm">+12% نسبت به ماه قبل</p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">نرخ تکمیل</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.serviceCompletionRate.toFixed(1)}%</p>
              <p className="text-purple-600 text-sm">{stats.completedServices} تکمیل شده</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">فعالیت‌های اخیر</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.status === 'success' ? 'bg-green-100 dark:bg-green-900/20' : 
                  activity.status === 'warning' ? 'bg-yellow-100 dark:bg-yellow-900/20' : 
                  activity.status === 'error' ? 'bg-red-100 dark:bg-red-900/20' :
                  'bg-blue-100 dark:bg-blue-900/20'
                }`}>
                  {activity.status === 'success' ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : activity.status === 'warning' ? (
                    <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  ) : activity.status === 'error' ? (
                    <XCircle className="h-5 w-5 text-red-600" />
                  ) : (
                    <Clock className="h-5 w-5 text-blue-600" />
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

        {/* Quick Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">آمار سریع</h2>
          
          {/* Service Status Distribution */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">درخواست‌های در انتظار</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{stats.pendingServices}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-yellow-500 h-2 rounded-full" 
                  style={{ width: `${(stats.pendingServices / stats.totalServices) * 100}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">درخواست‌های تکمیل شده</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{stats.completedServices}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${(stats.completedServices / stats.totalServices) * 100}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">کاربران فعال</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{stats.activeUsers}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${(stats.activeUsers / stats.totalUsers) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <a
              href="/dashboard/admin/users"
              className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all text-center"
            >
              <Users className="h-6 w-6 mx-auto mb-1" />
              <span className="text-sm font-medium">مدیریت کاربران</span>
            </a>

            <a
              href="/dashboard/admin/requests"
              className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all text-center"
            >
              <FileText className="h-6 w-6 mx-auto mb-1" />
              <span className="text-sm font-medium">درخواست‌ها</span>
            </a>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">وضعیت سیستم</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">سرور</h3>
            <p className="text-sm text-green-600">آنلاین</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">پایگاه داده</h3>
            <p className="text-sm text-green-600">فعال</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">پشتیبان‌گیری</h3>
            <p className="text-sm text-yellow-600">در حال انجام</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">امنیت</h3>
            <p className="text-sm text-green-600">ایمن</p>
          </div>
        </div>
      </div>
    </div>
  );
}
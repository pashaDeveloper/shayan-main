"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  User,
  FileText,
  Settings,
  LogOut,
  Bell,
  Menu,
  X,

} from "lucide-react";
import { AuthProvider } from "@/contexts/AuthContext";
import { useAuth } from "@/contexts/AuthContext";
import ThemeToggle from "@/components/ThemeToggle";
import toast from "react-hot-toast";

export default function UserDashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { user, isLoggedIn, logout } = useAuth();
  const handleLogout = () => {
    logout();
    router.push("");
  };
  useEffect(() => {
    if (!user) {
      toast.error("لطفا ابتدا وارد شوید", {
      
      });

      const timer = setTimeout(() => {
        router.push("../auth/user/signin");
      }, 3000);

      return () => clearTimeout(timer);
    }else{
      toast.success(`${user.name} خوش آمدید`);
    }
  }, [user, router]);
  const menuItems = [
    { icon: Home, label: "داشبورد", href: "/dashboard/user" },
    { icon: User, label: "پروفایل", href: "/dashboard/user/profile" },
    { icon: FileText, label: "درخواست‌ها", href: "/dashboard/user/requests" },
    { icon: Settings, label: "تنظیمات", href: "/dashboard/user/settings" }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0F4C75]"></div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#0F4C75] to-[#FFD700] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2S</span>
                </div>
                <span className="font-bold text-gray-900 dark:text-white">
                  پنل کاربری
                </span>
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* User Info */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="mt-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#0F4C75] dark:hover:text-[#FFD700] transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Logout Button */}
            <div className="absolute bottom-6 left-6 right-6">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                <LogOut className="h-5 w-5" />
                خروج
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Bar */}
            <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between h-16 px-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                  <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                    داشبورد کاربری
                  </h1>
                </div>

                <div className="flex items-center gap-4">
                  {/* Theme Toggle */}
                  <ThemeToggle />

                  {/* Notifications */}
                  <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      3
                    </span>
                  </button>

                  {/* User Menu */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {user.name.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 overflow-auto p-6">{children}</main>
          </div>
        </div>

        {/* Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </AuthProvider>
  );
}

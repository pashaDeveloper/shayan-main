// components/AdminHeader.tsx
import React from 'react';
import { Menu, Sun, Moon, Bell, Shield } from 'lucide-react';

interface AdminHeaderProps {
  setIsSidebarOpen: (open: boolean) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
}
import ThemeToggle from "@/components/ThemeToggle";

const AdminHeader = ({ setIsSidebarOpen, isDark, setIsDark }: AdminHeaderProps) => {

  return (
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
            پنل مدیریت
          </h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Notifications */}
          <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              5
            </span>
          </button>

          {/* Admin Menu */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">


            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
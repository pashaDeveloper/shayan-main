// components/AdminSidebar.tsx
import React from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  FileText,
  Settings,
  BarChart3,
  Shield,
  Menu,
  X,
  Sun,
  Moon,
  Bell,
  LogOut
} from "lucide-react";
interface AdminSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
const menuItems = [
  { icon: BarChart3, label: "داشبورد", href: "/dashboard/admin" },
  { icon: Users, label: "مدیریت کاربران", href: "/dashboard/admin/users" },
  { icon: FileText, label: "درخواست‌ها", href: "/dashboard/admin/requests" },
  { icon: Shield, label: "مدیران", href: "/dashboard/admin/admins" },
  { icon: Settings, label: "تنظیمات", href: "/dashboard/admin/settings" }
];

const AdminSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen
}: AdminSidebarProps) => {

  const admin = useSelector((state: any) => state.admin.admin);
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
            <Shield className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-gray-900 dark:text-white">
            پنل مدیریت
          </span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {admin?.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {admin?.position}
            </p>
            <span
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                admin?.role === "superAdmin"
                  ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                  : "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400"
              }`}
            >
              {admin?.role === "superAdmin" ? "مدیر کل" : "مدیر"}
            </span>
          </div>
        </div>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </a>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <button
          //   onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
        >
          <LogOut className="h-5 w-5" />
          خروج
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

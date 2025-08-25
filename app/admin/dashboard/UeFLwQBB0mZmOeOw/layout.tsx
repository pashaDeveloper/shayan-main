"use client";
import React, { useState, useEffect } from "react";
import AdminHeader from "@/components/header/AdminHeader";
import AdminSidebar from "@/components/sidebar/AdminSidebar";
import "../../Style.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function AdminDashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const admin = useSelector((state: any) => state.admin.admin);
  const router = useRouter();

  useEffect(() => {
   console.log(admin)
    if (!admin) {
      toast.error("لطفا ابتدا وارد شوید", {
      
      });

      const timer = setTimeout(() => {
        router.push("/admin/auth/UeFLwQBB0mZmO6f/signin");
      }, 3000);

      return () => clearTimeout(timer);
    }else{
      toast.success(`${admin.name} خوش آمدید`);
    }
  }, [admin, router]);

  if (!admin ) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }
  return (
    <div className={`min-h-screen`}>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        {/* Sidebar */}
        <AdminSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <AdminHeader
            setIsSidebarOpen={setIsSidebarOpen}
            isDark={isDark}
            setIsDark={setIsDark}
          />

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
  );
}
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSigninMutation } from "@/services/auth/adminAuthApi";
import Spinner from "@/components/Spinner";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import "../../../Style.css";
import logo from "@/public/img/shayan.png";
import { toast } from "react-hot-toast";

interface FormValues {
  email: string;
  password: string;
}

const Signin = () => {
  const router = useRouter();
  const [signin, { isLoading, data, error }] = useSigninMutation();

  const { register, handleSubmit } = useForm<FormValues>();

  // handle API states
  useEffect(() => {
    const toastId = "signin-toast";

    if (isLoading) {
      toast.loading("در حال ورود...", { id: toastId });
    }
    if (data && data.success) {
      toast.success(data.message, { id: toastId });

      localStorage.setItem("accessToken", data.accessToken);

      setTimeout(() => {
        router.push("../../dashboard/UeFLwQBB0mZmOeOw")
      }, 2000);
    }
    if (data && !data.success) {
      toast.error(data.message, { id: toastId });
    }

    if (error) {
      const err = error as any;
      toast.error(err?.data?.message|| err?.data?.error || "خطا در ورود", { id: toastId });
    }
  }, [isLoading, data, error, router]);

  // submit handler
  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    signin(formData).unwrap();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overFlow-hide">
      <div className="wave"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>

      <div className="w-full max-w-md relative z-10">
        <Card className="shadow-xl border-0 bg-white/95 dark:bg-gray-900 backdrop-blur-sm">
          <CardHeader className="text-center flex items-center justify-center space-y-2">
            <div className="w-fit bg-gray-100 hover:dark:bg-gray-700 hover:bg-gray-200 dark:bg-gray-800 h-fit p-4 border-gray-800 rounded-full">
              <Image
                src={logo}
                alt="logo"
                width={80}
                height={80}
                className="mx-auto  rounded-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
              />
            </div>
            <CardTitle className="text-xl font-bold">ورود به حساب</CardTitle>
            <CardDescription>اطلاعات ورود خود را وارد کنید</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">ایمیل</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  required
                  {...register("email")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">رمز عبور</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="مانند Admin@123"
                  required
                  {...register("password")}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center hover:bg-purple-700  bg-violet-900  items-center dark:bg-blue-500 text-white"
              >
                {isLoading ? <Spinner /> : "ورود"}
              </Button>
            </form>

            <div className="flex justify-center mt-6">
              <ThemeToggle />
            </div>
            <div className="flex justify-between items-center text-sm mt-4">
              <Link
                href="./signup"
                className=" group inline-flex items-center border border-violet-900  dark:border-blue-600 px-4 py-2 rounded-md text-violet-900  dark:text-blue-500 hover:bg-violet-900/10  dark:hover:bg-gray-900 transition-colors"
              >
                ثبت‌نام
              </Link>
              <Link
                href="./forgot-password"
                className="group inline-flex items-center border border-violet-900  dark:border-blue-600 px-4 py-2 rounded-md text-violet-900  dark:text-blue-500 hover:bg-violet-900/10  dark:hover:bg-gray-900 transition-colors"
              >
                فراموشی رمز عبور
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signin;

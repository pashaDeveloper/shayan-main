"use client";

import React from "react";
import ThemeToggle from "@/components/ThemeToggle";
import StepSignUp from "./steps/StepSignUp";
import Link from "next/link";
import logo from "@/public/img/shayan.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const Signup = () => {

  const admin = useSelector((state: RootState) => state.admin);
  console.log("sidebar",admin)
  return (
    <section className="w-screen relative h-screen overflow-hidden flex justify-center items-center p-4 ">
 

      <div className="wave "></div>
      <div className="wave wave2 "></div>
      <div className="wave wave3"></div>
      <div className="max-w-md w-full bg-white dark:bg-gray-900 z-50 flex flex-col gap-y-4  p-8 rounded-md shadow-lg">
        <div className="flex flex-row items-center gap-x-2">
          <hr className="w-full   dark:border-gray-600" />{" "}
          <div className="w-fit bg-gray-100 hover:dark:bg-gray-700 hover:bg-gray-200 dark:bg-gray-800 h-fit p-4 border-gray-800 rounded-full">
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={200}
              className="  rounded-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </div>
          <hr className="w-full   dark:border-gray-600" />
        </div>
        <StepSignUp />
        <div className="flex flex-row justify-center items-center gap-x-2 text-xs">
          <Link href="./signin" className="">
            ورود
          </Link>
          <span className="h-4 border-l" />
          <Link href="./forgot-password" className="">
            فراموشی رمز عبور
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-2 text-xs">
          <ThemeToggle />
        </div>
      </div>

    </section>
  );
};

export default Signup;

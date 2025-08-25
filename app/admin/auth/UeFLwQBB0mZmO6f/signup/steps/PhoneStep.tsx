import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface FormValues {
  avatar: File | string;
  name: string;
  email: string;
  password: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  street: string;
  plateNumber: string;
  postalCode: string;
  floor?: string;
  unit?: string;
  bio: string;
}


interface PhoneStepProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
    prevStep: () => void;

}

const PhoneStep: React.FC<PhoneStepProps> = ({ register, errors ,prevStep}) => {
  return (
    <label htmlFor="phone" className="flex flex-col gap-y-1">
      <span className="text-sm">شماره تلفن خود را وارد کنید</span>
      <input
        type="tel"
        id="phone"
        {...register("phone", {
          required: "وارد کردن شماره تلفن الزامی است",
          pattern: {
            value: /^\+?[0-9]{10,15}$/,
            message: "شماره تلفن صحیح نیست",
          },
        })}
        placeholder="شماره تلفن"
        className="p-2 rounded border"
      />
      {errors.phone && (
        <span className="text-red-500 text-sm">{errors.phone.message}</span>
      )}
    </label>
  );
};

export default PhoneStep;

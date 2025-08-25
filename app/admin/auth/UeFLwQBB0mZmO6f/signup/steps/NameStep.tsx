import React from "react";
import NavigationButton from "@/components/buttons/NavigationButton";
import { UseFormRegister, FieldErrors } from "react-hook-form";

// Import or define FormValues to match StepSignUp
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

interface NameStepProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  prevStep: () => void;
  nextStep: () => void;
}

const NameStep: React.FC<NameStepProps> = ({ register, errors, prevStep, nextStep }) => {
  return (
    <>
      <label htmlFor="name" className="flex flex-col gap-y-1">
        <span className="text-sm">نام خود را وارد کنید</span>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "وارد کردن نام الزامی است",
            minLength: { value: 3, message: "نام باید حداقل ۳ حرف داشته باشد" },
            maxLength: { value: 30, message: "نام نباید بیشتر از ۳۰ حرف باشد" },
          })}
          placeholder="نام"
          maxLength={100}
          className="p-2 rounded border"
        />
        {errors.name?.message && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
      </label>

      <div className="flex justify-between mt-12">
        <NavigationButton direction="next" onClick={nextStep} />
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </>
  );
};

export default NameStep;
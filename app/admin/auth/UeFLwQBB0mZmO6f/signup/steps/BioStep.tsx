import React from "react";
import NavigationButton from "@/components/buttons/NavigationButton";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface BioFormValues {
  bio: string;
}

interface BioStepProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<BioFormValues>;
  prevStep: () => void;
  nextStep: () => void;
}

const BioStep: React.FC<BioStepProps> = ({
  register,
  errors,
  prevStep,
  nextStep
}) => {
  return (
    <>
      <label htmlFor="bio" className="flex flex-col gap-y-1">
        <span className="text-sm">بیوگرافی خود را وارد کنید</span>
        <textarea
          id="bio"
          rows={6}
          {...register("bio", {
            required: "وارد کردن بیوگرافی الزامی است",
            minLength: {
              value: 3,
              message: "بیوگرافی باید حداقل ۳ حرف داشته باشد"
            },
            maxLength: {
              value: 900,
              message: "بیوگرافی نباید بیشتر از 900 حرف باشد"
            }
          })}
          placeholder="بیوگرافی"
          maxLength={900}
          className="p-2 rounded border "
        />
          {errors.bio && <span className="text-red-500 text-sm">{errors.bio.message}</span>}

      </label>

      <div className="flex justify-between mt-12">
        <NavigationButton direction="next" onClick={nextStep} />
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </>
  );
};

export default BioStep;

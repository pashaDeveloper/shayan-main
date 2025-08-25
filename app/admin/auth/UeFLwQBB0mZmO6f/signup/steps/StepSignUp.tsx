"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";

import AvatarStep from "./AvatarStep";
import NameStep from "./NameStep";
import EmailStep from "./EmailStep";
import PasswordStep from "./PasswordStep";
import AddressStep from "./AddressStep";
import BioStep from "./BioStep";
import PhoneStep from "./PhoneStep";
import StepIndicator from "./StepIndicator";
import NavigationButton from "@/components/buttons/NavigationButton";
import SendButton from "@/components/buttons/SendButton";
import { useSignupMutation } from "@/services/auth/adminAuthApi";
import { useRouter } from "next/navigation";

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

const StepSignUp: React.FC = () => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [signup, { isLoading, data, error }] = useSignupMutation();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>(
    {}
  );
  const [invalidSteps, setInvalidSteps] = useState<Record<number, boolean>>({});

  const {
    register,
    setValue,
    formState: { errors },
    trigger,
    handleSubmit,
    watch
  } = useForm<FormValues>({ mode: "onChange" });
  const totalSteps = 7;
  const watchedFields = watch();
  const router = useRouter();

  useEffect(() => {
    const toastId = "signup-toast";

    if (isLoading) {
      toast.loading("در حال ثبت نام...", {
        id: toastId
      });
    }
    if (data) {
      toast.success(data.message, { id: toastId });

      setTimeout(() => {
        router.push("./signin");
      }, 2000);
    }

    if (error) {
      const err = error as any;
      toast.error(err?.data?.error, { id: toastId });
    }
  }, [isLoading, data, error]);

  const handleImageSelect = (imageOrUrl: File | string) => {
    const imageUrl =
      typeof imageOrUrl === "string"
        ? imageOrUrl
        : URL.createObjectURL(imageOrUrl);
    setAvatarPreview(imageUrl);
    setValue("avatar", imageOrUrl, { shouldValidate: true });
  };

  // frontend
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: {
        country: data.country,
        state: data.state,
        city: data.city,
        street: data.street,
        plateNumber: data.plateNumber,
        postalCode: data.postalCode,
        floor: data.floor,
        unit: data.unit
      },
      bio: data.bio,
      avatarUrl: typeof data.avatar === "string" ? data.avatar : undefined
    };

    signup(body).unwrap(); // RTK Query یا fetch
  };

  const nextStep = async () => {
    let valid = false;
    switch (currentStep) {
      case 1:
        if (!avatarPreview) {
          toast.error("لطفاً عکس پروفایل خود را انتخاب کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        valid = true;
        break;
      case 2:
        valid = await trigger("name");
        if (!valid) {
          toast.error("لطفاً نام خود را وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        break;
      case 3:
        valid = await trigger("email");
        if (!valid) {
          toast.error("لطفاً ایمیل خود را به شکل صحیح وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        break;
      case 4:
        valid = await trigger("password");
        if (!valid) {
          toast.error("لطفاً رمز عبور خود را به طور صحیح وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        break;
      case 5:
        valid = await trigger([
          "country",
          "state",
          "city",
          "street",
          "plateNumber",
          "postalCode"
        ]);
        if (!valid) {
          toast.error("لطفاً آدرس خود را به شکل صحیح وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        break;
      case 6:
        valid = await trigger("bio");
        if (!valid) {
          toast.error("لطفاً بیوگرافی خود را به شکل صحیح وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        break;
      case 7:
        valid = await trigger("phone");
        if (!valid) {
          toast.error("لطفاً شماره تلفن خود را به شکل صحیح وارد کنید");
          setInvalidSteps((prev) => ({ ...prev, [currentStep]: true }));
          return;
        }
        break;
      default:
        break;
    }

    if (valid) {
      setCompletedSteps((prev) => ({ ...prev, [currentStep]: true }));
      setInvalidSteps((prev) => ({ ...prev, [currentStep]: false }));
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return (
          <AvatarStep
            avatarPreview={avatarPreview}
            handleImageSelect={handleImageSelect}
            nextStep={nextStep}
            register={register}
            errors={errors.avatar}
          />
        );
      case 2:
        return (
          <NameStep
            register={register}
            errors={errors}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <EmailStep
            register={register}
            errors={errors}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 4:
        return (
          <PasswordStep
            register={register}
            errors={errors}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 5:
        return (
          <AddressStep
            register={register}
            errors={errors}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 6:
        return (
          <BioStep
            register={register}
            errors={errors}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 7:
        return (
          <PhoneStep register={register} errors={errors} prevStep={prevStep} />
        );
      default:
        return null;
    }
  };

  const handleStepClick = async (step: number) => {
    if (step < currentStep) setCurrentStep(step);
    else {
      for (let i = 1; i < step; i++) {
        if (!completedSteps[i]) {
          toast.error(`لطفاً ابتدا مرحله ${i} را تکمیل کنید.`);
          setCurrentStep(i);
          return;
        }
      }
      setCurrentStep(step);
    }
  };

  useEffect(() => {
    const fieldToStep: Record<string, number> = {
      avatar: 1,
      name: 2,
      email: 3,
      password: 4,
      phone: 7
    };
    setInvalidSteps((prev) => {
      const newInvalid = { ...prev };
      Object.keys(errors).forEach((field) => {
        const step = fieldToStep[field];
        if (step) newInvalid[step] = true;
      });
      return JSON.stringify(prev) !== JSON.stringify(newInvalid)
        ? newInvalid
        : prev;
    });
    setCompletedSteps((prev) => {
      const newCompleted = { ...prev };
      Object.entries(watchedFields).forEach(([field, value]) => {
        const step = fieldToStep[field];
        if (step) newCompleted[step] = !!value;
      });
      return JSON.stringify(prev) !== JSON.stringify(newCompleted)
        ? newCompleted
        : prev;
    });
  }, [errors, watchedFields]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StepIndicator
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepClick={handleStepClick}
        completedSteps={completedSteps}
        invalidSteps={invalidSteps}
      />
      {renderStepContent(currentStep)}
      {currentStep === totalSteps && (
        <div className="flex justify-between mt-12">
          <SendButton />
          <NavigationButton direction="prev" onClick={prevStep} />
        </div>
      )}
    </form>
  );
};

export default StepSignUp;

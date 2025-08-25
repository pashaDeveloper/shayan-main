import React from "react";
import SkeletonImage from "@/components/skeletons/SkeletonImage";
import ProfileImageSelector from "@/components/gallery/ProfileImageSelector";
import NavigationButton from "@/components/buttons/NavigationButton";
import { UseFormRegister, FieldError } from "react-hook-form";

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

interface AvatarStepProps {
  avatarPreview: string | null;
  handleImageSelect: (imageOrUrl: File | string) => void;
  nextStep: () => void;
  register: UseFormRegister<FormValues>;
  errors?: FieldError; // Type for errors.avatar
}

const AvatarStep: React.FC<AvatarStepProps> = ({
  avatarPreview,
  handleImageSelect,
  nextStep,
  register,
  errors,
}) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="profile-container shine-effect rounded-full flex justify-center mb-4">
          {avatarPreview ? (
            <img
              src={avatarPreview}
              alt="avatar"
              height={100}
              width={100}
              className="h-[100px] w-[100px] profile-pic rounded-full"
            />
          ) : (
            <SkeletonImage />
          )}
        </div>

        <ProfileImageSelector onImageSelect={handleImageSelect} />

        {errors?.message && (
          <span className="text-red-500 text-sm mt-2">{errors.message}</span>
        )}
      </div>

      <div className="flex justify-start mt-12">
        <NavigationButton direction="next" onClick={nextStep} />
      </div>
    </>
  );
};

export default AvatarStep;
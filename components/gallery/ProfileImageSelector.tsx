import React, { useState, useEffect, useMemo } from "react";
import Modal from "@/components/modal/Modal";
import Avatar from "./Avatar";
import CloudUpload from "@/components/icons/CloudUpload";

interface ProfileImageSelectorProps {
  onImageSelect: (image: File | string) => void;
}

const ProfileImageSelector: React.FC<ProfileImageSelectorProps> = ({ onImageSelect }) => {
  const [showModal, setShowModal] = useState(false);
  const [isFemale, setIsFemale] = useState(true);
  const [avatarUrls, setAvatarUrls] = useState<string[]>([]);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const maleAvatars = useMemo(
    () => Array.from({ length: 50 }, (_, i) => `/avatar/male/${i + 1}.png`),
    []
  );

  const femaleAvatars = useMemo(
    () => Array.from({ length: 50 }, (_, i) => `/avatar/female/${i + 51}.png`),
    []
  );

  useEffect(() => {
    handleGenderSelection("female");
  }, [femaleAvatars]);

  const handleDeviceSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarPreview(imageUrl);
      onImageSelect(file);
      setShowModal(false);
    }
  };

  const handleGenderSelection = (gender: "male" | "female") => {
    if (gender === "male") {
      setIsFemale(false);
      setAvatarUrls(maleAvatars);
    } else {
      setIsFemale(true);
      setAvatarUrls(femaleAvatars);
    }
  };

  const handleAvatarClick = (url: string) => {
    setAvatarPreview(url);
    onImageSelect(url);
    setShowModal(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="py-1 px-4 flex flex-row gap-x-2 dark:bg-blue-100 bg-green-100 border dark:text-blue-700 dark:border-blue-900 border-green-900 text-green-900 rounded-md w-fit text-sm"
      >
        <CloudUpload className="h-5 w-5 dark:!text-blue-700" />
        انتخاب عکس پروفایل*
      </button>

      <Modal
        isOpen={showModal}
        className="lg:!w-1/3 md:!w-2/5 h-fit"
        onClose={() => setShowModal(false)}
      >
        <div className="flex flex-col p-2 gap-y-4 justify-center items-center">
          <div className="flex justify-center w-full gap-2">
            <button
              type="button"
              onClick={() => handleGenderSelection("female")}
              className={`flex-1 py-2 rounded-lg ${
                isFemale ? "bg-[#5D1A75] text-white" : "bg-white text-gray-700"
              }`}
            >
              خانم
            </button>
            <button
              type="button"
              onClick={() => handleGenderSelection("male")}
              className={`flex-1 py-2 rounded-lg ${
                !isFemale ? "bg-[#5D1A75] text-white" : "bg-white text-gray-700"
              }`}
            >
              آقا
            </button>
          </div>

          <div className="flex flex-wrap gap-y-2 overflow-y-auto  h-[250px] w-full">
            {avatarUrls.map((url, index) => (
              <div key={index} className="w-1/3">
                <Avatar avatarUrl={url} onAvatarClick={() => handleAvatarClick(url)} loading={false} />
              </div>
            ))}
          </div>

         
        </div>
      </Modal>
    </>
  );
};

export default ProfileImageSelector;

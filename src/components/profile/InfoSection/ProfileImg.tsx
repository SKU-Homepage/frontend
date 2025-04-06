"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const ProfileImg = () => {
  const [img, setImg] = useState("/images/ex.svg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImg(imageUrl);
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative aspect-[79/98] w-[22.25%] rounded-[7.8px]">
      <Image src={img} fill alt="프로필 이미지" />
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />
      <button
        onClick={openFilePicker}
        className="absolute right-[0px] bottom-[0px] h-[26px] w-[26px] translate-x-[50%] translate-y-[50%]"
      >
        <Image src="/images/edit.svg" fill alt="수정 아이콘" />
      </button>
    </div>
  );
};

export default ProfileImg;

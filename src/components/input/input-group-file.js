"use client";

import React, { useRef } from "react";
import Image from "next/image";

const InputGroupFile = (props) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      props?.handleChange(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col gap-[23px]">
      <div className="text-[24px] font-normal">{props?.text}</div>
      <div
        className="rounded-xl border border-primary px-3 py-4 flex items-center cursor-pointer"
        onClick={handleClick}
      >
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />
        <span className="flex-grow whitespace-nowrap text-ellipsis overflow-hidden">
          {props?.value || props?.placeholder || "Select file"}
        </span>
        <Image
          src={"/images/upload-icon.svg"}
          height={24}
          width={24}
          alt="upload icon"
        />
      </div>
    </div>
  );
};

export default InputGroupFile;

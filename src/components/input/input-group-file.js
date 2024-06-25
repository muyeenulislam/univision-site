import React, { useRef } from "react";
import Image from "next/image";
import { message } from "antd";

const InputGroupFile = (props) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 1048576) {
        props?.handleChange(file);
      } else {
        message.warning("Max file size limit is 1MB.");
        fileInputRef.current.value = null;
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="text-[20px] font-normal">{props?.text}</div>
      <div
        className="rounded-xl border border-primary px-3 py-4 flex items-center cursor-pointer flex justify-between"
        onClick={handleClick}
      >
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />
        <span className="flex-grow whitespace-nowrap text-ellipsis overflow-hidden max-w-[500px]">
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

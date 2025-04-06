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
    <div className="flex flex-col gap-[1em]">
      <div className="text-[1.25em] font-normal">
        {props?.text}{" "}
        {props?.required && <span className="text-red-700">*</span>}
      </div>
      <div
        className="rounded-xl border border-primary px-3 py-2 flex items-center cursor-pointer justify-between"
        onClick={handleClick}
      >
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />
        <span className="flex-grow whitespace-nowrap text-ellipsis overflow-hidden max-w-[31.25em]">
          {props?.value || props?.placeholder || "Select file"}
        </span>
        <div className="h-[1.5em] w-[1.5em]">
          <Image
            src={"/images/upload-icon.svg"}
            height={24}
            width={24}
            alt="upload icon"
          />
        </div>
      </div>
    </div>
  );
};

export default InputGroupFile;

"use client";
import React from "react";

const InputGroupText = (props) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="text-[20px] font-normal">{props?.text}</div>
      <div className="rounded-xl border border-primary px-3 py-4">
        <input
          type={props?.type || "text"}
          placeholder={props?.placeholder || "Enter value"}
          onChange={(e) => props?.handleChange(e.target.value)}
          className="outline-none w-full"
          value={props?.value || ""}
        />
      </div>
    </div>
  );
};

export default InputGroupText;

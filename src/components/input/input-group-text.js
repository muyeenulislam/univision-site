"use client";
import React from "react";

const InputGroupText = (props) => {
  return (
    <div className="flex flex-col gap-[1em]">
      <div className="text-[1.25em] font-normal">
        {props?.text}{" "}
        {props?.required && <span className="text-red-700">*</span>}
      </div>
      <div className="rounded-xl border border-primary px-3 py-2">
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

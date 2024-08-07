"use client";
import React from "react";

const InputGroupTextbox = (props) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="text-[18px] font-normal">
        {props?.text}{" "}
        {props?.required && <span className="text-red-700">*</span>}
      </div>
      <div className="rounded-xl border border-primary px-3 py-2">
        <textarea
          type="textbox"
          rows={4}
          placeholder={props?.placeholder || "Enter value"}
          onChange={(e) => props?.handleChange(e.target.value)}
          className="outline-none w-full"
          value={props?.value || undefined}
        />
      </div>
    </div>
  );
};

export default InputGroupTextbox;

import React from "react";

import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/bootstrap.css";

const InputGroupPhone = (props) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="text-[20px] font-normal">{props?.text}</div>
      <div className="rounded-xl border border-primary px-3 py-4">
        <PhoneInput
          country={"my"}
          placeholder="Enter phone number"
          value={props?.value}
          onChange={(phone) => props?.handleChange(phone)}
        />
      </div>
    </div>
  );
};

export default InputGroupPhone;

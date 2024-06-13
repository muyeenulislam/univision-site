import React from "react";

import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/bootstrap.css";

const InputGroupPhone = (props) => {
  return (
    <div className="flex flex-col gap-[23px]">
      <div className="text-[24px] font-normal">{props?.text}</div>
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

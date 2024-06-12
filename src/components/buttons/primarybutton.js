import React from "react";

const PrimaryButton = (props) => {
  return (
    <button
      className="rounded-2xl bg-primary text-white border w-full border-primary max-w-[300px] py-3 px-6 font-bold text-ellipsis overflow-hidden whitespace-nowrap shadow-md"
      {...props}
    >
      {props?.text}
    </button>
  );
};

export default PrimaryButton;

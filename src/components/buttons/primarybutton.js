import React from "react";

const PrimaryButton = (props) => {
  return (
    <button
      className={`rounded-2xl bg-primary text-white border hover:bg-white hover:text-primary transition-all w-full border-primary  py-3 px-6 font-bold text-ellipsis overflow-hidden whitespace-nowrap shadow-md`}
      style={{ width: props?.width ?? "100%" }}
      {...props}
    >
      {props?.text}
    </button>
  );
};

export default PrimaryButton;

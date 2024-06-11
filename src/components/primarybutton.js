import React from "react";

const PrimaryButton = (props) => {
  return (
    <button
      className="rounded-2xl bg-primary text-white max-w-[300px] py-3 px-6 font-bold text-ellipsis overflow-hidden whitespace-nowrap"
      {...props}
    >
      {props?.text}
    </button>
  );
};

export default PrimaryButton;

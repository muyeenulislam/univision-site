import React from "react";

const PrimaryButton = (props) => {
  const maxWidthClass = props?.width
    ? `max-w-[${props.width}]`
    : "max-w-[300px]";

  return (
    <button
      className={`rounded-2xl bg-primary text-white border w-full border-primary ${maxWidthClass} py-3 px-6 font-bold text-ellipsis overflow-hidden whitespace-nowrap shadow-md`}
      {...props}
    >
      {props?.text}
    </button>
  );
};

export default PrimaryButton;

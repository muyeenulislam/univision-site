import React from "react";

const WhiteButton = (props) => {
  return (
    <button
      className="rounded-2xl border border-primary bg-white max-w-[300px] py-3 px-6 text-primary font-bold text-ellipsis overflow-hidden whitespace-nowrap"
      {...props}
    >
      {props?.text}
    </button>
  );
};

export default WhiteButton;

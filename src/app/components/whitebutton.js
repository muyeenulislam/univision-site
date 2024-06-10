import React from "react";

const WhiteButton = (props) => {
  return (
    <button
      className="rounded-2xl border-#038175 bg-white w-[300px] py-3 text-[#038175] font-bold"
      {...props}
    >
      {props?.text}
    </button>
  );
};

export default WhiteButton;

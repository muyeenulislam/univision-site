"use client";
import React from "react";

import { Select, ConfigProvider } from "antd";

const InputGroupDropdown = (props) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="text-[20px] font-normal">
        {props?.text}{" "}
        {props?.required && <span className="text-red-700">*</span>}
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorBgElevated: "white",
            colorText: "black",
          },
        }}
      >
        <Select
          value={props?.value || null}
          onChange={(e) => props?.handleChange(e)}
          placeholder={props?.placeholder || null}
        >
          {props?.dropItems?.map((value, i) => (
            <Select.Option value={value} key={i}>
              {value}
            </Select.Option>
          ))}
        </Select>
      </ConfigProvider>
    </div>
  );
};

export default InputGroupDropdown;

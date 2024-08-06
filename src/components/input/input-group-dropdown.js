"use client";
import React, { useState } from "react";
import { Select, ConfigProvider, Input, Dropdown, Menu } from "antd";

const InputGroupDropdown = (props) => {
  const [isOthersSelected, setIsOthersSelected] = useState(false);
  const [othersValue, setOthersValue] = useState("");

  const handleChange = (value) => {
    if (value === "Others") {
      setIsOthersSelected(true);
    } else {
      setIsOthersSelected(false);
      props?.handleChange(value);
    }
  };

  const handleInputChange = (e) => {
    setOthersValue(e.target.value);
    props?.handleChange(e.target.value);
  };

  const menu = (
    <Menu>
      {props?.dropItems?.map(
        (value, i) =>
          value !== "Others" && (
            <Menu.Item key={i} onClick={() => handleChange(value)}>
              {value}
            </Menu.Item>
          )
      )}
      {props?.dropItems?.includes("Others") && (
        <Menu.Item key="others" onClick={() => handleChange("Others")}>
          Others
          <Input
            autoFocus
            placeholder="Please specify"
            value={othersValue}
            onChange={handleInputChange}
            onClick={(e) => e.stopPropagation()}
            style={{ marginTop: 8 }}
          />
        </Menu.Item>
      )}
    </Menu>
  );

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
        <Dropdown overlay={menu} trigger={["click"]}>
          <Select
            value={isOthersSelected ? othersValue : props?.value || null}
            placeholder={props?.placeholder || null}
            onClick={(e) => e.preventDefault()}
            open={false}
          ></Select>
        </Dropdown>
      </ConfigProvider>
    </div>
  );
};

export default InputGroupDropdown;

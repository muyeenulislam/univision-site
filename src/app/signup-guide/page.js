"use client";
import { useState } from "react";

import { Tabs } from "antd";

import WhiteButton from "@/components/buttons/whitebutton";
import PrimaryButton from "@/components/buttons/primarybutton";
import MobileAppSignup from "@/components/signup-guide/mobile-app";
import WebAppSignup from "@/components/signup-guide/web-app";

import Spacer from "@/utils/spacer";
const SignupGuide = () => {
  const [activeKey, setActiveKey] = useState("1");

  const items = [
    {
      key: "1",
      label:
        activeKey === "1" ? (
          <PrimaryButton text="Mobile Application" />
        ) : (
          <WhiteButton text="Mobile Application" />
        ),
      children: <MobileAppSignup />,
    },
    {
      key: "2",
      label:
        activeKey === "2" ? (
          <PrimaryButton text="Web Application" />
        ) : (
          <WhiteButton text="Web Application" />
        ),
      children: <WebAppSignup />,
    },
  ];

  return (
    <div className="bg-[url('/images/career-bg.svg')]  w-full bg-no-repeat">
      <Spacer height="120px" />
      <div className="flex flex-col justify-center items-center">
        <div className="section-header px-4">Sign Up Guide</div>
        <Spacer height="12px" />
        <div className="text-[28px] px-4">
          {activeKey === "1" ? "For Mobile Application" : "For Web Application"}
        </div>
      </div>
      <Spacer height="36px" />
      <Tabs
        defaultActiveKey="1"
        items={items}
        animated
        centered
        onChange={(e) => setActiveKey(e)}
      />
      <Spacer height="80px" />
    </div>
  );
};

export default SignupGuide;

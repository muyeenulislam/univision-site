"use client";
import { useState } from "react";
import Image from "next/image";

import { Tabs, ConfigProvider } from "antd";

import WhiteButton from "@/components/whitebutton";
import PrimaryButton from "@/components/primarybutton";
import Spacer from "@/components/spacer";

export default function Home() {
  const [activeKey, setActiveKey] = useState("1");
  console.log(activeKey);
  const items = [
    {
      key: "1",
      label:
        activeKey === "1" ? (
          <PrimaryButton text="For Students" />
        ) : (
          <WhiteButton text="For Students" />
        ),
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label:
        activeKey === "2" ? (
          <PrimaryButton text="For Institutions" />
        ) : (
          <WhiteButton text="For Institutions" />
        ),
      children: "Content of Tab Pane 2",
    },
  ];

  return (
    <div>
      <div className="bg-[url('/images/home-cover.png')] w-full bg-cover bg-center ">
        <div className="flex justify-between items-center px-[50px] md:px-[120px] py-[170px]">
          <div className="flex flex-col gap-5 w-full lg:w-[40%]">
            <div className="text-white text-[40px] md:text-[60px] font-extrabold ">
              Your Dream, Our Responsibility
            </div>
            <div className="text-white text-[20px]">
              UniVision is aimed at developing a centralized platform that
              provides all relevant information to students in selecting
              colleges to apply to, while simultaneously providing their school
              counselors with a dynamic platform to oversee this process.
            </div>
            <WhiteButton text="Get Started" />
          </div>

          <div className="w-[50%] hidden lg:block">
            <Image
              src={"/images/banner-secondary.png"}
              height={890}
              width={890}
              alt=""
            />
          </div>
        </div>
      </div>
      <Spacer height="20px" />
      <div className="flex justify-center items-center flex-col px-[50px] md:px-[120px] ">
        <div className="section-header">Our Products</div>
        <Spacer height="20px" />
        <div className="text-[32px] font-normal leading-[39px] text-center">
          UniVision is an EdTech solution providing you with everything you need
          to know about your prospective universities.
        </div>
        <Spacer height="20px" />
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                inkBarColor: "white",
                itemActiveColor: "white",
              },
            },
          }}
        >
          <Tabs
            defaultActiveKey="1"
            items={items}
            animated
            onChange={(e) => setActiveKey(e)}
          />
        </ConfigProvider>
      </div>
    </div>
  );
}

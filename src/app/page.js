"use client";
import { useState } from "react";
import Image from "next/image";

import { Tabs } from "antd";

import WhiteButton from "@/components/buttons/whitebutton";
import PrimaryButton from "@/components/buttons/primarybutton";
import ForInstitutions from "@/components/home/forinstitutions";
import ForStudents from "@/components/home/forstudents";
import CoreFeatures from "@/components/home/core-features";

import Spacer from "@/utils/spacer";

export default function Home() {
  const [activeKey, setActiveKey] = useState("1");

  const items = [
    {
      key: "1",
      label:
        activeKey === "1" ? (
          <PrimaryButton text="For Students" />
        ) : (
          <WhiteButton text="For Students" />
        ),
      children: <ForStudents />,
    },
    {
      key: "2",
      label:
        activeKey === "2" ? (
          <PrimaryButton text="For Institutions" />
        ) : (
          <WhiteButton text="For Institutions" />
        ),
      children: <ForInstitutions />,
    },
  ];

  return (
    <div>
      <div className="bg-[url('/images/home-cover.png')] w-full bg-no-repeat bg-cover">
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
      <div className="flex justify-center items-center flex-col">
        <div className="section-header px-[50px] md:px-[120px]">
          Our Products
        </div>
        <Spacer height="20px" />
        <div className="text-[32px] font-normal leading-[39px] text-center px-[50px] md:px-[120px]">
          UniVision is an EdTech solution providing you with everything you need
          to know about your prospective universities.
        </div>
        <Spacer height="20px" />

        <Tabs
          defaultActiveKey="1"
          items={items}
          animated
          centered
          onChange={(e) => setActiveKey(e)}
        />
      </div>
      <Spacer height="20px" />
      <div className="bg-[url('/images/core-features-bg.svg')] w-full bg-no-repeat bg-cover">
        <Spacer height="120px" />
        <div className="flex justify-center items-center flex-col">
          <div className="section-header px-[50px] md:px-[120px]">
            Core Features
          </div>
          <Spacer height="20px" />
          <div className="text-[32px] font-normal leading-[39px] text-center px-[50px] md:px-[120px]">
            A centralized ecosystem for schools
          </div>
          <Spacer height="60px" />
          <CoreFeatures />
          <Spacer height="60px" />
        </div>
      </div>
    </div>
  );
}

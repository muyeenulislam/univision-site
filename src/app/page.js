"use client";
import { useState } from "react";
import Image from "next/image";

import { Tabs } from "antd";

import WhiteButton from "@/components/buttons/whitebutton";
import PrimaryButton from "@/components/buttons/primarybutton";
import ForInstitutions from "@/components/home/forinstitutions";
import ForStudents from "@/components/home/forstudents";
import CoreFeaturesSchool from "@/components/home/core-features-school";
import CoreFeaturesStudent from "@/components/home/core-features-student";

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
    <div className="overflow-hidden">
      <div className="bg-[linear-gradient(to_right_bottom,rgba(3,129,117,0.75),rgba(2,55,50,0.75)),url('/images/hero-img.jpg')] h-[100vh] md:h-[90%] w-full bg-no-repeat bg-cover bg-center">
        <div className="flex justify-between items-center px-[50px] md:px-[120px] py-[170px] fade-in-right">
          <div className="flex flex-col gap-5 w-full lg:w-[50%]">
            <div className="text-white text-[30px] md:text-[38px] font-extrabold ">
              Your Dream, Our Responsibility
            </div>
            <div className="text-white text-[16px] md:text-[18px]">
              UniVision is aimed at developing a centralized platform that
              provides all relevant information to students in selecting
              colleges to apply to, while simultaneously providing their school
              counselors with a dynamic platform to oversee this process.
            </div>
            <a href="/explore">
              <WhiteButton text="Get Started" />
            </a>
          </div>

          <div className="w-[40%] hidden lg:block h-max">
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
      <div className="flex justify-center items-center flex-col fade-in-right">
        <div className="text-header px-[50px] md:px-[120px]">Our Products</div>
        <Spacer height="20px" />
        <div className="text-sub-header leading-[39px] text-center px-[50px] md:px-[120px]">
          UniVision is an EdTech solution providing you with all the information
          you need to know about your prospective universities.
        </div>
        <Spacer height="50px" />
        <Tabs
          size="small"
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
        <div className="flex justify-center items-center flex-col fade-in-right">
          <div className="text-header px-[50px] md:px-[120px]">
            Core Features
          </div>
          <Spacer height="20px" />
          <div className="text-sub-header leading-[39px] text-center px-[50px] md:px-[120px]">
            A centralized ecosystem for{" "}
            {activeKey === "1" ? "students" : "schools"}
          </div>
          <Spacer height="60px" />
          {activeKey === "1" ? <CoreFeaturesStudent /> : <CoreFeaturesSchool />}

          <Spacer height="60px" />
        </div>
      </div>
    </div>
  );
}

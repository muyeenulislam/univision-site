import React from "react";
import Image from "next/image";

import { Timeline, ConfigProvider } from "antd";

const WebAppSignup = () => {
  const stepsSchoolStudent = [
    {
      step: "Step 1:",
      title: "Register As Partner School Student",
      image: "/images/webapp-step1.png",
      timeline: [
        {
          children: "Enter Required Details",
        },
        {
          children: "If Your School Is Available In The List",
        },
        {
          children: "Click Continue",
        },
      ],
    },
    {
      step: "Step 2:",
      title: "If School Is Not Available",
      image: "/images/webapp-step2.png",
      timeline: [
        {
          children: "Proceed To An Individual Student",
        },
      ],
    },
    {
      step: "Step 3:",
      title: "Change Password",
      image: "/images/webapp-step3.png",
      timeline: [
        {
          children: "Enter New Password",
        },
        {
          children: "Confirm New Password",
        },
        {
          children: "Click Next",
        },
      ],
    },
    {
      step: "Step 4:",
      title: "Login To Continue",
      image: "/images/webapp-step4.png",
      timeline: [
        {
          children: "Enter Email",
        },
        {
          children: "Enter Password",
        },
        {
          children: "Click Sign In",
        },
      ],
    },
  ];
  const stepsIndividualStudent = [
    {
      step: (
        <div className="flex flex-col gap-11">
          <div className="text-primary font-bold text-[32px] md:text-[38px] lg:text-[76px]">
            Register As Individual Student
          </div>
          <div>Step 1:</div>
        </div>
      ),
      title: "Register As Individual Student",
      image: "/images/web-individual-step1.png",
      timeline: [
        {
          children: "Enter Required Details",
        },
        {
          children: "Click Continue",
        },
      ],
    },
    {
      step: "Step 2:",
      title: "Change Password",
      image: "/images/web-individual-step2.png",
      timeline: [
        {
          children: "Enter New Password",
        },
        {
          children: "Confirm New Password",
        },
        {
          children: "Click Next",
        },
      ],
    },
    {
      step: "Step 3:",
      title: "Select Your Subscription Plan",
      image: "/images/web-individual-step3.png",
      timeline: [
        {
          children: "Select Your Subscription Plan or",
        },
        {
          children: "Select Monthly Payment or",
        },
        {
          children: "Select One Time Payment",
        },
      ],
    },
    {
      step: "Step 4:",
      title: "Select Payment Method",
      image: "/images/web-individual-step4.png",
      timeline: [
        {
          children: "Credit/Debit Card",
        },
        {
          children: "Cash Collection On Delivery",
        },
      ],
    },
  ];
  return (
    <div className="relative px-[50px] md:px-[120px] overflow-hidden fade-in-right">
      <div className="absolute top-[450px] right-[-250px]">
        <Image
          src={"/images/signup-ellipse.svg"}
          height={600}
          width={600}
          alt=""
        />
      </div>
      <div className="absolute top-[1250px] left-[0%]">
        <Image
          src={"/images/signup-bg.svg"}
          height={1000}
          width={2100}
          alt=""
        />
      </div>
      <div className="absolute top-[1850px] left-[-250px]">
        <Image
          src={"/images/signup-ellipse.svg"}
          height={600}
          width={600}
          alt=""
        />
      </div>
      <div className="absolute top-[2350px] right-[-250px]">
        <Image
          src={"/images/signup-ellipse.svg"}
          height={600}
          width={600}
          alt=""
        />
      </div>

      <ConfigProvider
        theme={{
          token: {
            colorText: "black",
            fontSize: 16,
          },
          components: {
            Timeline: {
              dotBg: "#038175",
              tailColor: "#038175",
            },
          },
        }}
      >
        <div>
          {stepsSchoolStudent?.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row gap-5 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } justify-between `}
            >
              <div className="flex flex-col justify-center gap-6 w-full z-[10]">
                <div className="text-primary text-[26px] md:text-[47px] font-semibold">
                  {item?.step}
                </div>
                <div className="text-black text-[26px] lg:text-[47px] md:text-[36px] font-semibold">
                  {item?.title}
                </div>
                <Timeline items={item?.timeline} />
              </div>
              <div className="w-full flex justify-center items-center z-[10]">
                <Image src={item?.image} height={200} width={600} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div>
          {stepsIndividualStudent?.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } justify-between`}
            >
              <div className="flex flex-col justify-center gap-6 w-full z-[10]">
                <div className="text-primary text-[26px] md:text-[47px] font-semibold">
                  {item?.step}
                </div>
                <div className="text-black text-[26px] lg:text-[47px] md:text-[36px] font-semibold">
                  {item?.title}
                </div>
                <Timeline items={item?.timeline} />
              </div>
              <div className="w-full flex justify-center items-center  z-[10]">
                <Image src={item?.image} height={200} width={600} alt="" />
              </div>
            </div>
          ))}
        </div>
      </ConfigProvider>
    </div>
  );
};

export default WebAppSignup;

import React from "react";
import Image from "next/image";

import { Timeline, ConfigProvider } from "antd";
import Spacer from "@/utils/spacer";

const MobileAppSignup = () => {
  const stepsSchoolStudent = [
    {
      step: "Step 1:",
      title: "Sign Up",
      image: "/images/mobile-school-step1.png",
      timeline: [
        {
          children: "If You Are Not Registered Before",
        },
        {
          children: "Click Sign Up",
        },
      ],
    },
    {
      step: "Step 2:",
      title: "Register As Partner School Student",
      image: "/images/mobile-school-step2.png",
      timeline: [
        {
          children: "Register As Partner School Student",
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
      step: "Step 3:",
      title: "If School Is Not Available",
      image: "/images/mobile-school-step3.png",
      timeline: [
        {
          children: "Proceed To An Individual Student",
        },
      ],
    },
    {
      step: "Step 4:",
      title: "Create Password",
      image: "/images/mobile-school-step4.png",
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
      step: "Step 5:",
      title: "Login To Continue",
      image: "/images/mobile-school-step5.png",
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
    {
      step: "Step 6:",
      title: "Explore The App",
      image: "/images/mobile-school-step6.png",
      timeline: [
        {
          children: "Explore The App",
        },
        {
          children: "Try AI Recommender",
        },
        {
          children: "Multiple Other Features",
        },
      ],
    },
  ];
  const stepsIndividualStudent = [
    {
      step: "Step 1:",
      title: "Register As Individual Student",
      image: "/images/mobile-individual-step2.png",
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
      image: "/images/mobile-individual-step2.png",
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
      image: "/images/mobile-individual-step3.png",
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
      image: "/images/mobile-individual-step4.png",
      timeline: [
        {
          children: "Credit/Debit Card or",
        },
        {
          children: "Cash Collection On Delivery",
        },
      ],
    },
    {
      step: "Step 5:",
      title: "Login To Continue",
      image: "/images/mobile-individual-step5.png",
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
    {
      step: "Step 6:",
      title: "Explore The App",
      image: "/images/mobile-individual-step4.png",
      timeline: [
        {
          children: "Explore The App",
        },
        {
          children: "Try AI Recommender",
        },
        {
          children: "Multiple Other Features",
        },
      ],
    },
  ];
  return (
    <div className="relative px-[50px] md:px-[80px] lg:px-[150px] overflow-hidden fade-in-left">
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
        <div className="relative z-[100]">
          <div className="text-primary text-[42px] lg:text-[56px] xl:text-[71px] font-bold max-w-[550px] text-center md:text-left">
            Register as School Student
          </div>
          <Spacer height="50px" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stepsSchoolStudent?.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col-reverse  gap-5 ${
                  index === 1 || index === 3 || index === 5
                    ? "sm:flex-row-reverse"
                    : "sm:flex-row"
                } ${
                  index === 2 || index === 3
                    ? "md:flex-row-reverse"
                    : "md:flex-row"
                } justify-between `}
              >
                <div className="flex flex-col justify-center gap-6 w-full z-[10]">
                  <div className="text-primary text-[26px] md:text-[47px] font-semibold">
                    {item?.step}
                  </div>
                  <div className="text-black text-[26px] xl:text-[47px] lg:text-[36px] font-semibold">
                    {item?.title}
                  </div>
                  <Timeline items={item?.timeline} />
                </div>
                <div className="w-full flex justify-center items-center z-[10]">
                  <Image src={item?.image} height={100} width={200} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Spacer height="60px" />
        <div className="relative z-[100]">
          <div className="text-primary text-[42px] lg:text-[56px] xl:text-[71px] font-bold max-w-[550px] text-center md:text-left">
            Register as Individual Student
          </div>
          <Spacer height="50px" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stepsIndividualStudent?.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col-reverse  gap-5 ${
                  index === 1 || index === 3 || index === 5
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse"
                } ${
                  index === 2 || index === 3
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
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
                  <Image src={item?.image} height={100} width={200} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default MobileAppSignup;

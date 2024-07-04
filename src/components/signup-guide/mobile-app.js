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
          color: "#038175",
          children: "If You Are Not Registered Before",
        },
        {
          color: "#038175",
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
          color: "#038175",
          children: "Register As Partner School Student",
        },
        {
          color: "#038175",
          children: "If Your School Is Available In The List",
        },
        {
          color: "#038175",
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
          color: "#038175",
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
          color: "#038175",
          children: "Enter New Password",
        },
        {
          color: "#038175",
          children: "Confirm New Password",
        },
        {
          color: "#038175",
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
          color: "#038175",
          children: "Enter Email",
        },
        {
          color: "#038175",
          children: "Enter Password",
        },
        {
          color: "#038175",
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
          color: "#038175",
          children: "Explore The App",
        },
        {
          color: "#038175",
          children: "Try AI Recommender",
        },
        {
          color: "#038175",
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
          color: "#038175",
          children: "Enter Required Details",
        },
        {
          color: "#038175",
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
          color: "#038175",
          children: "Enter New Password",
        },
        {
          color: "#038175",
          children: "Confirm New Password",
        },
        {
          color: "#038175",
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
          color: "#038175",
          children: "Select Your Subscription Plan or",
        },
        {
          color: "#038175",
          children: "Select Monthly Payment or",
        },
        {
          color: "#038175",
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
          color: "#038175",
          children: "Credit/Debit Card or",
        },
        {
          color: "#038175",
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
          color: "#038175",
          children: "Enter Email",
        },
        {
          color: "#038175",
          children: "Enter Password",
        },
        {
          color: "#038175",
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
          color: "#038175",
          children: "Explore The App",
        },
        {
          color: "#038175",
          children: "Try AI Recommender",
        },
        {
          color: "#038175",
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
          <div className="text-primary text-[36px] lg:text-[40px] xl:text-[48px] font-bold max-w-[550px] text-center md:text-left">
            Register as School Student
          </div>
          <Spacer height="20px" />
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
                <div className="flex flex-col justify-center gap-3 w-full z-[10]">
                  <div className="text-primary text-[20px] md:text-[36px] font-semibold">
                    {item?.step}
                  </div>
                  <div className="text-black text-[20px] xl:text-[40px] lg:text-[30px] font-semibold">
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
          <div className="text-primary text-[36px] lg:text-[40px] xl:text-[48px] font-bold max-w-[550px] text-center md:text-left">
            Register as Individual Student
          </div>
          <Spacer height="20px" />
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
                <div className="flex flex-col justify-center gap-3 w-full z-[10]">
                  <div className="text-primary text-[20px] md:text-[36px] font-semibold">
                    {item?.step}
                  </div>
                  <div className="text-black text-[20px] xl:text-[40px] lg:text-[30px] font-semibold">
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

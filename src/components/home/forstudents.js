import React from "react";
import Link from "next/link";
import Image from "next/image";

import PrimaryButton from "../buttons/primarybutton";

import { FaRegCheckCircle } from "react-icons/fa";

import useScreenSize from "@/utils/usescreensize";
import Spacer from "@/utils/spacer";

const ForStudents = () => {
  const screenSize = useScreenSize();

  const mobileAppList = [
    {
      title: "Announcements",
      subTitle: "Keep tabs on news from your watchlisted universities",
    },
    {
      title: "University Comparison",
      subTitle:
        "Compare between two or more universities so you know which one is the best fit for you!",
    },
    {
      title: "Unique Data Points",
      subTitle:
        "Get information about housing costs, visa time-lines and nearby things to do over and beyond basic information!",
    },
    {
      title: "Personal Recommender",
      subTitle: "Find universities suited to your profile and interests",
    },
  ];
  const mobileWebList = [
    {
      title: "Watchlist of Liked Universities",
      subTitle:
        "Star universities you’re interested in so you can come back to them later",
    },
    {
      title: "Essay Grader",
      subTitle:
        "Elevate your writing with our AI-powered essay grader — your personal writing coach!",
    },
    {
      title: "Chatbot",
      subTitle:
        "Chat with your counselor anytime! Our friendly AI chatbot is here to guide and support you.",
    },

    {
      title: "Comprehensive Student Profile",
      subTitle:
        "An overview of your skills and interests so you and your counsellor know what you’re looking for!",
    },
  ];

  return (
    <div className="flex flex-col relative px-[3.125rem] md:px-[7.5rem] text-black overflow-hidden fade-in-left">
      {screenSize?.width > 1024 && (
        <div className="absolute h-[100%] w-[1.4375rem] flex items-start justify-center left-[50%]">
          <Image
            src={"/images/vertical-line.svg"}
            alt=""
            height={80}
            width={6}
          />
        </div>
      )}

      <div className="flex justify-center items-center flex-col lg:flex-row relative  gap-20">
        {screenSize?.width > 1024 && (
          <div className="absolute h-max left-[50%] top-0">
            <Image
              src={"/images/green-dot.svg"}
              alt=""
              height={23}
              width={23}
            />
          </div>
        )}
        {screenSize?.width > 1024 && (
          <div className="absolute h-[43.75rem] w-[43.75rem] left-[-10%]">
            <Image
              src={"/images/ellipse.svg"}
              alt=""
              height={700}
              width={700}
            />
          </div>
        )}
        <div className="w-full h-full flex justify-center items-center z-10">
          <div className="h-[51.4375rem] w-[24.0625rem] flex justify-center items-center">
            <Image
              src={"/images/student-video-replacement.png"}
              alt=""
              height={823}
              width={385}
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-5 w-full md:p-5 ">
          <div className="points-header">The Student Mobile App</div>
          <div className="points-sub-header leading-[2.0625rem] font-light">
            For the ones who like to have the information in their pockets and
            at their fingertips; say goodbye to endless hours of searching on
            Google
          </div>
          {mobileAppList?.map((item, index) => (
            <div className="flex gap-2" key={index}>
              <div className="flex justify-center pt-2">
                <FaRegCheckCircle color="green" fontSize={"1.375rem"} />
              </div>
              <div className="flex flex-col">
                <div className="text-[1.25rem] md:text-[1.375rem] font-semibold">
                  {item?.title}
                </div>
                <div className="text-[1.125rem] md:text-[1.25rem] font-light">
                  {item?.subTitle}
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.univision.student&hl=en"
              }
              target="_blank"
              className="w-[11.25rem] h-[2.5rem]"
            >
              <Image
                src={"/images/google-play.png"}
                alt=""
                height={40}
                width={180}
              />
            </Link>
            <Link
              href={"https://apps.apple.com/my/app/univision/id6475560656"}
              target="_blank"
              className="w-[11.25rem] h-[2.5rem]"
            >
              <Image
                src={"/images/app-store.png"}
                alt=""
                height={40}
                width={180}
              />
            </Link>
          </div>
        </div>
      </div>
      <Spacer height="1.25rem" />
      <div className="flex justify-center items-center flex-col-reverse lg:flex-row relative  gap-20">
        {screenSize?.width > 1024 && (
          <div className="absolute h-max left-[50%] top-0">
            <Image
              src={"/images/green-dot.svg"}
              alt=""
              height={23}
              width={23}
            />
          </div>
        )}
        {screenSize?.width > 1024 && (
          <div className="absolute right-[-10%]">
            <Image
              src={"/images/ellipse.svg"}
              alt=""
              height={700}
              width={700}
            />
          </div>
        )}
        <div className="flex flex-col items-start gap-5 w-full md:p-5">
          <div className="points-header">The Student Web App</div>
          <div className="points-sub-header leading-[33px] font-light">
            For the ones that burn the midnight oil when it comes to applying to
            universities; a convenient solution on the go for high-school and
            sixth-form students
          </div>
          {mobileWebList?.map((item, index) => (
            <div className="flex gap-2" key={index}>
              <div className="flex justify-center pt-2">
                <FaRegCheckCircle color="green" fontSize={"1.375em"} />
              </div>
              <div className="flex flex-col">
                <div className="text-[1.25rem] md:text-[1.375rem] font-semibold">
                  {item?.title}
                </div>
                <div className="text-[1.125rem] md:text-[1.25rem] font-light">
                  {item?.subTitle}
                </div>
              </div>
            </div>
          ))}
          <div className="w-full text-center md:text-left">
            <a
              href="https://student.univision.hk/signup/general-info"
              target="_blank"
            >
              <PrimaryButton text="Sign Up" width="18.75em" />
            </a>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center z-10">
          <div className="h-[52.0625rem] w-[37.5rem] flex justify-center items-center">
            <Image
              src={"/images/student-web-app.png"}
              alt=""
              height={833}
              width={600}
            />
          </div>
        </div>
      </div>
      <Spacer height="1.25rem" />
    </div>
  );
};

export default ForStudents;

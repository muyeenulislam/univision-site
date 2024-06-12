import React from "react";

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
      title: "Featured Universities",
      subTitle:
        "See the newest up and coming universities and what they have to offer!",
    },
    {
      title: "Meeting and Application Calendar",
      subTitle:
        "Calendar Keep track of upcoming applications and meetings in one place",
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
      title: "Comprehensive Student Profile",
      subTitle:
        "An overview of your skills and interests so you and your counsellor know what you’re looking for!",
    },
  ];

  return (
    <div className="flex flex-col relative px-[50px] md:px-[120px] text-black overflow-hidden">
      {screenSize?.width > 1024 && (
        <div className="absolute h-[100%] right-[50%]">
          <Image
            src={"/images/vertical-line.svg"}
            alt=""
            height={80}
            width={6}
          />
        </div>
      )}

      <div className="flex justify-center items-center flex-col lg:flex-row relative">
        {screenSize?.width > 1024 && (
          <div className="absolute h-[100%] right-[49.5%]">
            <Image
              src={"/images/green-dot.svg"}
              alt=""
              height={23}
              width={23}
            />
          </div>
        )}
        {screenSize?.width > 1024 && (
          <div className="absolute left-[-10%]">
            <Image
              src={"/images/ellipse.svg"}
              alt=""
              height={700}
              width={700}
            />
          </div>
        )}
        <div className="w-full flex justify-center items-center z-10">
          <Image
            src={"/images/student-video.gif"}
            alt=""
            height={833}
            width={385}
          />
        </div>

        <div className="flex flex-col items-start gap-5 w-full md:p-5 md:pl-8">
          <div className="section-header" style={{ textAlign: "left" }}>
            The Student Mobile App
          </div>
          <div className="text-[27px] leading-[33px] font-light">
            For the ones who like to have the information in their pockets and
            at their fingertips; say goodbye to endless hours of searching on
            Google
          </div>
          {mobileAppList?.map((item, index) => (
            <div className="flex gap-2" key={index}>
              <div className="flex justify-center pt-2">
                <FaRegCheckCircle color="green" fontSize={27} />
              </div>
              <div className="flex flex-col">
                <div className="text-[24px] font-semibold">{item?.title}</div>
                <div className="text-[22px] font-light">{item?.subTitle}</div>
              </div>
            </div>
          ))}
          <div className="w-full text-center md:text-left">
            <PrimaryButton text="Download" />
          </div>
        </div>
      </div>
      <Spacer height="20px" />
      <div className="flex justify-center items-center flex-col-reverse lg:flex-row relative">
        {screenSize?.width > 1024 && (
          <div className="absolute h-[100%] right-[49.5%] top-[45px]">
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
        <div className="flex flex-col items-start gap-5 w-full md:p-5 md:pr-8">
          <div className="section-header" style={{ textAlign: "left" }}>
            The Student Web App
          </div>
          <div className="text-[27px] leading-[33px] font-light">
            For the ones that burn the midnight oil when it comes to applying to
            universities; a convenient solution on the go for high-school and
            sixth-form students
          </div>
          {mobileWebList?.map((item, index) => (
            <div className="flex gap-2" key={index}>
              <div className="flex justify-center pt-2">
                <FaRegCheckCircle color="green" fontSize={27} />
              </div>
              <div className="flex flex-col">
                <div className="text-[24px] font-semibold">{item?.title}</div>
                <div className="text-[22px] font-light">{item?.subTitle}</div>
              </div>
            </div>
          ))}
          <div className="w-full text-center md:text-left">
            <PrimaryButton text="Sign up" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center z-10">
          <Image
            src={"/images/student-web-app.png"}
            alt=""
            height={833}
            width={600}
          />
        </div>
      </div>
      <Spacer height="20px" />
    </div>
  );
};

export default ForStudents;

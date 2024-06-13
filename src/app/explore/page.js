import React from "react";
import Image from "next/image";

import Spacer from "@/utils/spacer";

import PrimaryButton from "@/components/buttons/primarybutton";

const ExploreNow = () => {
  return (
    <div>
      <div className="bg-[url('/images/career-bg.svg')] w-full bg-no-repeat bg-cover">
        <div className="flex flex-col-reverse lg:flex-row gap-5 px-[30px] lg:px-[120px] pt-[120px] pb-[20px] lg:pb-[120px]">
          <div className="flex items-center justify-center flex-col w-full">
            <div className="text-primary text-[32px] md:text-[61px] text-center font-bold">
              Your UniVision experience awaits!
            </div>
            <Spacer height="42px" />
            <Image src={"/images/qr.png"} height={278} width={294} alt="" />
            <Spacer height="32px" />
            <div className="text-[37px] font-normal">Or</div>
            <Spacer height="32px" />
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <Image
                src={"/images/google-play.png"}
                height={60}
                width={220}
                alt=""
              />
              <Image
                src={"/images/app-store.png"}
                height={60}
                width={220}
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src={"/images/explore-banner.png"}
              height={278}
              width={640}
              alt=""
            />
          </div>
        </div>
      </div>
      <Spacer height="40px" />
      <div className="flex flex-col lg:flex-row gap-5 px-[30px] lg:px-[120px] ">
        <div className="w-full flex justify-center items-center">
          <Image
            src={"/images/school-web-app-flipped.png"}
            height={60}
            width={600}
            alt=""
          />
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <div className="text-primary text-[32px] md:text-[61px] text-center font-bold">
            Your UniVision experience awaits!
          </div>
          <Spacer height="40px" />
          <div className="flex w-full flex-wrap gap-3 justify-center items-center">
            <a
              href="https://student.univision.hk/signup/personalInfo"
              target="_blank"
            >
              <PrimaryButton text="Create Student Account" />
            </a>
            <a href="https://school.univision.hk/signup/email" target="_blank">
              <PrimaryButton text="Create School Account" />
            </a>
          </div>
        </div>
      </div>
      <Spacer height="40px" />
    </div>
  );
};

export default ExploreNow;

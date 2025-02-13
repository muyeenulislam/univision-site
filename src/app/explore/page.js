import React from "react";
import Image from "next/image";
import Link from "next/link";
import { QRCode } from "antd";

import Spacer from "@/utils/spacer";

import PrimaryButton from "@/components/buttons/primarybutton";

const ExploreNow = () => {
  return (
    <div>
      <div className="bg-[url('/images/career-bg.svg')] w-full bg-no-repeat bg-cover bg-bottom">
        <div className="flex flex-col-reverse lg:flex-row gap-5 px-[30px] lg:px-[120px] pt-[120px] pb-[20px] lg:pb-[60px] fade-in-right">
          <div className="flex items-center justify-center flex-col w-full">
            <div className="text-primary text-header text-center">
              Your UniVision experience awaits!
            </div>
            <Spacer height="42px" />
            <Image
              src={"/images/explore-qr.png"}
              height={280}
              width={280}
              alt="qr"
            />
          </div>
          <div className="w-full flex justify-center items-center lg:pt-10">
            <Image
              src={"/images/explore-banner.png"}
              height={290}
              width={340}
              alt=""
            />
          </div>
        </div>
      </div>
      <Spacer height="20px" />
      <div className="flex flex-col lg:flex-row gap-5 px-[30px] lg:px-[120px]  fade-in-right">
        <div className="w-full flex justify-center items-center">
          <Image
            src={"/images/school-web-app-flipped.png"}
            height={60}
            width={550}
            alt=""
          />
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <div className="text-primary text-header text-center">
            Your UniVision experience awaits!
          </div>
          <Spacer height="40px" />
          <div className="flex w-full flex-wrap gap-3 justify-center items-center">
            <Link
              href="https://student.univision.hk/signup/general-info"
              target="_blank"
            >
              <PrimaryButton text="Create Student Account" />
            </Link>
            <Link
              href="https://school.univision.hk/signup/form"
              target="_blank"
            >
              <PrimaryButton text="Create School Account" />
            </Link>
          </div>
        </div>
      </div>
      <Spacer height="40px" />
    </div>
  );
};

export default ExploreNow;

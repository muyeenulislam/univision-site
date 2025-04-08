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
        <div className="flex flex-col-reverse lg:flex-row gap-5 px-[1.875em] lg:px-[7.5em] pt-[7.5em] pb-[1.25em] lg:pb-[3.75em] fade-in-right">
          <div className="flex items-center justify-center flex-col w-full">
            <div className="text-primary text-header text-center">
              Your UniVision experience awaits!
            </div>
            <Spacer height="2.625em" />
            <div className="h-[17.5em] w-[17.5em]">
              <Image
                src={"/images/explore-qr.png"}
                height={280}
                width={280}
                alt="qr"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center lg:pt-10">
            <div className="w-[22.5em]">
              <Image
                src={"/images/explore-banner.png"}
                height={290}
                width={360}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Spacer height="1.25em" />
      <div className="flex flex-col lg:flex-row gap-5 px-[1.875em] lg:px-[7.5em]  fade-in-right">
        <div className="w-full flex justify-center items-center">
          <div className="w-[34.375em]">
            <Image
              src={"/images/school-web-app-flipped.png"}
              height={60}
              width={550}
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col">
          <div className="text-primary text-header text-center">
            Your UniVision experience awaits!
          </div>
          <Spacer height="2.5em" />
          <div className="flex w-full flex-wrap gap-3 justify-center items-center">
            <Link
              href="https://student.univision.hk/signup/general-info"
              target="_blank"
              className="w-[17.5em]"
            >
              <PrimaryButton text="Create Student Account" />
            </Link>
            <Link
              href="https://school.univision.hk/signup/form"
              target="_blank"
              className="w-[17.5em]"
            >
              <PrimaryButton text="Create School Account" />
            </Link>
          </div>
        </div>
      </div>
      <Spacer height="2.5em" />
    </div>
  );
};

export default ExploreNow;

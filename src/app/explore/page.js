import React from "react";
import Image from "next/image";
import Link from "next/link";
import { QRCode } from "antd";

import Spacer from "@/utils/spacer";

import PrimaryButton from "@/components/buttons/primarybutton";

const ExploreNow = () => {
  return (
    <div>
      <div className="bg-[url('/images/career-bg.svg')] w-full bg-no-repeat bg-cover">
        <div className="flex flex-col-reverse lg:flex-row gap-5 px-[30px] lg:px-[120px] pt-[120px] pb-[20px] lg:pb-[120px] fade-in-right">
          <div className="flex items-center justify-center flex-col w-full">
            <div className="text-primary text-header text-center">
              Your UniVision experience awaits!
            </div>
            <Spacer height="42px" />
            <QRCode
              errorLevel="H"
              value="https://student.univision.hk/"
              icon="/images/favicon.svg"
              color={"black"}
              size={295}
              iconSize={50}
              bgColor="white"
            />
            <Spacer height="32px" />
            <div className="text-[37px] font-normal">OR</div>
            <Spacer height="32px" />
            <div className="flex flex-wrap gap-3 justify-center items-center">
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=com.univision.student&hl=en"
                }
                target="_blank"
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
      <div className="flex flex-col lg:flex-row gap-5 px-[30px] lg:px-[120px]  fade-in-right">
        <div className="w-full flex justify-center items-center">
          <Image
            src={"/images/school-web-app-flipped.png"}
            height={60}
            width={600}
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

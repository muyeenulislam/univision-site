import React from "react";
import Image from "next/image";
import { Popover } from "antd";

import Spacer from "./spacer";

const Footer = () => {
  const socialItems = [
    {
      title: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61558909776746",
      icon: "/images/facebook.svg",
    },
    { title: "Instagram", link: "#", icon: "/images/instagram.svg" },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/company/visionedtechsolutions/",
      icon: "/images/linkedin.svg",
    },
    {
      title: "Youtube",
      link: "https://www.youtube.com/@VisionEdTechSolutions",
      icon: "/images/youtube.svg",
    },
  ];
  return (
    <div className="w-full flex flex-col bg-gradient-to-r from-[#03544C] to-[#02312C] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5">
        <div className="flex flex-col p-5">
          <Image src={"/images/logo.png"} alt="" height={66} width={320} />
          <Spacer height="8px" />
          <div className="text-white text-[22px]">
            Your Dream, Our Responsibility
          </div>
          <Spacer height="20px" />
          <div className="flex gap-1 flex-wrap">
            <Image
              src={"/images/google-play.png"}
              alt=""
              height={60}
              width={160}
            />
            <Image
              src={"/images/app-store.png"}
              alt=""
              height={60}
              width={160}
            />
          </div>
        </div>
        <div className="flex flex-col p-5">
          <div className=" text-[28px] font-semibold">Our Offices</div>
          <Spacer height="20px" />
          <div className="text-[22px] font-light">
            <span className="font-thin">36-21, Central Park Towers - DIFC</span>
            <br></br>
            <b>Dubai, UAE</b>
          </div>
          <Spacer height="20px" />
          <div className="text-[22px] font-light">
            <span className="font-thin">
              CraftLab Asia, Plaza Hamodal, Ground Floor, Petaling Jaya,
            </span>
            <br></br>
            <b>Selangor, Malaysia</b>
          </div>
          <Spacer height="20px" />
          <div className="text-[22px] font-light">
            <span className="font-thin"> 199 E, Block 2 P.E.C.H.S.,</span>
            <br></br>
            <b>Karachi, Pakistan</b>
          </div>
        </div>
        <div className="w-max lg:mx-auto p-5 flex flex-col">
          <div className=" text-[28px] font-semibold">Legal</div>
          <Spacer height="20px" />
          <a href="/privacy-policy" className="underline">
            Privacy Policy
          </a>
          <Spacer height="15px" />
          <a href="/terms-n-conditions" className="underline">
            Terms and Conditions
          </a>
        </div>
        <div className="w-max lg:mx-auto p-5 flex flex-col">
          <div className=" text-[28px] font-semibold">Follow Us</div>
          <Spacer height="20px" />
          <div className="flex gap-1">
            {socialItems?.map((item, index) => (
              <Popover content={<>UniVision</>} key={index}>
                <a href={item?.link} target="_blank">
                  <Image src={item?.icon} height={34} width={34} alt="fb" />
                </a>
              </Popover>
            ))}
          </div>
          <Spacer height="60px" />
          <div className=" text-[28px] font-semibold">Contact Us</div>
          <Spacer height="20px" />
          <div className="flex gap-1">
            <Image src={"/images/phone.svg"} height={18} width={18} alt="fb" />
            <div>+971 58 539 9043</div>
          </div>
          <Spacer height="10px" />
          <div className="flex gap-1">
            <Image src={"/images/email.svg"} height={18} width={18} alt="fb" />
            <a href="mailto:admin@univision.hk">admin@univision.hk</a>
          </div>
        </div>
      </div>
      <div className=" text-[20px] text-center p-5 border-t border-white">
        Copyright ©️ UniVision {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

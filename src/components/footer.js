import React from "react";
import Image from "next/image";

import Spacer from "./spacer";

const Footer = () => {
  return (
    <div className="w-full flex flex-col bg-gradient-to-r from-[#03544C] to-[#02312C] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
        <div className="w-max mx-auto p-5 flex flex-col">
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
        <div className="w-max mx-auto p-5 flex flex-col">
          <div className=" text-[28px] font-semibold">Follow Us</div>
          <Spacer height="20px" />
        </div>
      </div>
      <div className=" text-[20px] text-center p-5 border-t border-white">
        Copyright ©️ UniVision {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;

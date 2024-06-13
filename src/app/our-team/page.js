import React from "react";
import Image from "next/image";
import Spacer from "@/utils/spacer";

import PrimaryButton from "@/components/buttons/primarybutton";

const OurTeam = () => {
  const teamInfo = [
    {
      name: "Jahangir Ateeq",
      role: "Co-founder & CEO",
      image: "/images/jahangir.png",
    },
    // {
    //   name: "Faraz Amin",
    //   role: "Co-founder & CTO",
    //   image: "/images/faraz.png",
    // },
    {
      name: "Murtaza Abedin",
      role: "Strategic Advisor",
      image: "/images/murtaza.png",
    },
  ];
  return (
    <div>
      <div className="bg-[url('/images/our-team-bg.png')] w-full bg-no-repeat bg-cover h-max lg:h-[1080px] flex flex-col justify-center px-[20px] lg:px-[120px] py-[200px] text-white">
        <div className="text-[36px] md:text-[47px] lg:text-[68px] text-center font-bold">
          Our Leadership Team
        </div>
        <Spacer height="35px" />
        <div className="text-[18px] md:text-[24px] lg:text-[30px] text-center font-light">
          Young and dynamic, UniVision’s core founders team consists of
          individuals from a wide variety of backgrounds, nationalities and
          majors who all had one thing in common: they muddled their way through
          the college selection process and wanted to make sure that no one else
          had to experience the stress and irritation they went through. Our
          goal is to make the search and selection process more intuitive and
          accessible for students regardless of whether they have access to
          guidance counselors or not, so that students are able to realize their
          dreams of pursuing higher education in places that support their
          growth and provide them with opportunities that are best suited for
          their goals.
        </div>
      </div>
      <Spacer height="40px" />
      <div className="flex justify-center items-center gap-3 flex-wrap">
        {teamInfo?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-1"
          >
            <Image src={item?.image} height={340} width={340} alt="" />
            <div className="text-[21px] font-semibold uppercase">
              {item?.name}
            </div>
            <div className="text-primary text-[18px]">{item?.role}</div>
          </div>
        ))}
      </div>
      <Spacer height="40px" />
      <div className="flex items-center justify-center px-2">
        <PrimaryButton
          text="Meet the rest of our team on LinkedIn"
          width="400px"
        />
      </div>
      <Spacer height="140px" />
    </div>
  );
};

export default OurTeam;

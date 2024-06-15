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
    {
      name: "Murtaza Abedin",
      role: "Strategic Advisor",
      image: "/images/murtaza.png",
    },
    {
      name: "Md. Muyeen - Ul - Islam",
      role: "Head of Technology",
      image: "/images/muyeen.jpg",
    },
    {
      name: "Sameer Asad",
      role: "Chief Information Officer (CIO)",
      image: "/images/sameer.jpg",
    },
  ];
  return (
    <div>
      <div className="bg-[url('/images/our-team-bg.png')] h-[110vh] w-full bg-no-repeat bg-cover lg:h-[110vh]  flex flex-col justify-center px-[20px] lg:px-[120px] py-[200px] text-white">
        <div className="fade-in-right">
          <div className="text-[30px] md:text-[36px] lg:text-[48px] text-center font-bold">
            Our Leadership Team
          </div>
          <Spacer height="20px" />
          <div className="text-[16px] md:text-[20px] lg:text-[24px] text-center font-light">
            Young and dynamic, UniVision’s core founders team consists of
            individuals from a wide variety of backgrounds, nationalities and
            majors who all had one thing in common: they muddled their way
            through the college selection process and wanted to make sure that
            no one else had to experience the stress and irritation they went
            through. Our goal is to make the search and selection process more
            intuitive and accessible for students regardless of whether they
            have access to guidance counselors or not, so that students are able
            to realize their dreams of pursuing higher education in places that
            support their growth and provide them with opportunities that are
            best suited for their goals.
          </div>
        </div>
      </div>
      <Spacer height="40px" />
      <div className="flex justify-center items-center gap-4 p-2 flex-wrap fade-in-right">
        {teamInfo?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-1"
          >
            <Image
              src={item?.image}
              height={340}
              width={340}
              alt=""
              className="rounded-[36px] border border-primary"
            />
            <div className="text-[21px] font-semibold uppercase">
              {item?.name}
            </div>
            <div className="text-primary text-[18px]">{item?.role}</div>
          </div>
        ))}
      </div>
      <Spacer height="40px" />
      <div className="flex items-center justify-center px-2 fade-in-right">
        <a
          href="https://www.linkedin.com/company/visionedtechsolutions/"
          target="_blank"
        >
          <PrimaryButton
            text="Meet the rest of our team on LinkedIn"
            maxwidth="400px"
          />
        </a>
      </div>
      <Spacer height="140px" />
    </div>
  );
};

export default OurTeam;

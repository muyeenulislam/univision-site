import React from "react";
import Image from "next/image";
import Spacer from "@/utils/spacer";

import PrimaryButton from "@/components/buttons/primarybutton";

const OurTeam = () => {
  const teamInfo = [
    {
      name: "Jahangir Ateeq",
      role: "Chief Executive Officer",
      image: "/images/jahangir.png",
      linkedin: "https://www.linkedin.com/in/jahangirateeq/",
    },
    {
      name: "Sameer Asad",
      role: "Chief Information Officer",
      image: "/images/sameer.jpg",
      linkedin: "https://www.linkedin.com/in/sameer-asad-268694269",
    },
    {
      name: "Md. Muyeen - Ul - Islam",
      role: "Head of Technology",
      image: "/images/muyeen.jpg",
      linkedin: "https://www.linkedin.com/in/md-muyeen-ul-islam/",
    },
    {
      name: "Murtaza Abedin",
      role: "Strategic Advisor",
      image: "/images/murtaza.png",
      linkedin: "https://www.linkedin.com/in/murtaza-abedin-b40181152/",
    },
  ];
  return (
    <div>
      <div className="bg-[url('/images/our-team-bg.png')] h-[96vh] w-full bg-no-repeat bg-cover lg:h-[85vh]  flex flex-col justify-center px-[20px] lg:px-[120px] py-[160px] text-white">
        <div className="fade-in-right">
          <div className="text-[28px] lg:text-[42px] font-bold text-center">
            Our Leadership Team
          </div>
          <Spacer height="20px" />
          <div className="text-[14px] sm:text-[16px] lg:text-[22px] font-light text-justify">
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
          <a
            key={index}
            className="flex flex-col justify-center items-center gap-1"
            href={item?.linkedin}
            target="_blank"
          >
            <Image
              src={item?.image}
              height={300}
              width={300}
              alt=""
              className="rounded-[36px] border border-primary"
            />
            <div className="text-[21px] font-semibold uppercase">
              {item?.name}
            </div>
            <div className="text-primary text-[18px]">{item?.role}</div>
          </a>
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

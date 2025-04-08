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
      <div className="bg-[url('/images/our-team-bg.png')] h-[70vh] w-full bg-no-repeat bg-cover lg:h-[80vh]  flex flex-col justify-center px-[1.25rem] lg:px-[7.5rem] pt-[6.25rem] pb-[3.125rem] text-white">
        <div className="fade-in-right">
          <div className="text-[1.75rem] md:text-[2.625rem] xl:text-[3rem] text-center font-bold">
            Our Leadership Team
          </div>
          <Spacer height="2.5em" />
          <div className="text-[0.875rem] md:text-[1.125rem] 2xl:text-[1.5rem] font-light text-justify md:px-[8%] 2xl:px-[15%]">
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
      <Spacer height="2.5em" />
      <div className="flex justify-center items-center gap-5 p-2 flex-wrap fade-in-right">
        {teamInfo?.map((item, index) => (
          <a
            key={index}
            className="flex flex-col justify-center items-center gap-1 h-[18.25rem] w-[18.25rem]"
            href={item?.linkedin}
            target="_blank"
          >
            <Image
              src={item?.image}
              height={260}
              width={260}
              alt=""
              className="rounded-[2.25rem] border border-primary"
            />
            <div className="text-[1.3125rem] font-semibold uppercase">
              {item?.name}
            </div>
            <div className="text-primary text-[1.125rem]">{item?.role}</div>
          </a>
        ))}
      </div>
      <Spacer height="2.5em" />
      <div className="flex items-center justify-center px-2 fade-in-right">
        <a
          href="https://www.linkedin.com/company/visionedtechsolutions/"
          target="_blank"
        >
          <PrimaryButton
            text="Meet the Rest of Our Team on LinkedIn"
            maxwidth="100vw"
          />
        </a>
      </div>
      <Spacer height="12.5em" />
    </div>
  );
};

export default OurTeam;

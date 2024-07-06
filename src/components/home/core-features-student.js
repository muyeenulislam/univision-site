import React from "react";
import Image from "next/image";

const CoreFeaturesStudent = () => {
  const coreFeaturesList = [
    {
      title: "Faster\n Process",
      desc: "With our comprehensive data- driven college profiles, students save countless hours of work researching each individual university",
      icon: "/images/faster-process.svg",
    },
    {
      title: "Ease of\n Access",
      desc: "Students can easily access the complete information regarding admissions for any university on our portal",
      icon: "/images/ease-of-access.svg",
    },
    {
      title: "Centralized In\n One Platform",
      desc: "With only just a few clicks, students can find carefully curated profiles for 2400+ universities under a single centralized platform",
      icon: "/images/centralized.svg",
    },
    {
      title: "Proprietary AI\n Solutions",
      desc: "Our AI recommendations help students discover universities that align with their academic and career goals, ensuring a targeted approach in university selection.",
      icon: "/images/ai.svg",
    },
    {
      title: "Interactive\n Learning",
      desc: "Our platform hosts a variety of Udemy paid and free courses, catering to diverse interests and educational needs, enhancing learning effectiveness and enjoyment.",
      icon: "/images/interactive-learning.svg",
    },
  ];
  return (
    <div className="flex justify-center gap-5 flex-wrap xl:flex-nowrap px-[50px] md:px-[100px] xl:px-[120px]">
      {coreFeaturesList?.map((item, index) => (
        <div
          className={`p-[20px] w-[240px] ${
            index % 2 === 0 ? "border-primary" : "border-[#C0D06B]"
          } border-2 flex flex-col gap-6 items-center rounded-[60px]`}
          key={index}
        >
          <div className="h-[60px] overflow-hidden">
            <Image src={item?.icon} height={30} width={60} alt="" />
          </div>
          <div className="text-center flex flex-col h-[60px] text-[22px] font-semibold">
            {item?.title?.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
          <div className="text-center text-[12px] md:text-[14px] font-semibold">
            {item?.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoreFeaturesStudent;

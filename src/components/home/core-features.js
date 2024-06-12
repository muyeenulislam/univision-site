import React from "react";
import Image from "next/image";

const CoreFeatures = () => {
  const coreFeaturesList = [
    {
      title: "Data Insights",
      desc: "Now you can view statistics like the most popular universities among your students, most sought-after study abroad destinations, etc.",
      icon: "/images/data-insight.svg",
    },
    {
      title: "Engage Students",
      desc: "Our platform enhances student advising by allowing counsellors to monitor academic progress and course preferences, providing personalized and effective guidance.",
      icon: "/images/engage-student.svg",
    },
    {
      title: "Remote Advising",
      desc: "Our platform allows the school to monitor students and give carefully curated advice remotely",
      icon: "/images/remote-advising.svg",
    },
    {
      title: "Advanced Communication",
      desc: "Our robust communication system enables schools to make announcements, schedule meetings, and contact students directly through an integrated chatbot, ensuring seamless communication.",
      icon: "/images/advanced-communication.svg",
    },
    {
      title: "Activity Planning",
      desc: "Our platform aids schools in understanding student preferences in study fields, enabling curriculum modification and introduction of new programs that align with student interests.",
      icon: "/images/activity-planning.svg",
    },
  ];
  return (
    <div className="flex justify-center gap-5 flex-wrap px-[50px] md:px-[120px] ">
      {coreFeaturesList?.map((item, index) => (
        <div
          className={`p-[30px] max-w-[280px] ${
            index % 2 === 0 ? "border-primary" : "border-[#C0D06B]"
          } border-2 flex flex-col gap-6 items-center rounded-[60px]`}
          key={index}
        >
          <Image src={item?.icon} height={80} width={80} alt="" />
          <div className="text-center text-[22px] font-semibold">
            {item?.title}
          </div>
          <div className="text-center text-[16px] font-semibold">
            {item?.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoreFeatures;

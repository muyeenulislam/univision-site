import React from "react";
import Image from "next/image";

const CoreFeaturesSchool = () => {
  const coreFeaturesList = [
    {
      title: "Data\n Insights",
      desc: "Now you can view statistics like the most popular universities among your students, most sought-after study abroad destinations, etc.",
      icon: "/images/data-insight.svg",
    },
    {
      title: "Engage\n Students",
      desc: "Our platform enhances student advising by allowing counsellors to monitor academic progress and course preferences, providing personalized and effective guidance.",
      icon: "/images/engage-student.svg",
    },
    {
      title: "Remote\n Advising",
      desc: "Our platform facilitates remote communication between schools and students. Educators can offer personalized advice and guidance, even when physical presence isn’t possible.",
      icon: "/images/remote-advising.svg",
    },
    {
      title: "Advanced\n Communication",
      desc: "Our robust communication system enables schools to make announcements, schedule meetings, and contact students directly through an integrated chatbot, ensuring seamless communication.",
      icon: "/images/advanced-communication.svg",
    },
    {
      title: "Activity\n Planning",
      desc: "Our platform aids schools in understanding student preferences in study fields, enabling curriculum modification and introduction of new programs that align with student interests.",
      icon: "/images/activity-planning.svg",
    },
  ];
  return (
    <div className="flex justify-center gap-5 flex-wrap xl:flex-nowrap px-[3.125em] md:px-[6.25em] xl:px-[8.75em] transition-all">
      {coreFeaturesList?.map((item, index) => (
        <div
          className={`p-[1.25em] w-[15em] ${
            index % 2 === 0 ? "border-primary" : "border-[#C0D06B]"
          } border-2 flex flex-col gap-6 items-center rounded-[3.75em]`}
          key={index}
        >
          <div className="h-[3.75em] overflow-hidden">
            <Image src={item?.icon} height={30} width={60} alt="" />
          </div>
          <div className="text-center flex flex-col h-[3.125em] text-[1.25em] font-semibold">
            {item?.title?.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
          <div className="text-center text-[0.875em] font-semibold">
            {item?.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoreFeaturesSchool;

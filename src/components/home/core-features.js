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
      title:
        "Our platform allows the school to monitor students and give carefully curated advice remotely",
      desc: "Our robust communication system enables schools to make announcements, schedule meetings, and contact students directly through an integrated chatbot, ensuring seamless communication.",
      icon: "/images/advanced-communication.svg",
    },
    {
      title: "Activity Planning",
      desc: "Our platform aids schools in understanding student preferences in study fields, enabling curriculum modification and introduction of new programs that align with student interests.",
      icon: "/images/activity-planning.svg",
    },
  ];
  return <div className="flex gap-5"></div>;
};

export default CoreFeatures;

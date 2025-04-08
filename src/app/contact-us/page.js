"use client";
import React, { useState } from "react";
import { Collapse, ConfigProvider, message } from "antd";
import Image from "next/image";
import axios from "axios";

import isValidEmail from "@/utils/isvalidemail";
import Spacer from "@/utils/spacer";
import useScreenSize from "@/utils/usescreensize";

import InputGroupText from "@/components/input/input-group-text";
import InputGroupPhone from "@/components/input/input-group-phone";
import InputGroupTextbox from "@/components/input/input-group-textbox";

import PrimaryButton from "@/components/buttons/primarybutton";

const ContactUs = () => {
  const screenSize = useScreenSize();
  const [activeKey, setActiveKey] = useState(null);
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const defaultState = () => {
    setState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleActiveKey = (key) => {
    if (activeKey === key) {
      setActiveKey(null);
    } else {
      setActiveKey(key);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!state?.name) {
        message.error("Name is required");
      } else if (!state?.email) {
        message.error("Email is required");
      } else if (!isValidEmail(state.email)) {
        message.error("Please enter a valid email address");
      } else if (!state?.phone) {
        message.error("Phone is required");
      } else if (!state?.message) {
        message.error("Message is required");
      } else {
        const body = {
          name: state.name,
          email: state.email,
          phone: state.phone,
          message: state.message,
        };

        const sendEmail = await axios.post(
          "https://api-prod-univision.azurewebsites.net/website-email/send-email-contact",
          body
        );

        if (sendEmail?.status === 200) {
          message.success("Message submitted successfully");
          defaultState();
        } else {
          message.error("Something went wrong");
          defaultState();
        }
      }
    } catch (e) {
      console.log(e);
      message.error("Something went wrong");
    }
  };

  const collapseItemsLeft = [
    {
      title: "What is the purpose of this product?",
      desc: "A 2019 frequency analysis of the most common words in use on social media by Streem sawthe use of ‘uncertain times’ increase by 3155% and ‘unprecedented’ by 210%, especially as a pseudo one-size-fits-all reason to justify policies and mandates related to universities and higher education (Pash, 2020; Thomson, 2021). One of the groups hit hardest by the events of the last four years have been prospective applicants for higher education, as backlogged applications,border policies, tougher stances on international movements and missed opportunities with regards to extracurriculars and other activities have made searching for and selecting best-fit colleges tougher than ever, especially for Asian students. UniVision is focused on rectifying this issue and supporting students in pursuing their dreams of higher education by providing information and access to services that facilitate the university shortlisting process through an integrated system that allows students to access information from universities around the worldand communicate with their guidance counselors with ease.",
      key: "1",
    },
    {
      title:
        " What is the purpose of having UniVision providing this information when everything is already available online?",
      desc: "Recent estimates from Common App, the main portal for undergraduate admissions in the United States suggest that 2021 saw the number of college applicants rise by 13% and the total applications submitted increase by 22%. This trend of increased interest in tertiary education has been prevalent all throughout the twenty-first century and most speculate that it will only continue to rise as an undergraduate degree starts becoming the minimum requirement for careers.\nHowever, the application process for undergraduate studies is perhaps one of the most challenging decisions faced by high school students, especially as they try to narrow down the best choices for them to apply to. Not every student is lucky enough to have access to in-house college counselors and more often than not, students end up paying out of pocket to recruit the services of extremely expensive college counselors with no guarantee of finding the best fit college for them.\nThe gap between the increased interest in tertiary education and the lack of personalized guidance opportunities for students is the main impetus behind UniVision – a guidance platform for college search and selection aimed at supporting students who are determined to go to university but don’t know where to begin. The goal of UniVision is to provide opportunities for students to discover and explore universities from around the world as they decide where they want to apply, with a focus on serving communities that don’t typically have access to such platforms or facilities.",
      key: "2",
    },
    {
      title:
        "How does the School Web Portal help the schools during the college application season?",
      desc: "Apart from assisting students in searching for and selecting universities, UniVision also provides an admin portal that allows counselors and other school administrators to organize and store information about a student's application in one place to help them help their students.\nSome of the features offered by the UniVision Admin beta are\n● Organized sections of information on colleges from around the world for easy access\n● A list of all the students and their shortlist universities\n● In-app options to set meetings and discuss applications",
      key: "3",
    },
  ];

  const collapseItemsRight = [
    {
      title: "How did you come up with the idea of UniVision?",
      desc: "The initial idea for UniVision stemmed from discussions between the co-founders about their respective experiences with the university search and selection process. Upon realizing how much of our experiences mirrored each other, we collectively realized that there was a clear gap in the market for products that would help high school students search more efficiently and accurately for their universities, without schools or students needing to pay obscene prices out of pocket. That eventually led to the birth of UniVision as a solution for students by students, with a young team consisting of university students and recent graduates across a wide variety of disciplines.",
      key: "4",
    },
    {
      title: "What does the Student Web/Mobile App help with?",
      desc: " UniVision is a platform aimed at reducing the choice paralysis that often marks the beginning stages of any student’s college search and selection process, especially for those students who lack in-house guidance opportunities or have a skewed counselor to student ratio. UniVision provides students with access to information about universities from around the world in a streamlined and organized manner, with both a portable mobile app and a desktop version to ensure that students can work on their search and selection process anywhere and anytime.\nSome of the features offered by the UniVision beta are\n● Organized sections of information on colleges from around the world for easy access\n● A watchlist option to select and save universities you’re interested in\n● The ability to compare universities across multiple data points to find your best fit",
      key: "5",
    },
  ];

  return (
    <div>
      <div className="bg-[url('/images/career-bg.svg')] w-full bg-no-repeat bg-cover">
        <div className="h-full px-[1.875em] lg:px-[7.5em] py-[7.5em] ">
          <div className="flex rounded-[2em] border border-[#E5E5E5] shadow-md flex-col-reverse md:flex-row fade-in-right">
            <div className="flex flex-col w-full px-[1.25em] md:px-[3.625em] py-[3.125em] md:py-[5.4375em] justify-center bg-white md:rounded-tl-[2em] rounded-bl-[2em] md:rounded-br-0 rounded-br-[2em]">
              <div className="text-primary text-[1.5em]">Contact Us</div>
              <Spacer height="0.625em" />
              <div className="section-header" style={{ textAlign: "left" }}>
                Get in touch
              </div>
              <Spacer height="1.25em" />
              <InputGroupText
                text="Name"
                required
                placeholder="Enter your name"
                handleChange={(e) => setState({ ...state, name: e })}
                value={state?.name}
              />
              <Spacer height="2.1875em" />
              <InputGroupText
                text="Email"
                required
                placeholder="Enter your email address"
                handleChange={(e) => setState({ ...state, email: e })}
                value={state?.email}
              />
              <Spacer height="2.1875em" />
              <InputGroupPhone
                text="Phone Number"
                required
                placeholder="Enter your phone number"
                handleChange={(e) => setState({ ...state, phone: e })}
                value={state?.phone}
              />
              <Spacer height="2.1875em" />
              <InputGroupTextbox
                text="Message"
                required
                placeholder="Enter your message"
                handleChange={(e) => setState({ ...state, message: e })}
                value={state?.message}
              />
              <Spacer height="2.1875em" />

              <PrimaryButton
                text="Submit"
                width="100%"
                onClick={handleSubmit}
              />
            </div>
            <div
              className={`bg-[url('/images/contact-us-banner.jpg')]  w-full bg-no-repeat bg-cover bg-center rounded-tr-[2.25em] rounded-tl-[2.25em] md:rounded-tl-[0px] rounded-br-[0px] md:rounded-br-[2.25em] ${
                screenSize?.width < 768 ? "h-[37.5em]" : ""
              } `}
            ></div>
          </div>

          <Spacer height="6.25em" />
        </div>
      </div>
      <div className="px-[1.875em] lg:px-[11.25em] fade-in-right">
        <div className="section-header">You Ask. We Answer.</div>
        <Spacer height="3.125em" />
        <div className="text-[1.375em] text-[#707070]">
          Frequently asked questions.....
        </div>
        <Spacer height="2.1875em" />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 text-black">
          <ConfigProvider
            theme={{
              token: {
                colorText: "black",
              },
              components: {
                Collapse: {
                  contentBg: "white",
                  headerBg: "white",
                },
              },
            }}
          >
            <div>
              {collapseItemsLeft?.map((item) => (
                <Collapse
                  key={item.key}
                  items={[
                    {
                      key: "1",
                      label: (
                        <p
                          className={`${
                            activeKey === item?.key
                              ? "text-primary"
                              : "text-black"
                          } font-bold text-[1em] transition-all`}
                        >
                          {item?.title}
                        </p>
                      ),
                      children: (
                        <p className="text-[#707070]">
                          {item?.desc?.split("\n").map((line, index) => (
                            <span key={index}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      ),
                    },
                  ]}
                  expandIconPosition={"end"}
                  expandIcon={() => (
                    <Image
                      src="/images/collapse-icon.svg"
                      alt=""
                      height={24}
                      width={24}
                      style={{
                        transform:
                          activeKey !== item?.key
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                        maxWidth: "1.5em",
                      }}
                    />
                  )}
                  className="shadow-md mb-5"
                  onChange={() => handleActiveKey(item?.key)}
                />
              ))}
            </div>
            <div>
              {collapseItemsRight?.map((item) => (
                <Collapse
                  key={item.key}
                  items={[
                    {
                      key: "1",
                      label: (
                        <p
                          className={`${
                            activeKey === item?.key
                              ? "text-primary"
                              : "text-black"
                          } font-bold text-[1em] transition-all`}
                        >
                          {item?.title}
                        </p>
                      ),
                      children: (
                        <p className="text-[#707070]">
                          {item?.desc?.split("\n").map((line, index) => (
                            <span key={index}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </p>
                      ),
                    },
                  ]}
                  expandIconPosition={"end"}
                  expandIcon={() => (
                    <Image
                      src="/images/collapse-icon.svg"
                      alt=""
                      height={24}
                      width={24}
                      style={{
                        transform:
                          activeKey !== item?.key
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  )}
                  className="shadow-md mb-5"
                  onChange={() => handleActiveKey(item?.key)}
                />
              ))}
            </div>
          </ConfigProvider>
        </div>
      </div>
      <Spacer height="5em" />
    </div>
  );
};

export default ContactUs;

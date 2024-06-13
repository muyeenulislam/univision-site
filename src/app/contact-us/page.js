"use client";
import React, { useState } from "react";
import { Collapse, ConfigProvider } from "antd";
import Image from "next/image";
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

  const handleActiveKey = (key) => {
    if (activeKey === key) {
      setActiveKey(null);
    } else {
      setActiveKey(key);
    }
  };

  const collapseItemsLeft = [
    {
      title: "asdassdfsdfsdfsdf",
      desc: "asdwefkygsdfkjhsfklsahfsdf",
      key: "1",
    },
    {
      title: "asdassdfsdfsdfsdf",
      desc: "asdwefkygsdfkjhsfklsahfsdf",
      key: "2",
    },
    {
      title: "asdassdfsdfsdfsdf",
      desc: "asdwefkygsdfkjhsfklsahfsdf",
      key: "3",
    },
  ];

  const collapseItemsRight = [
    {
      title: "asdassdfsdfsdfsdf",
      desc: "asdwefkygsdfkjhsfklsahfsdf",
      key: "4",
    },
    {
      title: "asdassdfsdfsdfsdf",
      desc: "asdwefkygsdfkjhsfklsahfsdf",
      key: "5",
    },
  ];

  return (
    <div className="bg-[url('/images/career-bg.svg')] w-full bg-no-repeat bg-cover">
      <div className="h-full px-[30px] lg:px-[120px] py-[120px]">
        <div className="flex rounded-[36px] border border-[#E5E5E5] shadow-md flex-col-reverse md:flex-row">
          <div className="flex flex-col w-full px-[20px] md:px-[58px] py-[50px] md:py-[87px] justify-center bg-white md:rounded-tl-[36px] rounded-bl-[36px] md:rounded-br-[0px] rounded-br-[36px]">
            <div className="text-primary text-[27px]">Contact Us</div>
            <Spacer height="35px" />
            <div className="section-header" style={{ textAlign: "left" }}>
              Get in touch
            </div>
            <Spacer height="35px" />
            <InputGroupText
              text="Name"
              placeholder="Enter your name"
              handleChange={(e) => setState({ ...state, name: e })}
              value={state?.name}
            />
            <Spacer height="35px" />
            <InputGroupText
              text="Email"
              placeholder="Enter your email address"
              handleChange={(e) => setState({ ...state, email: e })}
              value={state?.email}
            />
            <Spacer height="35px" />
            <InputGroupPhone
              text="Phone Number"
              placeholder="Enter your phone number"
              handleChange={(e) => setState({ ...state, phone: e })}
              value={state?.phone}
            />
            <Spacer height="35px" />
            <InputGroupTextbox
              text="Message"
              placeholder="Enter your message"
              handleChange={(e) => setState({ ...state, message: e })}
              value={state?.message}
            />
            <Spacer height="35px" />
            <div>
              <PrimaryButton text="Submit" width="100%" />
            </div>
          </div>
          <div
            className={`bg-[url('/images/contact-us-banner.png')]  w-full bg-no-repeat bg-cover bg-center rounded-tr-[36px] rounded-tl-[36px] md:rounded-tl-[0px] rounded-br-[0px] md:rounded-br-[36px] ${
              screenSize?.width < 768 ? "h-[600px]" : ""
            } `}
          ></div>
        </div>

        <Spacer height="100px" />
        <div className="section-header">You Ask. We Answer.</div>
        <Spacer height="80px" />
        <div className="text-[22px] text-[#707070]">
          Others frequently ask.....
        </div>
        <Spacer height="20px" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-black">
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
                          } font-bold text-[16px] transition-all`}
                        >
                          {item?.title}
                        </p>
                      ),
                      children: <p className="text-[#707070]">{item?.desc}</p>,
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
                          } font-bold text-[16px] transition-all`}
                        >
                          {item?.title}
                        </p>
                      ),
                      children: <p className="text-[#707070]">{item?.desc}</p>,
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
    </div>
  );
};

export default ContactUs;

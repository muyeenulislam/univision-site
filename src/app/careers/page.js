"use client";

import React, { useState } from "react";
import Spacer from "@/utils/spacer";

import InputGroupText from "@/components/input/input-group-text";
import InputGroupPhone from "@/components/input/input-group-phone";
import InputGroupFile from "@/components/input/input-group-file";

import PrimaryButton from "@/components/buttons/primarybutton";

const Careers = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    resumeName: "",
    cover: "",
    coverName: "",
  });

  return (
    <div className="bg-[url('/images/career-bg.svg')] w-full bg-no-repeat bg-cover">
      <div className="h-full px-[30px] lg:px-[120px] py-[120px]">
        <div className="flex rounded-[36px] border border-[#E5E5E5] shadow-md flex-col-reverse md:flex-row">
          <div className="flex flex-col w-full px-[20px] md:px-[58px] py-[50px] md:py-[87px] justify-center bg-white md:rounded-tl-[36px] rounded-bl-[36px] md:rounded-br-[0px] rounded-br-[36px]">
            <div className="section-header" style={{ textAlign: "left" }}>
              Apply Now
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
            <InputGroupFile
              text="Upload Resume"
              placeholder="Upload File"
              handleChange={(e) =>
                setState({ ...state, resume: e, resumeName: e?.name })
              }
              value={state?.resumeName}
            />
            <Spacer height="35px" />
            <InputGroupFile
              text="Upload Cover Letter (Optional)"
              placeholder="Upload File"
              handleChange={(e) =>
                setState({ ...state, cover: e, coverName: e?.name })
              }
              value={state?.coverName}
            />
            <Spacer height="35px" />
            <div>
              <PrimaryButton text="Submit" width="100%" />
            </div>
          </div>
          <div className="bg-[url('/images/career-banner.png')] w-full bg-no-repeat bg-cover rounded-tr-[36px] rounded-tl-[36px] md:rounded-tl-[0px] rounded-br-[0px] md:rounded-br-[36px]">
            <div className="flex flex-col text-white px-[58px] py-[87px]">
              <div className="text-[42px] xl:text-[68px] font-bold">
                Join Our Team
              </div>
              <Spacer height="35px" />
              <div className="text-[16px] xl:text-[22px] font-light">
                As a dynamic, fast-growing start-up in the edtech space,
                UniVision is committed to hiring widely across demographics and
                disciplines in order to ensure that we have a representative
                community to make sure our product is accessible and useful to
                students by accommodating for features and elements of the
                college search and selection process that are often bypassed in
                favor of more traditional metrics.
              </div>
              <Spacer height="35px" />
              <div className="text-[16px] xl:text-[22px] font-light">
                If you are interested in working with us to support students in
                their aspirations towards higher education, head on over to the
                Careers page or reach out to us for information on a wide
                variety of remote internships and full-time roles.
              </div>
              <Spacer height="35px" />
              <div className="text-[16px] xl:text-[22px] font-light">
                We are a young, dynamic and fast-paced fully-remote company with
                employees located all over the world and we’re actively looking
                to recruit brilliant and motivated individuals from a wide
                variety of backgrounds and majors.
              </div>
              <Spacer height="35px" />
              <div className="text-[16px] xl:text-[22px] font-light">
                If you are interested in working for UniVision, we have a range
                of roles that are open for application below. If you feel that
                UniVision is a good fit for you but none of the roles below
                match your skillset or background, please email us at{" "}
                <a href="mailto:careers@univision.hk" className="font-semibold">
                  careers@univision.hk
                </a>{" "}
                so we can set up a chat with you!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

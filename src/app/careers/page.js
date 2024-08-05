"use client";

import React, { useState } from "react";
import { message } from "antd";
import axios from "axios";

import isValidEmail from "@/utils/isvalidemail";
import Spacer from "@/utils/spacer";

import { roles } from "@/components/dropdownvalues/roles";
import { whereDidYouHear } from "@/components/dropdownvalues/wheredidyouhear";
import InputGroupText from "@/components/input/input-group-text";
import InputGroupPhone from "@/components/input/input-group-phone";
import InputGroupFile from "@/components/input/input-group-file";
import InputGroupDropdown from "@/components/input/input-group-dropdown";
import PrimaryButton from "@/components/buttons/primarybutton";

const Careers = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    interestedRole: "",
    whereDidYouHear: "",
    resume: "",
    resumeName: "",
    cover: "",
    coverName: "",
  });

  const defaultState = () => {
    setState({
      name: "",
      email: "",
      phone: "",
      interestedRole: "",
      whereDidYouHear: "",
      resume: "",
      resumeName: "",
      cover: "",
      coverName: "",
    });
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
      } else if (!state?.resume) {
        message.error("Resume is required");
      } else if (!state?.interestedRole) {
        message.error("Role is required");
      } else if (!state?.whereDidYouHear) {
        message.error("Please tell us where did you hear about us.");
      } else {
        const formData = new FormData();

        formData.append("name", state.name);
        formData.append("email", state.email);
        formData.append("phone", state.phone);
        formData.append("interestedRole", state.interestedRole);
        formData.append("whereDidYouHear", state.whereDidYouHear);
        if (state?.resume && state?.resumeName) {
          formData.append("resume", state.resume);
          formData.append("resumeName", state.resumeName);
        }
        if (state?.cover && state?.coverName) {
          formData.append("cover", state.cover);
          formData.append("coverName", state.coverName);
        }

        const sendEmail = await axios.post(
          "https://api-prod-univision.azurewebsites.net/website-email/send-email-career",
          formData
        );

        if (sendEmail?.status === 200) {
          message.success("Application submitted successfully");
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

  return (
    <div className="bg-[url('/images/career-bg.svg')] w-full bg-no-repeat bg-cover">
      <div className="h-full px-[30px] lg:px-[120px] py-[120px] ">
        <div className="flex rounded-[36px] border border-[#E5E5E5] shadow-md flex-col-reverse md:flex-row fade-in-right">
          <div className="flex flex-col w-full px-[20px] md:px-[58px] py-[50px] md:py-[87px] justify-center bg-white md:rounded-tl-[36px] rounded-bl-[36px] md:rounded-br-[0px] rounded-br-[36px]">
            <div className="section-header" style={{ textAlign: "left" }}>
              Apply Now
            </div>
            <Spacer height="35px" />
            <InputGroupText
              text="Name"
              required
              placeholder="Enter your name"
              handleChange={(e) => setState({ ...state, name: e })}
              value={state?.name}
            />
            <Spacer height="35px" />
            <InputGroupText
              text="Email"
              type="email"
              required
              placeholder="Enter your email address"
              handleChange={(e) => setState({ ...state, email: e })}
              value={state?.email}
            />
            <Spacer height="35px" />
            <InputGroupPhone
              text="Phone Number"
              required
              placeholder="Enter your phone number"
              handleChange={(e) => setState({ ...state, phone: e })}
              value={state?.phone}
            />
            <Spacer height="35px" />
            <InputGroupFile
              text="Upload Resume"
              required
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
            <InputGroupDropdown
              text="Role You Are Interested In"
              required
              placeholder="Select Role"
              handleChange={(e) => setState({ ...state, interestedRole: e })}
              value={state?.interestedRole}
              dropItems={roles}
            />
            <Spacer height="35px" />
            <InputGroupDropdown
              text="Where Did You Hear About Us"
              required
              placeholder="Please Select"
              handleChange={(e) => setState({ ...state, whereDidYouHear: e })}
              value={state?.whereDidYouHear}
              dropItems={whereDidYouHear}
            />
            <Spacer height="35px" />
            <PrimaryButton text="Submit" width="100%" onClick={handleSubmit} />
          </div>
          <div className="bg-[url('/images/career-banner.png')] w-full bg-no-repeat bg-cover rounded-tr-[36px] rounded-tl-[36px] md:rounded-tl-[0px] rounded-br-[0px] md:rounded-br-[36px]">
            <div className="flex flex-col text-white px-[58px] py-[87px]">
              <div className="text-[28px] xl:text-[42px] font-bold">
                Join Our Team
              </div>
              <Spacer height="35px" />
              <div className="text-[16px] xl:text-[18px] font-light">
                As a dynamic, fast-growing start-up in the edtech space,
                UniVision is committed to hiring widely across demographics and
                disciplines in order to ensure that we have a representative
                community to make sure our product is accessible and useful to
                students by accommodating for features and elements of the
                college search and selection process that are often bypassed in
                favor of more traditional metrics.
              </div>
              <Spacer height="35px" />
              <div className="text-[16px] xl:text-[18px] font-light">
                If you are interested in working with us to support students in
                their aspirations towards higher education, head on over to the
                Careers page or reach out to us for information on a wide
                variety of remote internships and full-time roles.
              </div>
              <Spacer height="35px" />
              <div className="text-[16px] xl:text-[18px] font-light">
                We are a young, dynamic and fast-paced fully-remote company with
                employees located all over the world and we’re actively looking
                to recruit brilliant and motivated individuals from a wide
                variety of backgrounds and majors.
              </div>
              <Spacer height="35px" />
              <div className="text-[16px] xl:text-[18px] font-light">
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

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
      <div className="h-full px-[1.875em] lg:px-[7.5em] py-[7.5em] ">
        <div className="flex rounded-[2em] border border-[#E5E5E5] shadow-md flex-col-reverse md:flex-row fade-in-right">
          <div className="flex flex-col w-full px-[1.25em] md:px-[3.625em] py-[3.125em] md:py-[5.4375em] justify-center bg-white md:rounded-tl-[2em] rounded-bl-[2em] md:rounded-br-0 rounded-br-[2em]">
            <div className="section-header" style={{ textAlign: "left" }}>
              Apply Now
            </div>
            <Spacer height="2.1875em" />
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
              type="email"
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
            <InputGroupFile
              text="Upload Resume"
              required
              placeholder="Upload File"
              handleChange={(e) =>
                setState({ ...state, resume: e, resumeName: e?.name })
              }
              value={state?.resumeName}
            />
            <Spacer height="2.1875em" />
            <InputGroupFile
              text="Upload Cover Letter (Optional)"
              placeholder="Upload File"
              handleChange={(e) =>
                setState({ ...state, cover: e, coverName: e?.name })
              }
              value={state?.coverName}
            />
            <Spacer height="2.1875em" />
            <InputGroupDropdown
              text="Role You Are Interested In"
              required
              placeholder="Select Role"
              handleChange={(e) => setState({ ...state, interestedRole: e })}
              value={state?.interestedRole}
              dropItems={roles}
            />
            <Spacer height="2.1875em" />
            <InputGroupDropdown
              text="Where Did You Hear About Us?"
              required
              placeholder="Please Select"
              handleChange={(e) => setState({ ...state, whereDidYouHear: e })}
              value={state?.whereDidYouHear}
              dropItems={whereDidYouHear}
            />
            <Spacer height="2.1875em" />
            <PrimaryButton text="Submit" width="100%" onClick={handleSubmit} />
          </div>
          <div className="bg-[url('/images/career-banner.png')] w-full bg-no-repeat bg-cover rounded-tr-[2em] rounded-tl-[2em] md:rounded-tl-[0px] rounded-br-[0px] md:rounded-br-[2em]">
            <div className="flex flex-col text-white px-[3.625em] py-[5.4375em]">
              <div className="text-[1.75em] xl:text-[2.625em] font-bold">
                Join Our Team
              </div>
              <Spacer height="2.1875em" />
              <div className="text-[1em] xl:text-[1.125em] font-light">
                As a dynamic, fast-growing start-up in the edtech space,
                UniVision is committed to hiring widely across demographics and
                disciplines in order to ensure that we have a representative
                community to make sure our product is accessible and useful to
                students by accommodating for features and elements of the
                college search and selection process that are often bypassed in
                favor of more traditional metrics.
              </div>
              <Spacer height="2.1875em" />
              <div className="text-[1em] xl:text-[1.125em] font-light">
                If you are interested in working with us to support students in
                their aspirations towards higher education, head on over to the
                Careers page or reach out to us for information on a wide
                variety of remote internships and full-time roles.
              </div>
              <Spacer height="2.1875em" />
              <div className="text-[1em] xl:text-[1.125em] font-light">
                We are a young, dynamic and fast-paced fully-remote company with
                employees located all over the world and we’re actively looking
                to recruit brilliant and motivated individuals from a wide
                variety of backgrounds and majors.
              </div>
              <Spacer height="2.1875em" />
              <div className="text-[1em] xl:text-[1.125em] font-light">
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

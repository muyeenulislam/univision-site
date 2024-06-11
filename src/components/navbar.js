"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dropdown } from "antd";

import { RxHamburgerMenu } from "react-icons/rx";

import useScreenSize from "@/utils/usescreensize";

const Navbar = () => {
  const screenSize = useScreenSize();
  const router = useRouter();

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarItem = [
    { label: "Home", key: "/home" },
    { label: "Careers", key: "/careers" },
    { label: "Our Team", key: "/our-team" },
    { label: "Contact Us", key: "/contact-us" },
    { label: "Sign Up Guide", key: "/signup-guide" },
    { label: "Explore Now", key: "/explore" },
  ];

  const items = [
    {
      label: <a href="/">Home</a>,
      key: "0",
    },
    {
      label: <a href="/careers">Careers</a>,
      key: "1",
    },
    {
      label: <a href="/our-team">Our Team</a>,
      key: "1",
    },
    {
      label: <a href="/contact-us">Contact us</a>,
      key: "1",
    },
    {
      label: <a href="/signup-guide">Sign Up Guide</a>,
      key: "1",
    },
    {
      label: <a href="/explore">Explore Now</a>,
      key: "1",
    },
  ];

  return (
    <navbar
      className={`flex justify-between items-center fixed w-full px-[50px] md:px-[120px] py-5 transition-all duration-300 ${
        scroll
          ? "bg-white bg-opacity-80 text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div onClick={() => router.push("/")}>
        <Image src={"/images/logo.png"} alt="" height={35} width={196} />
      </div>
      {screenSize.width > 1175 ? (
        <div className="flex justify-center items-center gap-6">
          {navbarItem?.map((item, index) => (
            <div
              key={index}
              className={`text-[18px] ${
                item?.key === "/explore"
                  ? "bg-white text-primary px-5 py-2 rounded-full shadow-sm"
                  : scroll
                  ? "text-black"
                  : "text-white"
              }`}
            >
              {item?.label}
            </div>
          ))}
        </div>
      ) : (
        <div className={`flex justify-center items-center p-2`}>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <RxHamburgerMenu
              color={scroll ? "#038175" : "white"}
              fontSize={28}
            />
          </Dropdown>
        </div>
      )}
    </navbar>
  );
};

export default Navbar;

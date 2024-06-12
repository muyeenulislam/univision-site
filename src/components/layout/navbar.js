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
      label: (
        <a href="/" className="text-[18px] font-semibold p-2">
          Home
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a href="/careers" className="text-[18px] font-semibold p-2">
          Careers
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a href="/our-team" className="text-[18px] font-semibold p-2">
          Our Team
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a href="/contact-us" className="text-[18px] font-semibold p-2">
          Contact us
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a href="/signup-guide" className="text-[18px] font-semibold p-2">
          Sign Up Guide
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a href="/explore" className="text-[18px] font-semibold p-2">
          Explore Now
        </a>
      ),
      key: "1",
    },
  ];

  return (
    <navbar
      className={`flex justify-between items-center fixed w-full px-[50px] md:px-[120px] py-5 transition-all duration-300 z-[1000] ${
        scroll
          ? "bg-white bg-opacity-80 text-black backdrop-blur-md shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <a href="/">
        <Image
          src={scroll ? "/images/logo-green.png" : "/images/logo.png"}
          alt=""
          height={35}
          width={196}
        />
      </a>
      {screenSize.width > 1175 ? (
        <div className="flex justify-center items-center gap-6">
          {navbarItem?.map((item, index) => (
            <a
              key={index}
              href={item.key}
              className={`text-[18px] hover:text-primary transition-all ${
                item?.key === "/explore"
                  ? "bg-white text-primary px-5 py-2 rounded-full shadow-lg"
                  : scroll
                  ? "text-black"
                  : "text-white"
              }`}
            >
              {item?.label}
            </a>
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

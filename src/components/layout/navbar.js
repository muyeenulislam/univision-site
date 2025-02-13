"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dropdown } from "antd";

import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarItem = [
    { label: "Home", key: "/" },
    { label: "Careers", key: "/careers" },
    { label: "Our Team", key: "/our-team" },
    { label: "Contact Us", key: "/contact-us" },
    // { label: "Sign Up Guide", key: "/signup-guide" },
    { label: "Login", key: "https://student.univision.hk/" },
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
      key: "2",
    },
    {
      label: (
        <a href="/contact-us" className="text-[18px] font-semibold p-2">
          Contact us
        </a>
      ),
      key: "3",
    },
    // {
    //   label: (
    //     <a href="/signup-guide" className="text-[18px] font-semibold p-2">
    //       Sign Up Guide
    //     </a>
    //   ),
    //   key: "4",
    // },
  ];

  return (
    <navbar
      className={`flex justify-between items-center sticky top-0 right-0 w-full px-[50px] md:px-[120px] py-5 transition-all duration-300 z-[1000] ${
        scroll
          ? `bg-white bg-opacity-80 text-black backdrop-blur-md shadow-md`
          : `bg-transparent  text-white`
      }`}
    >
      <a href="/">
        <Image
          src={
            pathname === "/" || pathname === "/our-team"
              ? scroll
                ? "/images/logo-green.png"
                : "/images/logo.png"
              : "/images/logo-mixed.png"
          }
          alt=""
          height={35}
          width={196}
        />
      </a>

      <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-6">
        {navbarItem?.map((item, index) => (
          <a
            key={index}
            href={item.key}
            target={`${
              item?.key === "https://student.univision.hk/" ? "_blank" : ""
            }`}
            className={`text-[16px] ${
              pathname === "/" || pathname === "/our-team"
                ? scroll
                  ? "hover:text-primary hover:font-semibold"
                  : "hover:text-white hover:font-semibold"
                : "hover:text-primary hover:font-semibold"
            }  transition-all ${
              item?.key === "https://student.univision.hk/"
                ? pathname === "/" || pathname === "/our-team"
                  ? "bg-white text-primary px-5 py-2 rounded-full shadow-lg hover:bg-primary hover:text-white font-semibold"
                  : "bg-primary text-white hover:bg-white border border-primary hover:text-primary px-5 py-2 rounded-full shadow-lg font-semibold"
                : scroll
                ? `${
                    pathname === item?.key
                      ? "text-primary font-semibold"
                      : "text-black"
                  }`
                : `${
                    pathname === item?.key
                      ? pathname === "/" || pathname === "/our-team"
                        ? "text-white font-semibold"
                        : "text-primary font-semibold"
                      : `${
                          pathname === "/" || pathname === "/our-team"
                            ? "text-white"
                            : "text-black"
                        }`
                  }`
            }`}
          >
            {item?.label}
          </a>
        ))}
      </div>

      <div className={`lg:hidden flex justify-center items-center p-2`}>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
          placement="bottomRight"
          overlayStyle={{ marginRight: "-50px" }}
        >
          <RxHamburgerMenu
            color={
              pathname === "/" || pathname === "/our-team"
                ? scroll
                  ? "#038175"
                  : "white"
                : "#038175"
            }
            fontSize={28}
          />
        </Dropdown>
      </div>
    </navbar>
  );
};

export default Navbar;

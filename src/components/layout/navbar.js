"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
        <Link href="/" className="text-[1.125em] font-semibold p-2">
          Home
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link href="/careers" className="text-[1.125em] font-semibold p-2">
          Careers
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link href="/our-team" className="text-[1.125em] font-semibold p-2">
          Our Team
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link href="/contact-us" className="text-[1.125em] font-semibold p-2">
          Contact us
        </Link>
      ),
      key: "3",
    },
    // {
    //   label: (
    //     <Link href="/signup-guide" className="text-[1.125em] font-semibold p-2">
    //       Sign Up Guide
    //     </Link>
    //   ),
    //   key: "4",
    // },
  ];

  return (
    <navbar
      className={`flex justify-between items-center sticky top-0 right-0 w-full px-[3.125em] md:px-[7.5em] py-5 transition-all duration-300 z-[1000] ${
        scroll
          ? `bg-white bg-opacity-80 text-black backdrop-blur-md shadow-md`
          : `bg-transparent  text-white`
      }`}
    >
      <Link href="/" className="h-[2.1875em] w-[12.25em]">
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
      </Link>

      <div className="hidden lg:flex lg:justify-center lg:items-center lg:gap-6">
        {navbarItem?.map((item, index) => (
          <Link
            key={index}
            href={item.key}
            target={`${
              item?.key === "https://student.univision.hk/" ? "_blank" : ""
            }`}
            className={`text-[1em] ${
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
          </Link>
        ))}
      </div>

      <div className={`lg:hidden flex justify-center items-center p-2`}>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
          placement="bottomRight"
          overlayStyle={{ marginRight: "-3.125em" }}
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

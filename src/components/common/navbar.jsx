"use client";
import { useState } from "react";
import logo from "../../../public/Images/logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Button from "./custom_button";
import { Sidebar } from "@/components/common/sidebar";

export default function Navbar() {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <div className="flex justify-between px-[24px] bg-[#ECDFCC]">
        <div className="flex justify-between items-center">
          <span className="pl-3">
            <FaInstagram />
          </span>
          <span className="pl-3">
            {" "}
            <FaTwitter />
          </span>
          <span className="pl-3">
            <FaLinkedin />
          </span>
        </div>
        <div>+60123397028</div>
      </div>
      <nav className="border-gray-200 border-b-2 px-[24px] p-3">
        <div className="flex flex-wrap items-center justify-between ">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} width={68} height={68} alt="logo error" />
            <h1 className="text-20 text-[#5E5E3C] pl-5 font-semibold">LOGO</h1>
          </a>
          <div className="flex w-170 justify-between">
            <div className="button-wrapper" style={{ marginRight: "3rem" }}>
              <Button color="golden" btnText="Contact Us >" />
            </div>

            <Sidebar />
          </div>
        </div>
      </nav>
    </div>
  );
}

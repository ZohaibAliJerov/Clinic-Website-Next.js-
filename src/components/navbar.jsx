"use client";
import React, { useEffect, useState } from "react";
import logo from "../../public/Images/logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Button from "./custom_button";
import { Sidebar } from "@/components/sidebar";
import { motion, sync, useCycle } from "framer-motion";

import Link from "next/link";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    console.log(isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <div>
      <div className="flex justify-between px-[24px] bg-[#ECDFCC] ">
        <div className="flex justify-between items-center">
          <span className="pl-3">
            <FaInstagram />
          </span>
          <span className="pl-3">
            <FaTwitter />
          </span>
          <span className="pl-3">
            <FaLinkedin />
          </span>
        </div>
        <div>+60123397028</div>
      </div>
      <nav className="border-gray-200 border-b-2 px-[24px] p-3 ">
        <div className="flex flex-wrap items-center justify-between ">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} width={68} height={68} alt="logo error" />
            <h1 className="text-20 text-[#5E5E3C] pl-5 font-semibold">LOGO</h1>
          </Link>
          <div className="flex w-170 justify-between">
            <div
              className="button-wrapper hidden md:block"
              style={{
                zIndex: isOpen ? 0 : 2,
                marginRight: "3rem",
              }}
            >
              <Button color="golden" btnText="Contact Us >" />
            </div>
          </div>
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={handleSidebarToggle}
            toggleOpen={toggleOpen}
            isOpenToggle={isOpen}
          />
        </div>
      </nav>
    </div>
  );
}

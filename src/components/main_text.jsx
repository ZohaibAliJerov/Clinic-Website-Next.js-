"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MainText = (props) => {
  const sizes = {
    largeSizeText:
      "text-[40px] font-normal sm:text-[40px] md:text-[30px] lg:text-[40px]",
    smallSizeText:
      "text-[24px] font-normal text-[16px] font-normal sm:text-[16px] md:text-[24px] lg:text-[24px]",
  };
  const colors = {
    white: "text-white ",
    black: "text-black",
    green: "text-[#5E5E3C]",
  };

  return (
    <div className=" flex justify-end">
      <div className="flex flex-col md:flex-row h-full w-[100%] ">
        <div className="flex flex-col justify-center md:w-1/2 pl-[24px] my-10 mr-10 sm:my-10">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className={`${sizes[props.textSize]} ${colors[props.textColor]}`}
          >
            {props.title}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className={`${sizes[props.textSize]} $colors[props.textColor]`}
          >
            {props.subTitle}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            className="mt-10 w-[13rem]"
          >
            <Link href="/services">
              <p className="text-[20px] font-normal text-[#A08A7F] hover:text-[#5E5E3C]">
                {props.link1}
              </p>
            </Link>
            <Link href="/team">
              <p className="text-[20px] font-normal text-[#A08A7F] hover:text-[#5E5E3C]">
                {props.link2}
              </p>
            </Link>
            <Link href="/contactus">
              <p className="text-[20px] font-normal text-[#A08A7F] hover:text-[#5E5E3C]">
                {props.link3}
              </p>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
          }}
          className="flex md:w-1/2"
        >
          <Image src={props.image} alt="" className="w-full h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default MainText;

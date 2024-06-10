"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./custom_button";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SubContentBox = (props) => {
  const baseClass = "flex h-[320px]";
  const bgColors = {
    darkGolden: "bg-[#5E5E3C] ",
    lightGolden: "bg-[#ECDFCC]",
  };
  const textColors = {
    white: "text-white",
    black: "text-black",
    grey: "text-[#5E5E3C]",
  };
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  React.useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);
  return (
    <div
      className={`${baseClass} ${bgColors[props.bgColor]},`}
      style={{ height: "auto" }}
    >
      <div className="flex flex-col justify-center sm:flex-row  items-center w-[100%] px-[24px] m-auto md:justify-between py-4 h-[332px]">
        <div className="flex flex-col text-center lg:text-start w-[100%] lg:w-1/2">
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            transition={{ duration: 1 }}
            className={`${
              textColors[props.textColor]
            } || text-[30px] md:text-[40px]`}
          >
            {props.title}
          </motion.h1>
          <motion.h1
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            transition={{ duration: 1 }}
            className={`${
              textColors[props.textColor]
            } || text-[30px] md:text-[40px] font-normal`}
          >
            {props.subTitle}
          </motion.h1>
          <div className=" mt-5">
            <Link href="/services">
              <Button color="golden" btnText="See Our Services" />
            </Link>
          </div>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="hidden lg:flex pt-3 sm:pt-0 md:w-1/2 justify-end pr-8"
        >
          <Image src={props.image} alt="" width={159} height={163} />
        </motion.div>
      </div>
    </div>
  );
};

export default SubContentBox;

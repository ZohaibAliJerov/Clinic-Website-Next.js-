import React from "react";
import Image from "next/image";
import Button from "./custom_button";

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

  return (
    <div className={`${baseClass} ${bgColors[props.bgColor]}`}>
      <div className="flex items-center w-[100%] px-[24px] m-auto justify-between">
        <div className="flex flex-col justify-center md:w-1/2">
          <h1
            className={`${
              textColors[props.textColor]
            } || text-[20px] font-normal sm:text-[20px] md:text-[40px]`}
          >
            {props.title}
          </h1>
          <h1
            className={`${
              textColors[props.textColor]
            } || text-[20px] sm:text-[20px] md:text-[40px] font-normal`}
          >
            {props.subTitle}
          </h1>
          <div className=" mt-5">
            <Button color="golden" btnText="See Our Services" />
          </div>
        </div>
        <div className="flex md:w-1/2 justify-end">
          <Image src={props.image} alt="" width={180} height={180} />
        </div>
      </div>
    </div>
  );
};

export default SubContentBox;

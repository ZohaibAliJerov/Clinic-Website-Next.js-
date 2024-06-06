import React from "react";
import Link from "next/link";
import Image from "next/image";

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
          <h1 className={`${sizes[props.textSize]} $colors[props.textColor]`}>
            {props.title}
          </h1>
          <h1 className={`${sizes[props.textSize]} $colors[props.textColor]`}>
            {props.subTitle}
          </h1>
          <div className="mt-10 w-[13rem]">
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
          </div>
        </div>
        <div className="flex md:w-1/2">
          <Image src={props.image} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default MainText;

import React from "react";
import { PiStethoscopeLight } from "react-icons/pi";
import { PiGreaterThanLight } from "react-icons/pi";

const ServicesBar = () => {
  return (
    <div className="flex justify-between h-[136px] w-[100%] bg-[#ECDBBD]">
      <div className="px-8 py-4">
        <h1 className="text-4xl">Services</h1>
        <h3 className="text-xl flex items-center pt-6 text-[#757575]">
          Home
          <PiGreaterThanLight />
          Services
        </h3>
      </div>
      <div className="px-10 py-4">
        <PiStethoscopeLight className="text-8xl" color="#5e5e3d" />
      </div>
    </div>
  );
};

export default ServicesBar;

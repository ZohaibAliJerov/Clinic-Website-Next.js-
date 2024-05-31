import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const TopNav = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-between items-center text-black w-90 mx-auto h-8">
        <div className="flex items-center">
          <FaInstagram className="mr-4" />
          <FaLinkedin className="mr-4" />
          <FaTwitter />
        </div>
        <div className="md:block">+123-456-7890</div>
      </div>
    </div>
  );
};

export default TopNav;

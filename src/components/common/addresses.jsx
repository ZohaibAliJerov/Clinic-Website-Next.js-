import React from "react";
import Image from "next/image";
import AddressTitleIcons from "./address_title_icons";
import location_icon from "../../../public/Images/icons/location.svg";
import phone_icon from "../../../public/Images/icons/phone.svg";
import whatsapp_icon from "../../../public/Images/icons/whatsapp.svg";

const Addressess = () => {
  return (
    <div className="flex flex-col w:[100%] align-center justify-center md:w-[50%] py-4">
      <div className="w-[90%] px-8">
        <div className="">
          <h1 className="text-[40px] font-bold sm:text-[24px] md:text-[40px] lg:text-[40px]">
            Branch Name
          </h1>
          <h1 className="text-[24px] font-normal sm:text-[16px] md:text-[24px] lg:text-[24px]">
            Lorem ipsum dolor sit amet consectetur. Amet rhoncus neque facilisi
            adipiscing tincidunt. Euismodrisus nunc vulputate ultricies ac
            turpis.
          </h1>
        </div>
        <div className="mt-5">
          <AddressTitleIcons
            image={location_icon}
            title="Location: "
            subTitle="4517 Washington Ave. Manchester, Kentucky 39495"
          />
          <AddressTitleIcons
            image={phone_icon}
            title="Phone: "
            subTitle="(432) 123446098"
          />
          <AddressTitleIcons
            image={whatsapp_icon}
            title="Whatsapp: "
            subTitle="+923 123446098"
          />
        </div>
      </div>
    </div>
  );
};

export default Addressess;

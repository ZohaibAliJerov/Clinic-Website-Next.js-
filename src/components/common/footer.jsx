import React from "react";
import Image from "next/image";
import ContactInfo from "./address_title_icons";
import location_icon from "../../../public/Images/icons/location.svg";
import phone_icon from "../../../public/Images/icons/phone.svg";
import whatsapp_icon from "../../../public/Images/icons/whatsapp.svg";
import email_icon from "../../../public/Images/icons/email.svg";
import fb from "../../../public/Images/social_icons/facebook.svg";
import twitter from "../../../public/Images/social_icons/twitter.svg";
import linkedin from "../../../public/Images/social_icons/linkedin.svg";
import insta from "../../../public/Images/social_icons/insta.svg";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#5E5E3C] ">
      <div className=" flex flex-col md:flex-row gap-10 max-w-auto justify-between w-[90%] mx-auto  py-20">
        <div className="relative flex w-[25rem] flex-col">
          <div className="flex items-center text-[32px] font-bold text-white">
            CLINIC NAME
          </div>
          <div className="text-xl text-contactText mt-7 font-400 text-white">
            Lorem ipsum dolor sit amet consectetur. Faucibus arcu ultrices
            gravida et dictumst duis gravida odio semper. Integer potenti
            viverra et interdum lobortis amet nisi lorem. Amet sed sit risus
            dictum dolor. Sem enim eget ac morbi placerat.
          </div>
        </div>
        <div className=" flex w-[16rem] flex-col items-center sm:items-start">
          <div className="text-2xl font-semibold whitespace-nowrap dark:text-carbtnTextColor items-center content-center text-white">
            Find Us
          </div>

          <div className="mt-5">
            <ContactInfo
              customColor="ligth"
              image={location_icon}
              title="Location: "
              subTitle="4517 Washington Ave. Manchester, Kentucky 39495"
            />
            <ContactInfo
              customColor="ligth"
              image={phone_icon}
              title="Phone: "
              subTitle="(432) 123446098"
            />
            <ContactInfo
              customColor="ligth"
              image={whatsapp_icon}
              title="Whatsapp: "
              subTitle="+923 123446098"
            />
            <ContactInfo
              customColor="ligth"
              image={email_icon}
              title="Email: "
              subTitle="clinicsmail44@gmail.com"
            />
          </div>
        </div>
        <div className="flex w-[16rem] flex-col">
          <div className="flex flex-col justify-start">
            <div className="text-2xl font-semibold whitespace-nowrap dark:text-carbtnTextColor items-center content-center text-white">
              Explore
            </div>
            <div>
              <p className="text-base text-contactText mt-5 font-400 text-white">
                Our Team
              </p>
              <p className="text-base text-contactText mt-7 font-400 text-white">
                Services
              </p>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex gap-5">
              <Image src={fb} alt="Facebook" />
              <Image src={twitter} alt="Twitter" />
              <Image src={linkedin} alt="LinkedIn" />
              <Image src={insta} alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

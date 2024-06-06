import React from "react";
import Image from "next/image";
import ContactInfo from "./address_title_icons";
import location_icon from "../../public/Images/icons/location.svg";
import phone_icon from "../../public/Images/icons/phone.svg";
import whatsapp_icon from "../../public/Images/icons/whatsapp.svg";
import email_icon from "../../public/Images/icons/email.svg";
import fb from "../../public/Images/social_icons/facebook.svg";
import twitter from "../../public/Images/social_icons/twitter.svg";
import linkedin from "../../public/Images/social_icons/linkedin.svg";
import insta from "../../public/Images/social_icons/insta.svg";

const Footer = () => {
  return (
    <footer className="bg-[#5E5E3C] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <div className="text-2xl font-bold text-white">Clinic Name</div>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center md:items-left">
          <div className="text-2xl font-bold text-white flex">Contact Us</div>
          <ContactInfo
            image={location_icon}
            title="Location: "
            subTitle="4517 Washington Ave. Manchester, Kentucky 39495"
            customColor="ligth"
          />
          <ContactInfo
            image={phone_icon}
            title="Phone: "
            subTitle="(432) 123446098"
            customColor="ligth"
          />
          <ContactInfo
            image={whatsapp_icon}
            title="Whatsapp: "
            subTitle="+923 123446098"
            customColor="ligth"
          />
          <ContactInfo
            image={email_icon}
            title="Email: "
            subTitle="clinicsmail44@gmail.com"
            customColor="ligth"
          />
        </div>
        <div className="flex flex-col space-y-4 items-center md:items-left">
          <div className="text-2xl font-bold text-white">Explore</div>
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Our Team
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Services
            </a>
          </div>
          <div className="flex space-x-12">
            <Image src={fb} alt="Facebook" width={24} height={24} />
            <Image src={twitter} alt="Twitter" width={24} height={24} />
            <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
            <Image src={insta} alt="Instagram" width={24} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

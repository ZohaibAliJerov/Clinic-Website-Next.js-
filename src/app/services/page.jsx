import React from "react";
import ServicesBar from "@/components/services_bar";
import ServicesText from "@/components/services_text";
import ImageCont from "@/components/image";
import imgo from "../../../public/Images/HomeImages/imgo.jpg";
import ServicesCard from "@/components/services_cards";

const services = () => {
  return (
    <div>
      <ServicesBar />
      <div className="flex flex-col md:flex-row">
        <ServicesText />
        <ImageCont image={imgo} />
      </div>
      <ServicesCard />
    </div>
  );
};

export default services;

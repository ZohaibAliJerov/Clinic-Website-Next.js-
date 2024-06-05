import React from "react";
import MainText from "../common/main_text";
import img1 from "../../../public/Images/HomeImages/image1.svg";
import img2 from "../../../public/Images/HomeImages/img2.svg";
import img5 from "../../../public/Images/HomeImages/img5.svg";
import vector_icon from "../../../public/Images/HomeImages/vector.svg";
import DividerText from "../common/divider_text";
import ContactForm from "../common/contact_form";
import Slider from "../common/slider";
import { sliderImg } from "../../../public/JsonData/SliderData";
import ImageCont from "../common/image";
import Addressess from "../common/addresses";

const HomePage = () => {
  return (
    <div>
      <MainText
        title="Welcome To Beyond"
        subTitle="Helping You Move Through Life."
        link1="See Our Services >"
        link2="Meet The Team >"
        link3="Contact Us >"
        image={img1}
        textSize="largeSizeText"
        textColor="black"
      />
      <DividerText
        title="Our Services Help You"
        subTitle="Move Through Life."
        image={vector_icon}
        bgColor="darkGolden"
        textColor="white"
      />
      <Slider
        title="At Beyond we believe in a patient focused care model, by offering a range of services under the one roof and a team approach we want to help you ‘Move Through Life’."
        link2="See All Of Our Services >"
        textSize="smallSizeText"
        textColor="black"
        sliderImages={sliderImg}
      />

      <DividerText
        title="Our Team Help You"
        subTitle="Move Through Life."
        image={img2}
        bgColor="lightGolden"
        textColor="grey"
      />

      <Slider
        title="Lorem ipsum dolor sit amet consectetur. Amet vel
              rhoncus neque facilisi adipiscing tincidunt. Euismod risus nunc vulputate ultriciesturpis.
              Lorem ipsum dolor sit amet consectetur. Amet vel
              rhoncus neque facilisi adipiscing tincidunt. Euismod risus nunc vulputate ultricies ac turpis."
        textSize="smallSizeText"
        textColor="black"
      />
      <DividerText
        title="Contact Us"
        subTitle="Find Our Clinics Near You."
        image={img2}
        bgColor="darkGolden"
        textColor="white"
      />
      <div className="flex flex-col md:flex-row items-center">
        <Addressess />
        <ImageCont image={img5} />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center ">
        <ImageCont image={img5} />
        <Addressess />
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <Addressess />
        <ImageCont image={img5} />
      </div>
      <ContactForm />
    </div>
  );
};

export default HomePage;
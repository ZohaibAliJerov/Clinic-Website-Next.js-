import React from 'react';
import Image from 'next/image';

const ContactInfo = (props) => {
  const colorStyle = {
    dark: 'text-black',
    ligth: 'text-white',
  };

  return (
    <div className="flex flex-col w-64 my-5">
      <div className="flex ">
        <div className="mr-5">
          <Image src={props.image} alt="" width="27" height="27" />
        </div>
        <div className="flex-col">
          <h3
            className={`${colorStyle[props.customColor]
              } || text-base font-bold `}
          >
            {props.title}
          </h3>
          <p
            className={`${colorStyle[props.customColor]
              } || text-[#757575] text-sm font-normal`}
          >
            {props.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

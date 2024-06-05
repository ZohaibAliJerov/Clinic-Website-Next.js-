import React from 'react';
import Image from 'next/image';
import ContactInfo from './ContactInfo';
import location_icon from '../../../public/Images/icons/location.svg';
import phone_icon from '../../../public/Images/icons/phone.svg';
import whatsapp_icon from '../../../public/Images/icons/whatsapp.svg';

const ContactContent = (props) => {

  const containerClass = props.rowStyle === 'RowReverse'
    ? 'flex justify-center md:flex-col'
    : 'flex justify-end md:flex-col';

  return (
    <div className={containerClass}>
      <div className="flex h-full w-[100%]" >
        {props.rowStyle === 'RowReverse' && (
          <div className="flex md:w-1/2" >
            <Image src={props.image} alt="" className="w-full h-auto" />
          </div>
        )}
        <div className="flex flex-col justify-center md:w-1/2 pl-[24px] md:my-10 lg:m-0" >
          <div className="py-10 sm:py-10 md:py-0" >
            <div>
              <h1 className="text-[40px] font-bold sm:text-[24px] md:text-[40px] lg:text-[40px]">
                Branch Name
              </h1>
              <h1 className="text-[24px] font-normal sm:text-[16px] md:text-[24px] lg:text-[24px]">
                Lorem ipsum dolor sit amet consectetur. Amet rhoncus neque facilisi adipiscing tincidunt. Euismodrisus nunc vulputate ultricies ac turpis.
              </h1>
            </div>
            <div className="mt-5 ">
              <ContactInfo
                image={location_icon}
                title="Location: "
                subTitle="4517 Washington Ave. Manchester, Kentucky 39495"
              />
              <ContactInfo
                image={phone_icon}
                title="Phone: "
                subTitle="(432) 123446098"
              />
              <ContactInfo
                image={whatsapp_icon}
                title="Whatsapp: "
                subTitle="+923 123446098"
              />
            </div>
          </div>
        </div>
        {props.rowStyle !== 'RowReverse' && (
          <div className="flex md:w-1/2">
            <Image src={props.image} alt="" className="w-full h-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactContent;
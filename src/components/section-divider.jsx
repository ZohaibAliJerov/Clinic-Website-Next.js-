import React from "react";
import { GiStethoscope } from "react-icons/gi";
import styled from "styled-components";
import CustomButton from "./custom-button";

const SectionDivider = ({ backgroundColor, textColor }) => {
  return (
    <div className="py-8" style={{ backgroundColor, textColor }}>
      <StyledTextIconWrapper className="flex w-90 mx-auto justify-between items-center">
        <div>
          <StyledH1 style={{ color: textColor }}>
            Our Services Help You
          </StyledH1>
          <StyledH2 className="">Move Through Life.</StyledH2>
          <CustomButton />
        </div>
        <StyledIconWrapper>
          <GiStethoscope
            style={{ width: "159px", height: "163px", color: textColor }}
          />
        </StyledIconWrapper>
      </StyledTextIconWrapper>
    </div>
  );
};

export default SectionDivider;

const StyledTextIconWrapper = styled.div`
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const StyledH1 = styled.h1`
  font-size: 40px;
  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;
const StyledH2 = styled.h2`
  font-size: 32px;
  color: #757575;
  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;

const StyledIconWrapper = styled.div`
  @media only screen and (max-width: 767px) {
    padding-top: 3rem;
  }
`;

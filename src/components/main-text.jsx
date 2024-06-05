"use client";
import React from "react";
import styled from "styled-components";

const MainText = ({
  heading1,
  heading2,
  services,
  team,
  contact,
  smallHeading,
}) => {
  return (
    <StyledTextWrapper className="flex flex-col items-end justify-center">
      <div className="w-90">
        <StyledHeadingWrapper>
          {smallHeading ? <h4>{smallHeading}</h4> : <h1>{heading1}</h1>}
          <h1 className="heading2">{heading2}</h1>
        </StyledHeadingWrapper>
        <div className="w-90 pt-10">
          <StyledUl>
            <li>{services} </li>
            <li>{team} </li>
            <li>{contact} </li>
          </StyledUl>
        </div>
      </div>
    </StyledTextWrapper>
  );
};

export default MainText;

const StyledTextWrapper = styled.div`
  width: 50%;
  @media only screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
  }
`;

const StyledHeadingWrapper = styled.div`
  margin-top: 10rem;
  width: 90%;
  @media only screen and (max-width: 767px) {
    margin-top: 2rem;
    width: 100%;
  }
  .heading2 {
    color: #444444;
  }
  h1 {
    font-size: 40px;
    font-weight: 400;
    line-height: 2rem;
    @media only screen and (max-width: 767px) {
      width: 100%;
      text-align: center;
      margin: 0 auto;
    }
    @media only screen and (min-width: 1000px) {
      line-height: 4rem;
    }
    @media only screen and (max-width: 1000px) {
      line-height: 3rem;
    }
  }
  h4 {
    font-size: 24px;
  }
`;

const StyledUl = styled.ul`
  font-size: 24px;
  color: #757575;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 767px) {
    align-items: center;
  }
  li {
    line-height: 1.5rem;
    @media only screen and (max-width: 1200px) {
      font-size: 20px;
    }

    @media only screen and (max-width: 568px) {
      font-size: 12px;
    }
  }
`;

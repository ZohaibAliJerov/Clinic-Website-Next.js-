"use client";
import React from "react";
import styled from "styled-components";

const MainText = () => {
  return (
    <StyledTextWrapper className="flex flex-col items-end justify-center">
      <div className="w-90">
        <StyledHeadingWrapper>
          <h1>Welcome To Beyond</h1>
          <h1 className="heading2">Helping You Move Through Life.</h1>
        </StyledHeadingWrapper>
        <div className="w-90 pt-10">
          <StyledUl>
            <li>See Our Services </li>
            <li>Meet The Team </li>
            <li>Contact Us </li>
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
`;

const StyledUl = styled.ul`
  font-size: 30px;
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

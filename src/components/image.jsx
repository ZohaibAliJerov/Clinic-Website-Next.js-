"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Images = ({ src }) => {
  return (
    <StyledImageWrapper>
      <StyledImage src={src} alt="bp" width={720} height={500} />
    </StyledImageWrapper>
  );
};

export default Images;

const StyledImageWrapper = styled.div`
  width: 50%;
  height: calc(100vh - 132px);
  @media only screen and (max-width: 767px) {
    width: 90%;
    margin: 0 auto;
    height: auto;
  }
`;
const StyledImage = styled(Image)`
  width: 100%;
  max-width: 100%;
  background-size: contain;
  height: 100%;
  @media only screen and (max-width: 767px) {
    height: 50vh;
  }
`;

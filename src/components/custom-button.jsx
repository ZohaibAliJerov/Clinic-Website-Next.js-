"use client";
import React from "react";
import styled from "styled-components";
const CustomButton = () => {
  return (
    <StyledWrapper>
      <StyledButton>See Our Services</StyledButton>
    </StyledWrapper>
  );
};

export default CustomButton;

const StyledButton = styled.button`
  background-color: #ffffff;
  width: 220px;
  height: 48px;
  margin-top: 1rem;
`;

const StyledWrapper = styled.div`
  @media only screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`;

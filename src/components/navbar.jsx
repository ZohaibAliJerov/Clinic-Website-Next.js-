import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StledNavbarWrapper className="flex border-b-2 items-center">
      <div className="flex navbar w-90 justify-between items-center mx-auto">
        <div className="navbar-brand">
          <img src="./svgs/Logo.svg" alt="Logo" />
        </div>
        <div className="hidden md:block">
          <button className="bg-gray-700 text-white mr-20 h-8 w-40 ">
            Contact Us
          </button>
        </div>
      </div>
    </StledNavbarWrapper>
  );
};

export default Navbar;
const StledNavbarWrapper = styled.div`
  height: 100px;
`;

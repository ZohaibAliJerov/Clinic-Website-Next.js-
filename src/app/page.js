"use client"
import Images from "@/components/image";
import MainText from "@/components/main-text"
import styled from "styled-components";
export default function Home() {
  return (
    <main>
      <StyledHeroWrapper className="flex flex-col md:flex-row" >
        <MainText />
        <Images />
      </StyledHeroWrapper>
    </main>
  );
}

const StyledHeroWrapper = styled.div`
height: calc(100vh - 132px);
@media only screen and (max-width: 767px) {
     height: auto;
    }
`
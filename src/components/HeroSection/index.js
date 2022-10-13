import React from "react";
import {
  HeroContainer,
  HeroTag,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroLogo,
} from "./HeroElements";
import { BsArrowRightCircle } from "react-icons/bs";
import { IoLogoReact } from "react-icons/io5";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroTag>Welcome to my Portfolio</HeroTag>
        <HeroH1>Hi! I'm Franco</HeroH1>
        <HeroP>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </HeroP>
        <HeroBtnWrapper
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
        >
          <p>Meet me</p>
          <BsArrowRightCircle />
        </HeroBtnWrapper>
      </HeroContent>
      <HeroLogo>
        <IoLogoReact/>
      </HeroLogo>
    </HeroContainer>
  );
};

export default HeroSection;

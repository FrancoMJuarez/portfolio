import React from "react";
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from "./HeroElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  return (
    <HeroContainer id='home'>
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>Hi! I'm Franco</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed lminiper
          suscipmodo conseqeumtate.
        </HeroP>
        <HeroBtnWrapper>
          <Button to="">Meet me</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
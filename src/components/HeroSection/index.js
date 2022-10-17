import React, { useEffect, useState } from "react";
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
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [lapse, setLapse] = useState(300 - Math.random() * 100);
  const words = [`Accounta`, `Web Developer`];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, lapse);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setLapse((prevLapse) => prevLapse / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      if (loopNum % 2 === 0){
        setIsDeleting(true);
        setLapse(800);
      } else {
        setIsDeleting(true);
        setLapse(3000);
      }
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setLapse(500);
    }
  };

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroTag>Welcome to my Portfolio</HeroTag>
        <HeroH1>{`Hi! I'm Franco ${text}`}</HeroH1>
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
        <IoLogoReact />
      </HeroLogo>
    </HeroContainer>
  );
};

export default HeroSection;

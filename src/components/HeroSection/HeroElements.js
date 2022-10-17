import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { keyframes } from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;
  padding-left: 150px;
  background-color: #010606;

  @media screen and (max-width: 768px) {
    padding-left: 50px;
  }

  @media screen and (max-width: 480px) {
    padding-left: 25px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeroTag = styled.p`
  color: white;
  font-size: 24px;
  border: 1px solid white;
  font-weight: bold;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const disappear = keyframes`
  0% {opacity: 1;}
  100% {opacity: 0}
`;

export const HeroH1 = styled.h1`
  color: white;
  margin-top: 5px;
  font-size: 48px;
  min-height: 137.1px;
  max-width: 350px;

  &::after {
    content: "";
    position: absolute;
    margin-left: 5px;
    height: 65px;
    width: 4px;
    background-color: white;
    animation: ${disappear} 0.9s ease infinite;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    min-height: 91.2px;
    max-width: 210px;
    &::after {
      height: 45px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 10px;
  color: #b8b8b8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5rem;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const HeroBtnWrapper = styled(LinkS)`
  margin-top: 60px;
  display: flex;
  align-items: center;
  color: white;
  letter-spacing: 0.8px;
  font-size: 25px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    svg {
      margin-left: 25px;
    }
  }

  svg {
    font-size: 25px;
    margin-left: 10px;
    transition: 0.3s ease-in-out;
    line-height: 1;
  }
`;

const updown = keyframes`
    0% {
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(-20px);
    }
`;

export const HeroLogo = styled.div`
  position: relative;
  left: 700px;

  svg {
    color: #00d8ff;
    font-size: 500px;
    animation: ${updown} 3s ease-in-out infinite;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

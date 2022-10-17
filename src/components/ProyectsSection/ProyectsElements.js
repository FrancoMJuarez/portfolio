import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const ProyectsContainer = styled.div`
  height: 800px;
  padding-top: 60px;
  background-color: #f9f9f9;
  position: relative;
`;

export const ProyectsTitle = styled.div`
  padding: 10px 40px 20px 40px;
  h2 {
    font-size: 1.5rem;
    padding-bottom: 10px;

    &::after {
      content: "";
      position: absolute;
      top: 110px;
      left: 40px;
      width: 100px;
      height: 2px;
      background-color: #000;
    }
  }
  p {
  }
`;

export const ProyectCarousel = styled(Carousel)`
  button {
    &:first-of-type {
      left: calc(1% + 1px);
      z-index: 100;
    }

    &:last-of-type {
      right: calc(1% + 1px);
      z-index: 100;
    }
  }

  li {
    display: flex;
    justify-content: center;
  }
`;

export const CarouselSlide = styled.div`
  height: 500px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SlideTitle = styled.div`
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
`;

export const SlideBody = styled.div`
  height: 440px;
  border: 3px solid black;
  position: relative;

  &:hover {
    cursor: pointer;
    #image {
      filter: brightness(60%);
      transition: 0.5s;
    }
    #blur {
      opacity: 1;
    }
    #contain {
      margin-top: 15px;

      h3 {
        color: white;
        transition: 0.3s;
        &::after {
          opacity: 1;
          transition: 0.9s;
        }
      }

      p {
        opacity: 1;
        color: white;
        transition: 0.3s;
      }
    }
  }
`;

export const SlideImage = styled.div`
  position: fixed;
  z-index: -3;
  height: 434px;
  width: 294px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  filter: brightness(100%);
  transition: 0.5s;

  svg {
    font-size: 100px;
    width: 100%;
    z-index: -5;
    position: absolute;
  }
`;

export const SliderBlur = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  opacity: 0;
`;

export const SlideContain = styled.div`
  height: 440px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 360px;
  transition: 0.6s;

  h3 {
    transition: 0.3s;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 30px;
      background-color: #fff;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: 0.3s;
    }
  }

  p {
    margin-top: 10px;
    opacity: 0;
    transition: 0.3s;
  }
`;

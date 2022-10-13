import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const ProyectsContainer = styled.div`
  height: 800px;
  background-color: #f9f9f9;
`;

export const ProyectsH2 = styled.h2`
  font-size: 2rem;
  padding-bottom: 2.5rem;
  padding-top: 2.8125rem;
  display: flex;
  justify-content: center;
`;

export const ProyectCarousel = styled(Carousel)`
  button {
    &:first-of-type {
      left: calc(1% + 1px);
    }

    &:last-of-type {
      right: calc(1% + 1px);
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
  justify-content: center;
  align-items: center;
  background-position: top;
  background-repeat: no-repeat;
  background-size: auto 100%;
  font-size: 1.5rem;
  transition: 0.5s ease-in-out;
  border-radius: 16px;

  &:hover {
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    color: white;
    background-size: auto 110%;
    transition: 0.5s ease-in-out;
  }
`;

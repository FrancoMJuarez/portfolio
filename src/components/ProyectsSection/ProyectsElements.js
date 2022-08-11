import styled from "styled-components";
import Slider from "react-slick";

export const ProyectsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProyectsH2 = styled.h2`
  font-size: 2rem;
  padding-bottom: 2.5rem;
  padding-top: 2.8125rem;
`;

export const ReviewSlider = styled(Slider)`
  &.slick-slider {
    flex-grow: 1;
    width: 85%;
    margin: 0 1.25rem;
  }

  .slick-list {
    height: 80%;
  }

  .slick-track {
    height: 100%;
  }

  .slick-slide {
    border-radius: 1.25rem;
  }

  .slick-slide div {
    border-radius: 1.25rem;
    height: 100%;
    padding: 1.25rem;
  }

  .slide {
    background-position: top;
    background-repeat: no-repeat;
    background-size: auto 100%;
    color: transparent;
    font-size: 1.5rem;
    display: flex !important;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }

  .slide:hover {
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    color: white;
    background-size: auto 110%;
    transition: 0.5s;
  }

  .slick-next,
  .slick-prev {
    top: 40% !important;
  }

  .slick-next {
    right: -25px !important;
  }

  .slick-prev {
    left: -25px !important;
  }
  .slick-prev:before {
    content: "<" !important;
  }
  .slick-next:before {
    content: ">" !important;
  }
  .slick-prev:before,
  .slick-next:before {
    color: black !important;
    font-size: 2.5rem !important;
    font-family: "acumin-pro" !important;
  }
`;

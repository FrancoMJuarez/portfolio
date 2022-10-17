import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import projectList from "../aux_project/ProjectList";
import Proyect from "./Proyect";
import {
  ProyectsContainer,
  ProyectCarousel,
  CarouselSlide,
  SlideTitle,
  SlideContain,
  SlideImage,
  SliderBlur,
  SlideBody,
  ProyectsTitle,
} from "./ProyectsElements";

import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsCalculator } from "react-icons/bs";
import { TbNotes } from "react-icons/tb";

const ProyectsSection = () => {
  const [popUp, setPopUp] = useState({
    toggle: false,
    title: "",
    link: "",
    number: "",
  });

  const controlPopUp = (toggle, title, link, number) => {
    setPopUp((prevState) => ({
      ...prevState,
      toggle: toggle,
      title: title,
      link: link,
      number: number,
    }));
  };

  const openSite = (link) => {
    window.open(link, "_blank");
  };

  const imageLoader = (imageNumber) => {
    if (imageNumber === 1) {
      return <TbNotes />;
    } else if (imageNumber === 2) {
      return <TiWeatherPartlySunny />;
    } else {
      return <BsCalculator />;
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 480 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <ProyectsContainer id="projects">
        <ProyectsTitle>
          <h2>Proyects</h2>
          <p>Here are a few projects I've worked on recently. Click on them to go!</p>
        </ProyectsTitle>
        <Proyect popUp={popUp} closePopUp={setPopUp} />
        <ProyectCarousel responsive={responsive} infinite={true}>
          {projectList.map((project) => (
            // <CarouselSlide
            //   key={project.key}
            //   className={project.number}
            //   onClick={() => controlPopUp(true, project.name, project.link, project.number)}
            // >
            //   {project.name}
            // </CarouselSlide>
            <CarouselSlide key={project.key}>
              <SlideTitle>{project.name}</SlideTitle>
              <SlideBody onClick={() => { openSite(project.link)}}>
                <SlideImage id="image">
                  <SliderBlur id="blur"></SliderBlur>
                  {imageLoader(project.image)}
                </SlideImage>
                <SlideContain id="contain">
                  <h3>{project.name}</h3>
                  <p>
                    {project.text}
                  </p>
                </SlideContain>
              </SlideBody>
            </CarouselSlide>
          ))}
        </ProyectCarousel>
      </ProyectsContainer>
    </>
  );
};

export default ProyectsSection;

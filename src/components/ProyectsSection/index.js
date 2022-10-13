import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import projectList from "../aux_project/ProjectList";
import Proyect from "./Proyect";
import {
  ProyectsContainer,
  ProyectsH2,
  ProyectCarousel,
  CarouselSlide,
} from "./ProyectsElements";

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
        <ProyectsH2>Proyects</ProyectsH2>
        <Proyect popUp={popUp} closePopUp={setPopUp}/>
        <ProyectCarousel responsive={responsive} infinite={true}>
          {projectList.map((project) => (
            <CarouselSlide
              key={project.key}
              image={"../../images/projectweather.png"}
              className={project.number}
              onClick={() => controlPopUp(true, project.name, project.link, project.number)}
            >
              {project.name}
            </CarouselSlide>
          ))}
        </ProyectCarousel>
      </ProyectsContainer>
    </>
  );
};

export default ProyectsSection;

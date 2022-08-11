import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Proyect from "./Proyect";
import projectList from "../aux_project/ProjectList";
import { ProyectsContainer, ProyectsH2, ReviewSlider } from "./ProyectsElements";

const ProyectsSection = () => {
  const [popUp, setPopUp] = useState({
    toggle: false,
    title: "",
    image: "",
  });

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {breakpoint: 768,
      settings:{
        slidesToShow: 2
      }
      },
      {breakpoint: 480,
        settings:{
          slidesToShow: 1
        }
        }
    ]
  };

  const controlPopUp = (toggle, title, image) => {
    setPopUp((prevState) => ({
      ...prevState,
      toggle: toggle,
      title: title,
      image: image,
    }));
  };

  return (
    <>
      <ProyectsContainer id='projects'>
        <ProyectsH2>Proyects</ProyectsH2>
        <ReviewSlider {...settings}>
          {projectList.map((project) => (
            <div
              className={`slide ${project.number}`}
              key={project.key}
              onClick={() => controlPopUp(true, project.name, project.image)}
            >
              {project.name}
            </div>
          ))}
        </ReviewSlider>
        <Proyect popUp={popUp} closePopUp={controlPopUp} />
      </ProyectsContainer>
    </>
  );
};

export default ProyectsSection;

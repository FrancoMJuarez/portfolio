import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectList from "./aux_project/ProjectList";

function Proyects() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="proyects">
      <h2>Proyects</h2>
      <Slider {...settings}>
        {projectList.map((project) => (
          <div className={`slide ${project.number}`} key={project.key}>
            {project.name}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Proyects;

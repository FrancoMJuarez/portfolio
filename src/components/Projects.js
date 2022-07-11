import React, { useState } from "react";
import Project from "./aux_project/Project";
import projectList from "./aux_project/ProjectList";
import ProjectPreview from "./aux_project/ProjectPreview";

function Projects() {
  const [active, setActive] = useState({
    name: "none",
    number: "",
    description: "",
    link: "",
  });

  const previewHandler = (projectName, projectNumber, projectLink) => {
    setActive((prevState) => ({
      ...prevState,
      name: projectName,
      number: projectNumber,
      link: projectLink,
    }));
    console.log(active); //Chequear porque es tardio
  };

  return (
    <div className="projects">
      <div className="projects-group">
        <div className="projects-group-title">Projects group</div>
        <div className="projects-group-container">
          {projectList.map((project) => (
            <div
              key={project.key}
              onClick={() =>
                previewHandler(project.name, project.number, project.link)
              }
            >
              <Project name={project.name} number={project.number} />
            </div>
          ))}
        </div>
      </div>
      <div className="projects-preview">
        <div className="projects-preview-title">Projects preview</div>
        <div className={`projects-preview-project ${active.number}`}>
          <ProjectPreview name={active.name} link={active.link} />
        </div>
      </div>
    </div>
  );
}

export default Projects;

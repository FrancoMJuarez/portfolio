import React from "react";

function Project({ name, number }) {
  return <div className={`project ${number}`}>
    <div className="project-overlay">{name}</div>
    </div>;
}

export default Project;

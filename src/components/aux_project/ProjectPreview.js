import React from "react";

function ProjectPreview({ name, link }) {
  return (
    <div className="projects-preview-project-container">
      <div>ProjectPreview, {name}</div>
      <div>Description</div>
      <div>
        <button onClick={() => window.open(link)}>Open</button>
      </div>
    </div>
  );
}

export default ProjectPreview;

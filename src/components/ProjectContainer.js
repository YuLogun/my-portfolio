import React from "react";

import "../styles/ProjectContainer.scss";

const ProjectContainer = ({ imageUrl, description, projectLink, imgAlt }) => {
  return (
    <div className="projects_container__item">
      <div className="projects_container__pic__container">
        <a target="_blank" href={projectLink} rel="noopener noreferrer">
          <img
            src={imageUrl}
            className="projects_container__item__avatar"
            alt={imgAlt}
          />
        </a>
      </div>
      <div className="projects_container__item__text">{description}</div>
    </div>
  );
};

export default ProjectContainer;

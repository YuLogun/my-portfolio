import React from "react";
import "./assets/Projects.scss";
import projectAvatar from "./assets/projectsAvatar.png";
import commercePic from "./assets/eCommerce.png";
import quoteMachinePic from "./assets/quoteMachine.png";
import ProjectContainer from "./ProjectContainer";

export const Projects = () => (
  <div className="projects">
    <h1 className="projects_title">Here are some of my latest projects...</h1>
    <img
      src={projectAvatar}
      className="projects_avatar"
      alt="projects avatar"
    />
    <div className="projects_container">
      <ProjectContainer
        imageUrl={commercePic}
        projectLink="https://geek-online-clothing.herokuapp.com/"
        imgAlt="e-commerce project preview"
        description="This is an e-commerce project. I've always been a big fan of geek
            culture, so making something like this with React was a great deal of
            fun."
      />
      <ProjectContainer
        imageUrl={quoteMachinePic}
        projectLink="https://gaiman-and-pratchett-answer.herokuapp.com/"
        imgAlt="quote machine project preview"
        description="This is a quote machine (or, if you wish, a magic ball project)
          project. Ask my 2 favourite authors what they think."
      />
    </div>
  </div>
);

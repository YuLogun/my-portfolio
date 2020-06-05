import React from "react";
import "../styles/About.scss";
import avatar from "../assets/avatar.png";

export const About = () => (
  <div className="about">
    <div className="about-container">
      <div className="about_info">
        <img alt="super girl avatar" src={avatar} className="about_info__img" />
        <div className="about_info__text">
          <p>
            Hey and let's be friends! I'm Iuliia, a self taught developer with a
            great passion for building things with modern Frontend tools.
            Currently I'm looking for my next role.
          </p>
          <p>
            I have experience working with JavaScript, React, Redux, but I'm
            always willing to learn new technologies/languages on the job. So
            far I have had experience with freelance work and opensource
            activity. I'm always eager to rise to new challenges and explore new
            horizons.
          </p>
        </div>
      </div>
      <div className="about_stack">
        <div className="about_stack__title">My tech stack</div>
        <div className="about_stack__grid">
          <div className="about_stack__icon">
            <i className="fa fa-hashtag"></i>JavaScript
          </div>
          <div className="about_stack__icon">
            <i className="fa fa-hashtag"></i>React
          </div>
          <div className="about_stack__icon">
            <i className="fa fa-hashtag"></i>Redux
          </div>
          <div className="about_stack__icon">
            <i className="fa fa-hashtag"></i>HTML
          </div>
          <div className="about_stack__icon">
            <i className="fa fa-hashtag"></i>SCC
          </div>
        </div>
      </div>
      <div className="about_footer">
        <div className="about_footer__title">Contacts</div>
        <div className="about_footer__icons">
          <a
            href="https://github.com/YuLogun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github-square" aria-label="github" />
          </a>
          <a
            href="https://twitter.com/YuLogun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter-square" aria-label="twitter" />
          </a>
          <a
            href="http://linkedin.com/in/iuliia-logunova-982939190"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square" aria-label="linkedin" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

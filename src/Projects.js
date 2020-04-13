import React from 'react'
import './assets/Projects.scss'
import projectAvatar from './assets/projectsAvatar.png'
import quotePic from './assets/quoteAppScreen.png'
import commercePic from './assets/eCommerceScreen.png'

export const Projects = () => (
  <div className="projects">
    <h1 className="projects_title">Here are some of my latest projects...</h1>
    <img src={projectAvatar} className="projects_avatar" alt="projects avatar" />
    <div className="projects_container">
      <div className="projects_container__item">
        <div className="projects_container__pic__container">
          <a target="_blank" href="https://terry-and-neil-quote-machine.herokuapp.com/" rel="noopener noreferrer">
            <img src={quotePic} className="projects_container__item__avatar" alt="quoye machine project preview" />
          </a>
        </div>
        <div className="projects_container__item__text">
          This is a quote machine - magic ball project. Ask my 2 favourite authors what they think.
        </div>
      </div>
      <div className="projects_container__item">
        <div className="projects_container__pic__container">
          <a href="##">
            <img src={commercePic} className="projects_container__item__avatar" alt="e-commerce project preview" />
          </a>
        </div>
        <div className="projects_container__item__text">
          This is an e-commerce project. I've always been a big fan of geek culture, so making something like this with React was a great deal of fun.
        </div>
      </div>
    </div>
  </div>
)

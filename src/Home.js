import React from 'react'
import img from './assets/img.png'
import './assets/Home.scss'

export const Home = () => (
  <div className="home">
    <h1 className="home_hi">Hi!</h1>
    <h1>I'm Iuliia, a Frontend Developer </h1>
    <h5>...and a JavaScript Padawan</h5>
    <img src={img} alt="super girl" className="image-container_img" />
  </div>
)
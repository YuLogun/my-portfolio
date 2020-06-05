import React from "react";
import img from "../assets/img.png";
import "../styles/Home.scss";

export const Home = () => (
  <div className="home">
    <h1>
      <span className="home_hi first">Hi!</span>
      <br />
      <span className="home_span second">I'm Iuliia, </span>
      <span className="home_span third">a Frontend Developer </span>
    </h1>
    <span className="home_span fourth">...and a JavaScript Padawan</span>
    <br />
    <img src={img} alt="super girl" className="image-container_img" />
  </div>
);

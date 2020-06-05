import React from "react";
import NotFound404 from "../assets/404.svg";
import { Link } from "react-router-dom";

import "../styles/404.scss";

const NotFound = () => (
  <div className="container-404">
    <div className="title-404">
      Sorry, the page you're looking for doesn't exist
    </div>
    <Link className="link-404" to="/">
      GO HOME
    </Link>
    <img src={NotFound404} alt="404" className="image-404" />
  </div>
);

export default NotFound;

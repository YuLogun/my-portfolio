import React from 'react'
import { NavLink } from 'react-router-dom'
import './assets/Header.scss'

export const Header = () => (
  <div className="header">
     <NavLink to="/" className="header_link" exact activeClassName="header_link__active">Home</NavLink>
     <NavLink to="/about" className="header_link" exact activeClassName="header_link__active">About</NavLink>
     <NavLink to="/projects" className="header_link" exact activeClassName="header_link__active">Projects</NavLink>
  </div> 
)
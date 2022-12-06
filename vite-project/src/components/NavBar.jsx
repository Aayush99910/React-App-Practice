import React from 'react';
import logo from '../assets/react.svg'

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={logo} alt='React Img'></img>
        <p>React Facts</p>
      </div>
      <div className="project-number">
        <p>React Course- Project 1</p>
      </div>
    </nav>
  )
}
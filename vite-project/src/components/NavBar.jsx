import React from 'react';
import logo from '../assets/react.svg'

export default function NavBar() {
  return (
    <nav className="nav">
      <img src={logo} alt='React Img'></img>
      <p>React Facts</p>
      <p>React Course- Project 1</p>
    </nav>
  )
}
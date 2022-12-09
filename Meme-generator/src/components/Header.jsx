import React from "react";
import memeFaceImg from "/src/assets/images/Troll Face.png";

export default function Header() {
  return(
    <header>
      <div className="heading-logo">
        <img src={memeFaceImg}/>
        <h2>Meme Generator</h2>
      </div>
      <div className="project-number">
        <p>React Course - Project 3</p>
      </div>
    </header>
  )
}
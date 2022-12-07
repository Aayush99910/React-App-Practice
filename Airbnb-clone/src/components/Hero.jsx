import React from "react";
import Photo from "../assets/images/photo-grid.png";


export default function PhotoGrid() {
  return (
    <div className="photo-title-container">
      <div className="photo-container">
        <img src={Photo} />
      </div>
      <div className="title-container">
        <h1 className="title">Online Experiences</h1>
        <p className="description">
          Join unique interactive activities led by 
          one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </div>
  )
}
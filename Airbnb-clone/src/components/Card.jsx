import React from "react";
import ProfilePicture from "../assets/katie-zaferes.png";
import starLogo from "../assets/star.png";

export default function Card() {
  return(
    <div className="card">
      <div className="profile-picture-container">
        <img src={ProfilePicture}/>
        <p className="availability">Sold out</p>
      </div>
      <div className="profile-description">
        <p className="rating">
          <img src={starLogo} />
          5.0 <span className="dot">&nbsp;(6)&#183;USA</span>
        </p>
        <p className="type">Life lessons with Katie Zaferes</p>
        <p className="price"><span className="starting-price">From $136 </span>/ person</p>
      </div>
    </div>
  )
}
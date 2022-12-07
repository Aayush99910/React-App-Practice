import React from "react";
import starLogo from "../assets/images/star.png"

export default function Card(props) {
  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "Sold Out"
  } else if (props.data.location === "Online") {
    badgeText = "Online"
  }
  return(
    <div className="card">
      <div className="profile-picture-container">
        <img src={`/src/assets/images/${props.data.coverImg}`}/>
        {badgeText && <p className="availability">{badgeText}</p>}
      </div>
      <div className="profile-description">
        <p className="rating">
          <img src={starLogo}/>
          {props.data.stats.rating}<span className="dot">&nbsp;({props.data.stats.reviewCount})•{props.data.location}</span>
        </p>
        <p className="type">{props.data.title}</p>
        <p className="price"><span className="starting-price">From ${props.data.price}</span>/ person</p>
      </div>
    </div>
  )
}
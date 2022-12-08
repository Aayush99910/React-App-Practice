import React from "react";

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={`/src/assets/images/${props.country.imageUrl}`}></img>
      </div>
      <div className="details-container">
        <p className="location">
          <i class="fa-solid fa-location-dot"></i> {props.country.location}
          <a href={props.country.googleMapsUrl} target="_blank">View on Google Maps</a>
        </p>
        <p className="title">{props.country.title}</p>
        <p className="date">
          {props.country.startDate} - {props.country.endDate}
        </p>
        <p className="description">
          {props.country.description}
        </p>
      </div>
    </div>
  )
}
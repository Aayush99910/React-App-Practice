import React from "react";
import Profilepicture from '../assets/Me1.jpg';

export default function Info() {
  return (
    <div>
      <div className="profile-picture"></div>
      <p className="username">Aayush Maharjan</p>
      <small className="occupation">Full Stack Web developer</small>
      <small className="website">Maharjanaayush.com</small>
      <div className="email-linkedin-buttons-container">
        <button id="email-btn"><i class="fa-solid fa-envelope"></i> &nbsp;Email</button>
        <button id="linked-in-btn"><i class="fa-brands fa-linkedin"></i> &nbsp;LinkedIn</button>
      </div>
    </div>
  )
}
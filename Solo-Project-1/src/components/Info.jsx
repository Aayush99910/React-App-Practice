import React from "react"; // importing react

// exporting info component
export default function Info() {
  return (
    <div className="photo-name-container">
      <div className="profile-picture"></div>
      <p className="username">Aayush Maharjan</p>
      <small className="occupation">Student</small>
      <small className="website">Maharjanaayush.com</small>
      <div className="email-linkedin-buttons-container">
        <button id="email-btn"><i class="fa-solid fa-envelope"></i> &nbsp;Email</button>
        <button id="linked-in-btn"><i class="fa-brands fa-linkedin"></i> &nbsp;LinkedIn</button>
      </div>
    </div>
  )
}
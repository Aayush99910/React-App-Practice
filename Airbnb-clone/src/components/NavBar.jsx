import React from "react";
import AirbnbLogo from "../assets/images/airbnb-logo.png"

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={AirbnbLogo} />
    </nav>
  )
}
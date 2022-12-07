import React from "react";
import AirbnbLogo from "../assets/airbnb-logo.png"

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={AirbnbLogo} />
    </nav>
  )
}
import React from "react";
import NavBar from "./components/NavBar";
import PhotoGrid from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <NavBar />
      <PhotoGrid />
      <Card />
    </div>
  )
}
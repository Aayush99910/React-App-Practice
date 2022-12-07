import React from "react";
import NavBar from "./components/NavBar";
import PhotoGrid from "./components/Hero";
import Card from "./components/Card";
import datas from "./data";

export default function App() {
  const cards = datas.map(
    data => {
      return (
        <Card 
          key={data.id}
          data={data}
        />
      )
  })

  return (
    <div>
      <NavBar />
      <PhotoGrid />
      <section className="cards-container">
        {cards}
      </section>
    </div>
  )
}
import React from "react";
import Card from "./Card";
import myData from "../data/data";

export default function MainBody() {
  const myDataArray = myData.map(country => {
    return (
      <Card 
        key={country.id}
        country={country}
      />
    )
  });

  return (
    <main>
      {myDataArray}
    </main>
  )
}
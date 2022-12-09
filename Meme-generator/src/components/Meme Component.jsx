import React from "react";

export default function MemeComponent() {
  return (
    <form>
      <div className="input-container">
        <input type="text" placeholder="Shut up"></input>
        <input type="text" placeholder="And take my money"></input>
      </div>
      <div className="button-container">
        <button type="button">Get a new meme image</button>
      </div>
    </form>
  )
}
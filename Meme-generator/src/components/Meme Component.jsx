import React from "react";
import memeData from "../data/memeData";

export default function MemeComponent() {
  const [imageUrl, setImageUrl] = React.useState("https://i.imgflip.com/25w3.jpg");


  function getMemeImg() {
    const memeArray = memeData.data.memes; 
    let randomNumber = Math.floor(Math.random() * memeArray.length);
    let {url} = memeArray[randomNumber];
    setImageUrl(url);
  }


  return (
    <main>
      <form>
        <div className="input-container">
          <input type="text" placeholder="Top Text"></input>
          <input type="text" placeholder="Bottom Text"></input>
        </div>
        <div className="button-container">
          <button type="button" onClick={getMemeImg}>Get a new meme image 🖼</button>
        </div>
      </form>
      <div className="meme-image-container">
        <img src={imageUrl}></img>
      </div>
    </main>
  )
}
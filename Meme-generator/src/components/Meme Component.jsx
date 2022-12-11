import React, { useState, useEffect }from "react";

export default function MemeComponent() {
  const [meme, setMeme] = useState(
    {
      topText: "",
      bottomText: "",
      imgUrl: "https://i.imgflip.com/25w3.jpg"
    }
  )

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    async function fetchMemes() {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      setAllMemes(data.data.memes)
    }

    fetchMemes();
  }, [])


  function getMemeImg() {
    let randomNumber = Math.floor(Math.random() * allMemes.length);
    let {url} = allMemes[randomNumber];
    setMeme(prevData => {
      return {
        ...prevData,
        imgUrl: url
      }
    })
  }

  
  function handleClick(e) {
    const { name, value } = e.target;
    setMeme(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
  }


  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input 
            autoComplete="off"
            type="text" 
            placeholder="Top Text"
            value={meme.topText}
            name="topText"
            onChange={handleClick}
          />
          <input 
            autoComplete="off"
            type="text" 
            placeholder="Bottom Text" 
            value={meme.bottomText}
            name="bottomText"
            onChange={handleClick}
          />
        </div>
        <div className="button-container">
          <button type="submit" onClick={getMemeImg}>Get a new meme image 🖼</button>
        </div>
      </form>
      <div className="meme-image-container">
        <p className="meme-text top">{meme.topText}</p>
        <img src={meme.imgUrl}></img>
        <p className="meme-text bottom">{meme.bottomText}</p>
      </div>
    </main>
  )
}
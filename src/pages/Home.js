import React, { useState }  from 'react';
import "./Home.css";

function Home() {
  const [isButtonFocused, setIsButtonFocused] = useState(false);
  const [dankText, setDankText] = useState("WoW")
  const texts = ["WoW", "Y u still here ?", "kek", "🍌"]

  const tryMe = (
    <div className="Idiom">
      <div className="arrow-up"></div>
      <p style={{marginTop: "0px"}}>Press there!</p>
    </div>
  )
  const dankIdiom = (
    <div className="Idiom">
      <p>{dankText}</p>
    </div>
  )

  const onMouseEvent = (isFocused) => {
    if (isFocused) {
      var index = Math.floor((Math.random() * texts.length))
      setDankText(texts[index])
    }
    setIsButtonFocused(isFocused)
  }

  return(
    <div className="Home">
      <div className="Title">
        <h1 className="Title-name">DankBoard Bot</h1>
        <p className="Title-description">Such sounds, very board</p>
        <img className="Title-hero" src={`${process.env.PUBLIC_URL}/assets/bonk_doge-large.png`} alt="Doge meme"/>

        <a href="https://discord.com/oauth2/authorize?client_id=752158811438972968&scope=bot">
          <button id="inviteButton"
            onMouseEnter={() => onMouseEvent(true)}
            onMouseLeave={() => onMouseEvent(false)}>
            Add To Server
          </button>
        </a>

        {isButtonFocused ? dankIdiom : tryMe}
      </div>
    </div>
  );
}

export default Home;
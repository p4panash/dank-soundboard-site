import React from 'react';
import "./Home.css";

class Home extends React.Component {
  render() {
    return(
      <div className="Home">
        <div className="Title">
          <h1 className="Title-name">DankBoard Bot</h1>
          <img className="Title-hero" src="./bonk_doge-large.png"/>
          <p className="Title-description">Such sounds, very board</p>

          <a href="https://discord.com/oauth2/authorize?client_id=752158811438972968&scope=bot">
            <button>Add To Server</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
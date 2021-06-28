import React from 'react';

import './Commands.css'
import Command from '../components/Command';

class Commands extends React.Component {
  render() {
    return(
      <div className="Commands">
        <h1 className="Title-name">Commands</h1>
        <Command source="./claps.wav" audio_type="audio/wav">Clap command</Command>
      </div>
    );
  }
}

export default Commands;
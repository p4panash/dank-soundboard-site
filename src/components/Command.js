import React from 'react';
import "./Command.css";
import "../FlexGrid.css";

class Command extends React.Component {

  render() {
    return (
      <div className="Command">
        <div className="Row" style={{"margin": "0px 25px"}}>
          <p>{this.props.children}</p>
        </div>
        <div className="Row">
          <audio className="Audio-player Padding"controls>
            <source src={this.props.source} type={this.props.audio_type}/>
            Your browser does not support audio 😭
          </audio>
        </div>
      </div>  
    );
  }
}

export default Command;
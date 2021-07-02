import React from 'react';
import "./Command.css";
import "../FlexGrid.css";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Command extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    var moreInfo = (
      <div className="More-info">
        <p>Usage:</p>
        <div className="Row Code">
          <p>{this.props.children}</p>
        </div>
        <p>Try it out:</p>
        <div className="Row">
          <audio className="Audio-player"controls>
            <source src={this.props.source} type={this.props.audioType}/>
            Your browser does not support audio 😭
          </audio>
        </div>
        <div onClick={this.handleClick} className="Row Close-info"> 
          <FontAwesomeIcon icon={faAngleUp} style={{color: "white"}}/>
          <p>Close</p>
        </div>
      </div>
    )

    var seeDetails = (
      <div onClick={this.handleClick} className="Open-info">
        <p>More details</p>
        <FontAwesomeIcon icon={faAngleDown} style={{color: "white", marginLeft: "10px", marginTop: "3px"}}/>
      </div>
    )

    return (
      <div className="Command" >
        <div className="Row Preview" style={{margin: "0px 25px", justifyContent: "space-between"}}>
          <h3 style={{color: "white", marginTop: "15px"}}>{this.props.title}</h3>
          {!this.state.isOpen ? seeDetails : null}
        </div>
        {this.state.isOpen ? moreInfo : null}
      </div>
    );
  }
}

Command.defaultProps = {
  title: "Command Title",
  children: "sound command",
  source: "default.wav",
  audioType: "audio/wav"
}

export default Command;
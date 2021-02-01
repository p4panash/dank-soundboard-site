import React from 'react';
import "./DankImages.css";

class BounceImage extends React.Component{
  render() {
    setTimeout(() => {
      var el = document.getElementById('BI' + this.props.index)
      if (el != null) {
        el.remove();
      }
    }, (parseInt(this.props.duration) * this.props.iteration * 1000) - 50);

    return (
      <img id={'BI' + this.props.index} className="Bouncing-images" src={this.props.source} alt="bouncing" style={{animationDuration: this.props.duration, animationIterationCount: this.props.iteration, animationName: this.props.animationName}}/>
    );
  }
}

BounceImage.defaultProps = {
  duration: "4s",
  iteration: 2,
  animationName: "bounce"
}

export default BounceImage;
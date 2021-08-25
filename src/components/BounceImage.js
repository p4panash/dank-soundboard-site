import React, { useState, useEffect } from 'react';
import "./DankImages.css";

function BounceImage({duration, iteration, animationName, marginLeftValue, index, source, firstChild}) {
  const [display, setDisplay] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  // use to check the component is mounted
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  setTimeout(() => {
    if (!isMounted) return
    setDisplay(false) 
  }, (parseInt(duration) * iteration * 1000) - 50);

  return ( display ? 
    <img id={'BI' + index} className="Bouncing-images" src={source} alt="bouncing"
      style={{animationDuration: duration, animationIterationCount: iteration, animationName: animationName,
      marginLeft: (firstChild ? marginLeftValue : 15) + "px"}}/>
    :
    null
  );
}

BounceImage.defaultProps = {
  duration: "4s",
  iteration: 2,
  animationName: "bounce",
  marginLeftValue: 0
}

export default BounceImage;
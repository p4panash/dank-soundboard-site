import './DankImages.css';
import BounceImage from './BounceImage.js';

function DankImages() {
  const width = window.innerWidth;
  const img_size = (width / 10) + 30;
  const amount = ~~(width / img_size);
  const size = amount * img_size;
  var element = [];

  // TODO: add more dank icons and choose a random one for each component
  for (var i = 0; i < amount; i++) {
    let time = Math.floor(Math.random() * 4) + 2;
    let iterations = 12 / time;
    element.push(<BounceImage source="/image.png" index={i+1} duration={time + "s"} iteration={iterations} 
      animationName={time == 4 ? "bounce" : "bounce, spin"}/>)
  }

  return(
    <div className="Bounce-container" style={{marginLeft: width - size + "px", width: size + "px"}}>
      {element}
    </div>
  );
}

export default DankImages;
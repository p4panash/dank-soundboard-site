import './DankImages.css';
import BounceImage from './BounceImage.js';
import { useCurrentWidth } from '../Helper';
import { useEffect, useState } from 'react';

function DankImages() {
  let width = useCurrentWidth();
  const [elements, setElements] = useState(null);
  const [start, setStart] = useState(0);
  const memes = ["chad", "doge", "dorito", "face", "frog", "hitmark", "pepe", "pikachu", "spoderman", "spongebob", "weed"]

  useEffect(() => {
    setElements(null);
    if (width > 600) {
      let img_size = 70; // width + margins
      let amount = ~~(width / (img_size)) - 1;
      let margin_left = ((width - (amount * img_size)) / 2) + 20;
      let elem_arr = [];

      // TODO: add more dank icons and choose a random one for each component
      for (var i = 1 * start; i < start + amount; i++) {
        let time = Math.floor(Math.random() * 4) + 2;
        let iterations = 12 / time;
        let ri = Math.floor((Math.random() * memes.length))
        elem_arr.push(<BounceImage source={`${process.env.PUBLIC_URL}/assets/${memes[ri]}.png`} key={i} index={i} duration={time + "s"} iteration={iterations} 
          marginLeftValue={margin_left} animationName={time === 4 ? "bounce" : "bounce, spin"} firstChild={i === 1 * start}/>)
      }
      setElements(elem_arr);
      setStart(start + amount)
    } 
  }, [width])

  return(
    <div className="Bounce-container" >
      {elements}
    </div>
  );
}

export default DankImages;
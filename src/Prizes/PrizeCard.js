import './Prizes.css'
import './Prize.scss'
import { useSpring, a } from '@react-spring/web'
import React, { useState } from 'react'
import DeathShield1 from '../Assets/DeathShield1.png'
import DeathShield2 from '../Assets/DeathShield2.jpg'
import DeathShield3 from '../Assets/DeathShield3.jpg'
import DeathShield4 from '../Assets/DeathShield4.jpg'
import DeathShield5 from '../Assets/DeathShield5.jpg'

function PrizeCard(props) {
    const[bgimg, changeimg] = useState("");
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  console.log(props.bgimg);
  return (
        <div className="cardcontainer" onClick={() => set(state => !state)}>
        <a.div
          className={"c back"+props.bgimg}
          style={{ opacity: opacity.to(o => 1 - o), transform }}
        />
        <a.div
          className={"c front"+props.bgimg}
          style={{
            opacity,
            transform,
            rotateX: '180deg',
          }}
        />
      </div>
  );
}

export default PrizeCard;
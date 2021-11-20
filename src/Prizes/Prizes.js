import React, { useState } from 'react';
import { useSpring, a } from '@react-spring/web'
import './Prizes.css'
import './Prize.scss'
import PrizeCard from './PrizeCard';
import TrophyImg from '../Assets/DeathStar.png'
import DeathShield1 from '../Assets/DeathShield1.png'
import DeathShield2 from '../Assets/DeathShield2.jpg'
import DeathShield3 from '../Assets/DeathShield3.jpg'
import DeathShield4 from '../Assets/DeathShield4.jpg'
import DeathShield5 from '../Assets/DeathShield5.jpg'

function Prizes() {
  return (
    <div className="container DeathStar-container">
      <div className="row">
        <div className="col col-lg DeathStar-cap">
          May the force be with you.
        </div>
        <div className="col col-lg DeathStar-col">
          <img src={TrophyImg} alt="DeathStar" className="DeathStar" />
        </div>
        <div className="col col-lg prize-col">
          <ul className="card-ul">
            <li className="pic1 card-li">
              <PrizeCard bgimg="1" />
            </li>
            <li className="pic2 card-li">
              <PrizeCard bgimg="2" />
            </li>
            <li className="pic3 card-li">
              <PrizeCard bgimg="3" />
            </li>
            <li className="pic4 card-li">
              <PrizeCard bgimg="4" />
            </li>
            <li className="pic5 card-li">
              <PrizeCard bgimg="5" />
            </li>
          </ul>
        </div>
        <div className="col col-lg DeathStar-cap2">
          May the force be with you.
        </div>
      </div>
    </div>
  );
}

export default Prizes;

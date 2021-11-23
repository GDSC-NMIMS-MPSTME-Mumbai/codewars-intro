import React from 'react';
import './Prizes.css'
import './Prize.scss'
import PrizeCard from './PrizeCard';
import TrophyImg from '../Assets/DeathStar.png'

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

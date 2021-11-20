import React, { Component } from 'react';
import './Panelists.scss';

class Panelists extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-md PanelHeading">
            <span className="txt" >A thousand generations live in you now. But this is your fight.</span>
            <span className="gradient"></span>
            <span className="dodge"></span>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src="http://samuel-garcia.site/img/the-force.png" alt="STAR-WARS-THE-FORCE" />
            </div>
            <div className="content">
              <h2>STAR WARS<br /><span>the force awakens</span></h2>
            </div>
          </div>

          <div className="box">
            <div className="imgBx">
              <img src="http://samuel-garcia.site/img/last-jedi.png" alt="STAR-WARS-THE-FORCE" />
            </div>
            <div className="content">
              <h2>STAR WARS<br /><span>the force awakens</span></h2>
            </div>
          </div>

          <div className="box">
            <div className="imgBx">
              <img src="http://samuel-garcia.site/img/the-rise.png" alt="STAR-WARS-THE-FORCE" />
            </div>
            <div className="content">
              <h2>STAR WARS<br /><span>the force awakens</span></h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Panelists;

import React, { Component } from 'react';
import './Panelists.scss';
import SukhadAnand from '../Assets/SukhadAnand.jpg'
import ManpreetKaur from '../Assets/ManpreetKaur.jpg'
import AniketKalgutkar from '../Assets/AniketKalgutkar.jpg'
import GopalAgarwal from  '../Assets/GopalAgarwal.jpg'

class Panelists extends Component {
  render() {
    return (
      <div className="container PanelistContainer">
        <div className="row justify-content-md-center">
          <div className="col col-lg PanelHeading">
            In a dark place we find ourselves and a little more knowledge lights our way
            <span className="gradient"></span>
            <span className="dodge"></span>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col col-lg-4 col-md-4 col-sm-6">
            <div className="box">
              <div className="imgBx">
                <img src={SukhadAnand} alt="STAR-WARS-THE-FORCE" />
              </div>
              <div className="content">
                <h2>SUKHAD ANAND<br /><span>SDE 2 AT AMAZON</span></h2>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-6">
            <div className="box">
              <div className="imgBx">
                <img src={ManpreetKaur} alt="STAR-WARS-THE-FORCE" />
              </div>
              <div className="content">
                <h2>MANPREET KAUR<br /><span>SDE1 AT AMAZON</span></h2>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-6">
            <div className="box">
              <div className="imgBx">
                <img src={AniketKalgutkar} alt="STAR-WARS-THE-FORCE" />
              </div>
              <div className="content">
                <h2>ANIKET KALGUTKAR<br /><span>SOFTWARE ENGINEER</span></h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-4 col-md-4 col-sm-6">
            <div className="box">
              <div className="imgBx">
                <img src={GopalAgarwal} alt="STAR-WARS-THE-FORCE" />
              </div>
              <div className="content">
                <h2>GOPAL AGARWAL<br /><span>SDE 1 AT ORACLE</span></h2>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-6">
            <div className="box">
              <div className="imgBx">
                <img src="http://samuel-garcia.site/img/last-jedi.png" alt="STAR-WARS-THE-FORCE" />
              </div>
              <div className="content">
                <h2>DIVYANSHU AGGARWAL<br /><span>SDE AT MICROSOFT</span></h2>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-6">
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
      </div>
    );
  }
}

export default Panelists;

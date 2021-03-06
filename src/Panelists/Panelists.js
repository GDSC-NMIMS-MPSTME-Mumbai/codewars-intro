import React, { Component } from 'react';
import './Panelists.scss';
import SukhadAnand from '../Assets/SukhadAnand.jpg'
import ManpreetKaur from '../Assets/ManpreetKaur.jpg'
import AniketKalgutkar from '../Assets/AniketKalgutkar.jpg'
import GopalAgarwal from '../Assets/GopalAgarwal.jpg'
import DivanshuAggarwal from '../Assets/DivanshuAggarwal.jpg'

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
                <h2>SUKHAD ANAND<br /><span>SDE-2, Amazon</span></h2>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-6">
            <div className="box">
              <div className="imgBx">
                <img src={ManpreetKaur} alt="STAR-WARS-THE-FORCE" />
              </div>
              <div className="content">
                <h2>MANPREET KAUR<br /><span>SDE-1, Amazon</span></h2>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-6">
            <div className="box">
              <div className="imgBx">
                <img src={AniketKalgutkar} alt="STAR-WARS-THE-FORCE" />
              </div>
              <div className="content">
                <h2>ANIKET KALGUTKAR<br /><span>SDE, Google</span></h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col col-lg-4 col-md-4 col-sm-6">
            <div className="box">
              <div className="imgBx">
                <img src={GopalAgarwal} alt="STAR-WARS-THE-FORCE" />
              </div>
              <div className="content">
                <h2>GOPAL AGRAWAL<br /><span>SDE-1, Oracle</span></h2>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-6">
            <div className="box">
              <div className="imgBx">
                <img src={DivanshuAggarwal} alt="STAR-WARS-THE-FORCE" />
              </div>
              <div className="content">
                <h2>DIVANSHU AGGARWAL<br /><span>SDE, Microsoft</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Panelists;

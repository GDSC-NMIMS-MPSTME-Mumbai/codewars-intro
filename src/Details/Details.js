import React, { Component } from 'react';
import './Details.css'
class Details extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-lg crawl-col">
            <section className="star-wars">
              <div className="fade"></div>
              <div className="crawl">
                <div className="title">
                  <p>GDSC MPSTME Mumbai presents</p>
                  <h1>CODE WARS</h1>
                </div>
                <p>A long long time ago in a galaxy far, far away, there was a Republic, facing a period of uncertainty. It was a time when there was a vacuum of power at the top. A time when unpredictability and despair ruled supreme around the universe. Turmoil engulfed the entire Republic.</p>
                <p>With many claims to the thrones of the Order, nothing was certain except for one thing. War was coming.</p>
              </div>
            </section>
          </div>
          <div className="col col-lg detailcard-col">
            <div className="card-container">
              <div className="card-box">
                <span></span>
                <div className="card-content">
                  <h2>Knock-out tournament</h2>
                  <p>Join us as we host a 6-day long knock-out tournament of Competitive Programming, where each class sends a team. Compete against teams from your year and fight your way to the top!</p>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div className="card-content">
                  <h2>Game Development Workshop</h2>
                  <p>Join us as we host a Game Development Workshop by Mr. Ram Iyer, a former student of MPSTME, SDE at Iris Automation and a former SDE Intern at EA Sports.</p>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div className="card-content">
                  <h2>Interview Bytes</h2>
                  <p>Join us as we conduct a Panel Discussion with some of the best experts in the industry from Google, Amazon, Microsoft, Oracle, Apple and more to tell you about interview strategies and their journeys into those companies.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;

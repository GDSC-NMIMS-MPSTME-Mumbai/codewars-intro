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
                  <p>GDSC MPSTME</p>
                  <h1>CODE WARS</h1>
                </div>

                <p>Choose a partner to have your back on this conquest. They must be from your class only. Give your teams’ name to your Class Representative/Student Representative. They shall keep track and let us know who is the final team representing. If there is more than one team vying to represent a class, we shall organize a short Competitive Programming competition for them on Hackerrank on 3rd-4th December. The winner of that competition is cleared to join the knockout tournament and register.</p>

                <p>Get your thinking caps on. As this is a one-of-a-kind competition, we shall use a custom-designed Competitive Programming platform named CodeWars, made with by our Web Development team. To enter this platform, you will require special credentials. Hence, on successful registration, you will receive an email from us, containing the username and password for the platform. Use that to log in and begin your experience with us. To maintain a degree of fairness, we shall divide all teams into 4 pools, according to the year they are in. Our OC members as well as technical support team shall stand ready to help you solve any technical issue you might face (not your CP problem, just technical problems :-P). You shall go head-to-head against your opponent's team to solve a CP problem. Work with your teammate and make sure you solve the problem first. The winner qualifies and is cleared to go ahead to the next round. You will compete against teams from only your pool, until the finals. You will have to join our Discord server, where you will be assigned a team-specific Voice Channel and Text Channel that only you and your teammate, as well as GDSC Administrators will have access to. Feel free to use that during official matches as well as any other time. During your match, you will be requested to join the Voice Channel for any verbal communication. Admins will have access to all VCs and may join your VC as an invigilator at their discretion. </p>

                <p>The top 2 teams from each year-grade are invited to join us for the Grand Finals to be hosted offline, on December 11th (Saturday) in college. If you are in Mumbai or surrounding areas, you shall be requested to come to college for the competition. Further logistical compliance like Vaccination certificates, Social Distancing guidelines etc. shall be discussed later with the qualifying participants. The finals will NOT be similar to previous rounds, where there was only one problem to solve in a knock-out format. Finals shall consist of several problems, to be tested over 4 rounds, with the results of each round being added up to a scoreboard. The team with the highest points at the end of the 4th round shall be declared the winner of the competition. More information shall be released during the finals itself. Every person reaching this stage is a winner and takes home an assured gift prize and Certificate of Appreciation.</p>
              </div>
            </section>
          </div>
          <div className="col col-lg detailcard-col">
            <div className="card-container">
              <div className="card-box">
                <span></span>
                <div className="card-content">
                  <h2>Card One</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed eveniet quo repellendus tempore non earum dolore. Nam sed inventore praesentium!</p>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div className="card-content">
                  <h2>Card Two</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed eveniet quo repellendus tempore non earum dolore. Nam sed inventore praesentium!</p>
                  
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div className="card-content">
                  <h2>Card Three</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed eveniet quo repellendus tempore non earum dolore. Nam sed inventore praesentium!</p>
                  
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

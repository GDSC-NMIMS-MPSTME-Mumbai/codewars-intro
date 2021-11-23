import React, { Component } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import { mdiAccountCheckOutline } from "@mdi/js";
import { mdiCheckOutline } from "@mdi/js";
import { mdiGamepadVariant } from "@mdi/js";
import { mdiPageLast } from "@mdi/js";
import { mdiOfficeBuildingOutline } from "@mdi/js";
import { mdiAccountGroup } from "@mdi/js";
import { mdiTrophyAward } from "@mdi/js";
import './Timeline.css'

class Timeline extends Component {
  render() {
    return (
      <div className="container TimelineContainer">
        <div className="row">
          <div className="col-lg">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(238,44,30)", color: "#fff", boxShadow: "0px 0px 38px 1px #c02525"}}
                contentArrowStyle={{ borderRight: "7px solid  rgb(238,44,30)" }}
                date="3rd December"
                iconStyle={{ background: "rgb(238,44,30)", color: "#fff" }}
                icon={
                  <Icon
                    path={mdiAccountCheckOutline}
                    title="account-check-outline"
                    size={1.5}
                    horizontal
                    vertical
                    rotate={90}
                    color="#fff"
                    spin
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">Registrations</h3>
                <h4 className="vertical-timeline-element-subtitle">(Online)</h4>
                <p>
                Registrations open on 24th November, all through 3rd December.
                Get a team-mate for this conquest and get in for the Greatest battle of your lives. To register, navigate to the Registration tab.

                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(255,196,13)", color: "#fff", boxShadow: "0px 0px 38px 1px #707014"}}
                contentArrowStyle={{ borderRight: "7px solid  rgb(255,196,13)" }}
                date="5th/6th December"
                iconStyle={{ background: "rgb(255,196,13)", color: "#fff" }}
                icon={
                  <Icon
                    path={mdiCheckOutline}
                    title="account-check-outline"
                    size={1.5}
                    horizontal
                    vertical
                    rotate={90}
                    color="#fff"
                    spin
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">Intra-class Competition </h3>
                <h4 className="vertical-timeline-element-subtitle">(Online)</h4>
                <p>
                If you have more than one team vying to represent your class, you must first fight them and emerge victorious!
                We shall be organising a common Hackerrank competition for all teams of a single pool. From the same class, the team with the higher rank shall qualify to represent the class!	
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff", boxShadow: "0px 0px 38px 1px #03626c "}}
                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                date="7th December "
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={
                  <Icon
                    path={mdiGamepadVariant}
                    title="account-check-outline"
                    size={1.5}
                    horizontal
                    vertical
                    rotate={90}
                    color="#fff"
                    spin
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">Game Development Workshop</h3>
                <h4 className="vertical-timeline-element-subtitle">(Online)</h4>
                <p>
                Join us as we bring in Mr. Ram Iyer, a former student of MPSTME and a former intern at EA Sports, to tell us more about the world of Game Development, opportunities and skills required for Game Development.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(82,255,121)", color: "#fff", boxShadow: "0px 0px 38px 1px #457b45"}}
                contentArrowStyle={{ borderRight: "7px solid  rgb(82,255,121)" }}
                date="8th/9th December"
                iconStyle={{ background: "rgb(82,255,121)", color: "#fff" }}
                icon={
                  <Icon
                    path={mdiPageLast}
                    title="account-check-outline"
                    size={1.5}
                    horizontal
                    vertical
                    rotate={90}
                    color="#fff"
                    spin
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">Knock-Out Tournament</h3>
                <h4 className="vertical-timeline-element-subtitle">(Online)</h4>
                <p>
                  Log on to our custom-designed CP platform, made with 💗 by our Web Development department. It is a one-stop shop for everything CodeWars! Participate in the actual competition and fight your way within the pool, to the top! It is a knock-out tournament, where you will go head-to-head against another team. Both teams will be presented with a question, following which the team, whose submission is accepted first, wins and moves to the next round.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(238,44,30)", color: "#fff", boxShadow: "0px 0px 38px 1px #c02525"}}
                contentArrowStyle={{ borderRight: "7px solid  rgb(238,44,30)" }}
                date="10th December "
                iconStyle={{ background: "rgb(238,44,30)", color: "#fff" }}
                icon={
                  <Icon
                    path={mdiAccountGroup}
                    title="account-check-outline"
                    size={1.5}
                    horizontal
                    vertical
                    rotate={90}
                    color="#fff"
                    spin
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">Interview Bytes</h3>
                <h4 className="vertical-timeline-element-subtitle">(Online)</h4>
                <p>
                Join us as we conduct a Panel Discussion with some of the best experts in the industry from Google, Amazon, Microsoft, Oracle, Apple and more to tell you about interview strategies and their journeys into those companies.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(355,196,13)", color: "#fff" , boxShadow: "0px 0px 38px 1px #707014"}}
                contentArrowStyle={{ borderRight: "7px solid  rgb(355,196,13)" }}
                date="11th December "
                iconStyle={{ background: "rgb(355,196,13)", color: "#fff" }}
                icon={
                  <Icon
                    path={mdiTrophyAward}
                    title="account-check-outline"
                    size={1.5}
                    horizontal
                    vertical
                    rotate={90}
                    color="#fff"
                    spin
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">Grand Finale</h3>
                <h4 className="vertical-timeline-element-subtitle">(Offline)</h4>
                <p>
                The top 2 teams from each pool will be invited to compete offline in a special Grand Finale, where they become the main contenders to the throne of the Order. The teams will go head-to-head directly over 4 rounds of problem-stages, with only one team emerging as the Supreme!
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline></div> </div></div>
    );
  }
}

export default Timeline;

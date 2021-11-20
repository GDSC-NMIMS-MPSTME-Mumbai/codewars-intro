import React, { Component } from "react";
import IframeResizer from "iframe-resizer-react";
import "./Registration.css";
class Registration extends Component {
  render() {
    return (
      <div className="container registrationContainer">
        <div className="row registrationRow">
          <div className="col col-lg registrationCol2">
            A thousand generations live in you now. But this is your fight.
            <span className="gradient"></span>
            <span className="dodge"></span>
          </div>
          <div className="col-lg registrationCol">
            <IframeResizer
              log
              src="https://docs.google.com/forms/d/e/1FAIpQLSeWuOurNvfhIn3c6i59xzFaevwVjGMMzoOYtdrcoVC7GE0y0g/viewform?embedded=true"
              style={{
                minWidth: "100%",
                height: "100%",
                frameborder: "0",
                marginheight: "0",
                marginwidth: "0",
                border: 'None'
              }}
              scrolling={"yes"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;

import React from "react";
import "./marquee.css";
import { ReactComponent as Arrow } from "./arrow-forward-outline.svg";

function Marquee(props) {
  return (
    <div className="marquee-background"
      style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/backgrounds/${props.background}")` }}
    >
      <div className="marquee-container">
        <div className="main-content">
          <h1 className="headline">{props.headline}</h1>
          <p className="subhead">
            {props.subhead}
          </p>
        </div>

        <div className="cta-container">
          <h3>{props.cta}</h3>
          <button className="cta-btn">
            LET'S TALK.
            <Arrow className="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
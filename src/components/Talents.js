import React, { Component } from "react";
import "../css/talents.css";
export default class Talent extends Component {
  render() {
    return (
      <div class="wrapperbody">
        <div class="wrapper">
          <p className="words-text">I'm into&nbsp;</p>
          <div className="words">
            <span className="wordspan">web development</span>
            <span className="wordspan">backend dev</span>
            <span className="wordspan">blockchain dev</span>
            <span className="wordspan">machine learning</span>
            <span className="wordspan">web development</span>
          </div>
        </div>
      </div>
    );
  }
}

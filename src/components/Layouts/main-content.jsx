import React, { Component } from "react";
import Photo from "../../Assets/Photo.svg"

class MainContent extends Component {
  render() {
    return (
      <div className="contents">
        <div className="svg-wrapper">
          <img
            className="svg-content"
            src={Photo}
            alt="SVG Content"
          ></img>
        </div>
        <div className="paragraph">
          <h2>I'm Augie </h2>
          <br></br>
          <h2>I'm a Full Stack Developer</h2>
        </div>
      </div>
    );
  }
}

export default MainContent;

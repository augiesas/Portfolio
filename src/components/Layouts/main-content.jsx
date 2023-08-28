import React, { Component } from "react";
import Photo from "../../Assets/Photo-Frame.png"

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
          <h3>I'm a fresh graduate of Information Technology</h3>
          <h3>focused on Data Science and Artificial Intelligence</h3>
        </div>
      </div>
    );
  }
}

export default MainContent;

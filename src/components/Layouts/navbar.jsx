import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <div id="aboutMe" className="nav-button">
          <p>
            <a href="/">Home</a>
          </p>
        </div>
        <div id="aboutMe" className="nav-button">
          <p>
            <a href="/aboutMe">About Me</a>
          </p>
        </div>
        <div id="expertise" className="nav-button">
          <p>
            <a href="/expertise">Expertise</a>
          </p>
        </div>
        <div id="projects" className="nav-button">
          <p>
            <a href="/myProjects">My Projects</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import ProjectOne from "../Layouts/project-one.jsx";
import ProjectTwo from "../Layouts/project-two.jsx";

class MainContent extends Component {
  render() {
    const myStyle = {
      maxWidth: "18rem",
    };
    return (
      <div class="card-container">
        <div class="gradient-overlay-top"></div>

        <div id="content-card" class="card-area">
          <div class="row row-cols-2 g-3">
            <ProjectOne />
            <ProjectTwo />
            <ProjectOne />            
            <ProjectOne />            
          </div>
        </div>
        <div class="gradient-overlay"></div>
      </div>
    );
  }
}

export default MainContent;

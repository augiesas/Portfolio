import React, { Component, useRef } from "react";
import Navbar from "../Layouts/navbar.jsx";
import MainContent from "../Layouts/main-content.jsx";
import SvgComponents from "../Backgrounds/svg-component.jsx";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <header>
          <Navbar />
        </header>
        <SvgComponents />

        <section className="main-section">
          <div className="content-area">
            <MainContent />
          </div>
        </section>
      </div>
    );
  }
}

export default Main;

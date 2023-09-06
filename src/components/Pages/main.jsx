import React, { Component, useRef } from "react";
import NavbarLayout from "../Layouts/navbar.jsx";
import MainContent from "../Layouts/main-content.jsx";
import SvgComponents from "../Backgrounds/svg-component.jsx";
import PageButtonsPhone from "../Backgrounds/svg-component-phone.jsx";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <header>
          <NavbarLayout />
        </header>
        <SvgComponents />
        <div class="svg-wrapper-phone">
          <PageButtonsPhone />
        </div>

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

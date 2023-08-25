import React, { Component, useRef } from "react";
import Navbar from "../Layouts/navbar.jsx";
import Content from "../Layouts/expertise-content.jsx";
import Back from "../Layouts/back-btn.jsx";
import SvgComponents from "../Backgrounds/svg-component-variation.jsx";
import $ from "jquery";

class Main extends Component {
  jQueryCode = () => {
    $("#my-svg").each(function () {
      $(this).find("#expertise").css({ fill: "#A37A00" });
      $(this).find("#expertiseText").css({ fill: "white" });
    });
  };

  componentDidMount() {
    this.jQueryCode();
  }

  render() {
    return (
      <div className="main-container">
        <header>
          <Navbar />
        </header>
        <SvgComponents />

        <section className="main-section">
          <div class="child-main">
            <div className="content-area">
              <Content />
            </div>
            <Back />
          </div>
        </section>
      </div>
    );
  }
}

export default Main;

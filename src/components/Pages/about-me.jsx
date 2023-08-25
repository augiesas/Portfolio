import React, { Component, useEffect } from "react";
import Navbar from "../Layouts/navbar.jsx";
import Content from "../Layouts/aboutMe-content.jsx";
import Back from "../Layouts/back-btn.jsx";
import $ from "jquery";
import SvgWithClickableElement from "../Backgrounds/svg-component-variation.jsx";

class AboutMe extends Component {
  jQueryCode = () => {
    $("#my-svg").each(function () {
      $(this).find("#aboutme").css({ fill: "#A37A00" });
      $(this).find("#aboutmeText").css({ fill: "white" });
    });
  };

  componentDidMount() {
    this.jQueryCode();
  }
  render() {
    return (
      <div className="main-container">
        <Navbar />
        <SvgWithClickableElement />

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

export default AboutMe;

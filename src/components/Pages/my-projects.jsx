import React, { Component, useRef } from "react";
import NavbarLayout from "../Layouts/navbar.jsx";
import Content from "../Layouts/myProjects-content.jsx";
import Back from "../Layouts/back-btn.jsx";
import PageButtonsPhone from "../Backgrounds/svg-component-variation-phone.jsx";
import $ from "jquery";
import SvgWithClickableElement from "../Backgrounds/svg-component-variation.jsx";

class Main extends Component {
  jQueryCode = () => {
    $("#my-svg").each(function () {
      $(this).find("#projects").css({ fill: "#A37A00" });
      $(this).find("#projectsText").css({ fill: "white" });
    });
  };

  componentDidMount() {
    this.jQueryCode();
  }
  render() {
    return (
      <div className="main-container">
        <header>
          <NavbarLayout />
        </header>
        <SvgWithClickableElement />
        <div class="svg-wrapper-phone">
          <PageButtonsPhone />
        </div>
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

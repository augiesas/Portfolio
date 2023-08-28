import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { Component } from "react";
import ApotekU from "./carousel-project-two";
import ImgTop from "../../Assets/Python-logo-notext 1.svg";

function ProjectOne() {
  const [modalShow, setModalShow] = React.useState(false);
  const myStyle = {
    maxWidth: "18rem",
  };
  return (
    <>
      <div class="col">
        <div class="card mb-3" style={myStyle}>
          <div class="card-header bg-transparent">
            <img src={ImgTop} class="card-img-top"></img>
          </div>
          <div class="card-body">
            <h5 class="card-title">Hybrid CNN-SVM Model</h5>
            <p class="card-text">
              This is a machine learning model to recognize fruit species by
              combining CNN architecture and SVM model
            </p>
          </div>
          <div class="card-footer bg-transparent">
            <a
              href="https://github.com/augiesas/FastAPI_TA.git"
              target="_blank"
            >
              Find in GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectOne;

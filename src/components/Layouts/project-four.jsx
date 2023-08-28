import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { Component } from "react";
import ApotekU from "./carousel-project-two";
import ClientMain from "../../Assets/apoteku/main.png";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <ApotekU />
      </Modal.Header>
      <Modal.Body>
        <h4>Fruit Recognition App</h4>
        <p>
          This is a mobile app made using Kotlin programming language. This
          application is used to implement a hybrid CNN-SVM fruit recognition
          model on the client side.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

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
            <img
              src={ClientMain}
              class="card-img-top"
              id="openCarouselImage"
            ></img>
            <div class="middle" onClick={() => setModalShow(true)}>
              <div class="text">Click Me</div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Fruit Recognition App</h5>
            <p class="card-text">
              This is a mobile app made using Kotlin programming language. This
              application is use <span id="dots">... </span>
              <a href="#" id="readMore" onClick={() => setModalShow(true)}>
                Read More
              </a>
            </p>
          </div>
          <div class="card-footer bg-transparent">
            <a
              href="https://github.com/augiesas/ApotikU_Project_WFP.git"
              target="_blank"
            >
              Find in GitHub
            </a>
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ProjectOne;

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { Component } from "react";
import ApotekU from "../Layouts/carousel-project-two";
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
        <h4>ApotekU</h4>
        <p>
          This is an e-commerce website to buy and sell medicines. On the client
          side, users can order medicines. On the administrator side, the admin
          can add, modify, and delete medicines.
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
            <h5 class="card-title">ApotekU</h5>
            <p class="card-text">
              This is an e-commerce website to buy and sell medicines. On the
              client side, users can order med<span id="dots">... </span>
              <a href="#" id="readMore" onClick={() => setModalShow(true)}>
                Read More
              </a>
            </p>
          </div>
          <div class="card-footer bg-transparent">
            <a href="https://github.com/augiesas/ApotikU_Project_WFP.git" target="_blank">Find in GitHub</a>
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

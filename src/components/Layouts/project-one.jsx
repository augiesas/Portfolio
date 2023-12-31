import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { Component } from "react";
import Hibob from "../Layouts/carousel-project-one";
import ClientMain from "../../Assets/hibob/main.png";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Hibob />
      </Modal.Header>
      <Modal.Body>
        <h4>HiBob</h4>
        <p>
          This is a website that is used to monitor a collection of IoT devices
          capable of capturing room-temperature data.
          <br />
          Using this website, administrators can add, modify, and delete IoT
          devices and room plans. On the client side, the client can monitor
          every room temperature using IoT devices that are displayed in the
          website.
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
            <h5 class="card-title">HiBob</h5>
            <p class="card-text">
              This is a website that is used to monitor a collection of IoT
              devices capable of capturing room-tem<span id="dots">... </span>
              <a href="#" id="readMore" onClick={() => setModalShow(true)}>
                Read More
              </a>
            </p>
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

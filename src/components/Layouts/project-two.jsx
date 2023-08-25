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
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
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
        <div class="card border-success mb-3" style={myStyle}>
          <div class="card-header bg-transparent border-success">
            <img
              src={ClientMain}
              class="card-img-top"
              id="openCarouselImage"
            ></img>
            <div class="middle" onClick={() => setModalShow(true)}>
              <div class="text">Click Me</div>
            </div>
          </div>
          <div class="card-body text-success">
            <h5 class="card-title">ApotekU</h5>
            <p class="card-text">
              a website that is used to monitor a collection of IoT devices
              capable of capturing room-temperature data
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

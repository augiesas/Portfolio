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
        <h4>Centered Modal</h4>
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
              onClick={() => setModalShow(true)}
            ></img>
          </div>
          <div class="card-body text-success">
            <h5 class="card-title">HiBob</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div class="card-footer bg-transparent border-success">
            <a href="">Find in GitHub</a>
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

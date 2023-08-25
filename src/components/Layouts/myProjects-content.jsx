import React, { Component } from "react";

class MainContent extends Component {
  render() {
    const myStyle = {
      maxWidth: "18rem",
    };
    return (
      <div class="card-container">
        <div class="gradient-overlay-top"></div>
        <div id="content-card" class="card-area">
          <div class="row row-cols-2 g-3">
            <div class="col">
              <div class="card border-success mb-3" style={myStyle}>
                <div class="card-header bg-transparent border-success">
                  <img
                    src="https://picsum.photos/200/300"
                    class="card-img-top carousel-image"
                    id="openCarouselImage"
                  ></img>
                </div>
                <div class="card-body text-success">
                  <h5 class="card-title">Success card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer bg-transparent border-success">
                  <a href="">Find in GitHub</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-success mb-3" style={myStyle}>
                <div class="card-header bg-transparent border-success">
                  <img
                    src="https://picsum.photos/200/300"
                    class="card-img-top"
                    id="openCarouselImage"
                    data-bs-toggle="modal"
                    data-bs-target="#imageCarouselModal"
                  ></img>
                </div>
                <div class="card-body text-success">
                  <h5 class="card-title">Success card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer bg-transparent border-success">
                  <a href="">Find in GitHub</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-success mb-3" style={myStyle}>
                <div class="card-header bg-transparent border-success">
                  <img
                    src="https://picsum.photos/200/300"
                    class="card-img-top"
                    id="openCarouselImage"
                    data-bs-toggle="modal"
                    data-bs-target="#imageCarouselModal"
                  ></img>
                </div>
                <div class="card-body text-success">
                  <h5 class="card-title">Success card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer bg-transparent border-success">
                  <a href="">Find in GitHub</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-success mb-3" style={myStyle}>
                <div class="card-header bg-transparent border-success">
                  <img
                    src="https://picsum.photos/200/300"
                    class="card-img-top"
                    id="openCarouselImage"
                    data-bs-toggle="modal"
                    data-bs-target="#imageCarouselModal"
                  ></img>
                </div>
                <div class="card-body text-success">
                  <h5 class="card-title">Success card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-footer bg-transparent border-success">
                  <a href="">Find in GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="gradient-overlay"></div>

        {/* MODAL */}
        <div
          class="modal fade"
          id="imageCarouselModal"
          tabindex="-1"
          aria-labelledby="imageCarouselModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
              <div
                id="imageCarousel"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://picsum.photos/200/300"
                      class="d-block w-100"
                      alt="Image 1"
                    ></img>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Caption 1</h5>
                      <p>This is the caption for Image 1.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://picsum.photos/200/300"
                      class="d-block w-100"
                      alt="Image 2"
                    ></img>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Caption 2</h5>
                      <p>This is the caption for Image 2.</p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#imageCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#imageCarousel"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;

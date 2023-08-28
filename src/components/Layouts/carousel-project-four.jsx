import Carousel from "react-bootstrap/Carousel";
import MainImg from "../../Assets/fruit_recognition_app/main.jpg";
import DetailImg from "../../Assets/fruit_recognition_app/detail.jpg";
import HistoryImg from "../../Assets/fruit_recognition_app/history.jpg";

function Hibob() {
  const myStyle = {
    maxWidth: "33%",
    maxHeight: "450px",
  };
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className="img-item">
          <img src={MainImg} style={myStyle} alt="Image 1"></img>
        </div>
        <Carousel.Caption className="carousel-caption">
          <h3>Main Page</h3>
          <p>Client side main page</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-item">
          <img src={DetailImg} style={myStyle} alt="Image 1"></img>
        </div>
        <Carousel.Caption>
          <h3>Detail Page</h3>
          <p>Client side, list of products</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-item">
          <img src={HistoryImg} style={myStyle} alt="Image 1"></img>
        </div>
        <Carousel.Caption>
          <h3>History Page</h3>
          <p>Page that show detail of product</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hibob;

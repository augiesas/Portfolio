import Carousel from "react-bootstrap/Carousel";
import ClientMain from "../../Assets/hibob/main.png";
import AdminMain from "../../Assets/hibob/admin-main.png";
import Login from "../../Assets/hibob/login.png";
import AdminAddNew from "../../Assets/hibob/admin-add new device.png";

function Hibob() {
  const myStyle = {
    // maxWidth: "100%",
    maxHeight: "450px",
  };
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img src={Login} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Login Page</h3>
          <p>User must log in first to be able to use the website.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ClientMain} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Client Main Page</h3>
          <p>Main page in client side. Show all IoT device to catch room temperature.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={AdminMain} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Admin Main Page</h3>
          <p>Main page in admin side. Have access to add, delete, and update IoT device.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={AdminAddNew} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Add New Device Page</h3>
          <p>This page is used to add new device into website so that the client can monitor the device from the website</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hibob;

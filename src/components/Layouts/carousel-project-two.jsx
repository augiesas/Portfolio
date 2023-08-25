import Carousel from "react-bootstrap/Carousel";
import MainImg from "../../Assets/apoteku/main.png";
import ItemDetailImg from "../../Assets/apoteku/Item Detail.png";
import CartImg from "../../Assets/apoteku/Cart.png";
import ItemListImg from "../../Assets/apoteku/Product List.png";
import HistoryImg from "../../Assets/apoteku/transaction_history.png";
import TransactionReportImg from "../../Assets/apoteku/admin_all_transaction_report.png";
import CategoryControlImg from "../../Assets/apoteku/admin_category_control.png";
import CustomerReportImg from "../../Assets/apoteku/admin_customer_report.png";
import MedicineControlImg from "../../Assets/apoteku/admin_medicine_control.png";
import SellReportImg from "../../Assets/apoteku/admin_medicine_sold_report.png";
import UsersListImg from "../../Assets/apoteku/admin_user_list.png";
import AdminMainImg from "../../Assets/apoteku/admin_main.png";

function Hibob() {
  const myStyle = {
    // maxWidth: "100%",
    maxHeight: "450px",
  };
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img src={MainImg} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Main Page</h3>
          <p>Client side main page</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ItemListImg} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Products List Page</h3>
          <p>Client side, list of products</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ItemDetailImg} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Detail Product Page</h3>
          <p>Page that show detail of product</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={CartImg} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Cart Page</h3>
          <p>Page that contain list of product that have been added to cart</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={HistoryImg} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Transactions History Page</h3>
          <p>Page that contain list of previous transactions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={AdminMainImg} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Main Admin Page</h3>
          <p>Main page in admin site</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={MedicineControlImg} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Medicine Cotrol Page</h3>
          <p>This page can add new products, and modify as well as delete existing products.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={CategoryControlImg} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Category Control Page</h3>
          <p>This page can add new category, and modify as well as delete existing category.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={SellReportImg} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Sell Report Page</h3>
          <p>This page features the top 5 products on sale</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={CustomerReportImg} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Customer Report Page</h3>
          <p>This page displays the top 3 customers with the most purchase value</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={TransactionReportImg} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>Transaction Report Page</h3>
          <p>This page shows all transaction reports in website</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={UsersListImg} style={myStyle} alt="Image 1"></img>
        <Carousel.Caption>
          <h3>List of Users Page</h3>
          <p>This page shows list of users that have registered on website</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hibob;

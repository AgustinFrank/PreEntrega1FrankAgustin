import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
const CartWidget = () => {
  return (
    <Row>
      <Col xs={6} md={4}>
        <Image src="./assets/images/ONLYFOOT.PNG" rounded />
      </Col>
    </Row>
  );
};

export default CartWidget;

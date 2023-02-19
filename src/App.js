import Card from "./Card/Card.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg={4} md={6} className="my-4">
          <Card />
        </Col>
        <Col lg={4} md={6} className="my-4">
          <Card />
        </Col>
        <Col lg={4} md={6} className="my-4">
          <Card />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

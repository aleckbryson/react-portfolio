import React from "react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import { Container, Row, Col } from 'reactstrap'

function Portfolio() {
  return (
    <div>
      <h1 className="text-center">Portfolio</h1>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col>
            <h1>QC Wateringhole</h1>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;

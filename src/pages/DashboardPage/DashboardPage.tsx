import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GenerationButton from "./components/GenerationButton";

const DashboardPage: React.SFC = () => (
  <Container fluid>
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <h1 style={{ textAlign: "center" }}>The Pokedex App</h1>
      </Col>
      <Col md={{ span: 6, offset: 3 }}>
        <GenerationButton gen={1} />
      </Col>
    </Row>
  </Container>
);

export default DashboardPage;

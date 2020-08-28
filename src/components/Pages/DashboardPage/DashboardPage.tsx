import React from "react";
import Button from "../../Button";
import { Container, Row, Col } from "react-bootstrap";

const DashboardPage: React.SFC = () => (
  <Container fluid>
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <h1 style={{ textAlign: "center" }}>The Pokedex App</h1>
      </Col>
      <Col md={{ span: 6, offset: 3 }}>
        <Container>
          <Row>
            <Col>
              <Button size="lg">Generation I</Button>
            </Col>

            <Col>
              <Button size="lg">Generation II</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button size="lg">Generation III</Button>
            </Col>
            <Col>
              <Button size="lg">Generation IV</Button>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
);

export default DashboardPage;

import React from "react";
import HomeBanner from "../components/HomeBanner";
import LabBlocks from "../components/LabBlocks";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <Container className="main-container">
        <Row>
          <Col className="banner-wrap" lg={12}>
            <HomeBanner></HomeBanner>
          </Col>
          <Col className="lab-blk-sec" lg={12}>
            <LabBlocks></LabBlocks>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;

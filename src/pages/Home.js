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
          <Col
            className="banner-wrap"
            style={{ borderRadius: "15px " }}
            lg={12}
          >
            <HomeBanner></HomeBanner>
          </Col>
          <Col className="lab-blk-sec" lg={12}>
            <LabBlocks></LabBlocks>
          </Col>
          <Col className="scroll-text-sec" lg={12}></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;

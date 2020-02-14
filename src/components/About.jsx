import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mainPhoto from "../../public/images/0.jpeg";
import { Image } from "react-bootstrap";
import AboutTable from "./AboutTable";
("");
function About() {
  return (
    <div className="aboutcontainer">
      <div>
        <h1 className="abouth1"> About Me </h1>
        <Container>
          <Row>
            <Col />
            <Col className="centerBlock">
              <Image
                src={mainPhoto}
                alt="displaypic"
                className="displaypic"
                fluid
              />
            </Col>
            <Col />
          </Row>
          <AboutTable />
        </Container>
      </div>
    </div>
  );
}

export default About;

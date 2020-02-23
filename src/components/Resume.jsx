import React from "react";
import Skills from "./Skills";
import Education from "./Education";
import { Col, Row } from "react-bootstrap";
import Languages from "./Languages";
function Resume() {
  return (
    <div id="resume">
      <div className="container-fluid-1">
        <h1 className="Skills title">My Skills</h1>
        <Skills />
      </div>
      <div className="container-fluid-1">
        <h1 className="Education title Skills">Education</h1>
        <Education />
      </div>
      <div className="container-fluid-2 lf">
        <Row>
          <Col />
          <Col>
            <h1 className="Skills title lfh">
              Languages and Frameworks I know
            </h1>
            <Languages />
          </Col>
          <Col />
        </Row>
      </div>
    </div>
  );
}

export default Resume;

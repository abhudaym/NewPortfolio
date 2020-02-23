import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import School from "../../public/images/School.png";
import Books from "../../public/images/books.png";
import Diploma from "../../public/images/diploma.png";

function Education() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="edu-col text-center">
            <img src={School} alt="school" className="c-logo" />
            <p className="edu-p">
              Completed my class 12th from Amity International School with 93.6%
              in CBSE Boards.
            </p>
          </Col>
          <Col className="edu-col text-center">
            <img src={Books} alt="school" className="c-logo" />
            <p className="edu-p">
              Completed my class 10th from Amity International School with 9.2
              CGPA.
            </p>
          </Col>
          <Col className="edu-col text-center">
            <img src={Diploma} alt="school" className="c-logo" />
            <p className="edu-p">
              Currently Pursuing B.Tech from SRMIST, Chennai.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Education;

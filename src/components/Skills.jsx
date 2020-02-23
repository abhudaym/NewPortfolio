import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import coding from "../../public/images/coding.png";
import conversation from "../../public/images/conversation.png";

function Skills() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="skill-col text-center">
            <img src={coding} alt="coding" className="c-logo" />
            <h3 className="skill-h3">Coding</h3>
            <p className="skill-p">
              Coding is my passion. I have a good command on C++, SQL, CSS,
              HTML, ReactJS, NodeJS, MongoDB, JavaScript and its frameworks.
              Also, I am a quick learner when it comes to learning new
              languages.
            </p>
          </Col>
          <Col className="skill-col text-center">
            <img src={conversation} alt="conversation" className="c-logo" />
            <h3 className="skill-h3">Communication Skills</h3>
            <p className="skill-p">
              I like to keep it simple. No fancy words or words that the
              listener might not understand. I'm also a great listener. I also
              have excellent presentation skills. I'm confident and articulate
              while speaking in public.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;

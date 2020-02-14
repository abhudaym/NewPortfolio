import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";

function AboutTable() {
  return (
    <div>
      <Container>
        <Row>
          <Col />
          <Col xs={5} className="tablecontent">
            <Table responsive striped>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>Abhuday Mishra</td>
                </tr>
                <tr>
                  <td>Date of Birth:</td>
                  <td>7 January 2001</td>
                </tr>
                <tr>
                  <td>College:</td>
                  <td>SRM Institute of Science & Technology</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>abhuday.mishra@hotmail.com</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>+919818946005</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default AboutTable;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Container fluid>
        <div className="center" style={{ fontWeight: 700 }}>
          <h6>Hey! I am</h6>
          <h1>Abhuday Mishra</h1>
          <h3>
            a{" "}
            <span className="desc">
              <em>Web Developer.</em>
            </span>
          </h3>
        </div>
      </Container>
    </div>
  );
}

export default Home;
// <div className="container-fluid">
//   <div className="center" style={{ fontWeight: 700 }}>
//     <h6>Hey! I am</h6>
//     <h1>Abhuday Mishra</h1>
//     <h3>
//       a{" "}
//       <span className="desc">
//         <em>Web Developer.</em>
//       </span>
//     </h3>
//   </div>
// </div>

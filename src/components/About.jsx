import React from "react";
import mainPhoto from "../images/1.jpeg";
function About() {
  return (
    <div className="about-area about-position-top pb--120" id="about">
      <div className="about-wrapper">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="thumbnail">
                <img
                  className="w-100 d-none d-sm-none d-md-block"
                  src={mainPhoto}
                  alt="About Images"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="about-inner inner">
                <div className="section-title">
                  <h1 className="title">About Me</h1>
                  <p className="description">
                    I am a student currently pursuing B.Tech(CSE) from SRMIST
                    Chennai. I completed my +2 with CBSE in 2019. I have some
                    hobbies that deeply interest me like music and sports. I
                    have a knack for learning new things and especially when
                    it's creating something. Also, coffee is my currency ;)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// <div className="aboutcontainer">
//       <div>
//         <h1 className="abouth1"> About Me </h1>
//         <Container>
//           <Row>
//             <Col>
//               {" "}
//               <Image
//                 src={mainPhoto}
//                 alt="displaypic"
//                 className="displaypic"
//                 fluid
//               />
//             </Col>
//             <Col>
//               <AboutTable />
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>

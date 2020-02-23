import React from "react";
import { Carousel } from "react-bootstrap";
import js from "../../public/images/javascript-logo-png-transparent.png";
import reactjs from "../../public/images/reactjs.png";
import html from "../../public/images/html5.png";
import css from "../../public/images/css.png";
import mongodb from "../../public/images/mongodb.png";
import mysql from "../../public/images/mysql.png";
import bootstrap from "../../public/images/bootstrap.png";
import nodejs from "../../public/images/nodejs.png";

function Languages() {
  return (
    <div className="cardiv">
      <Carousel>
        <Carousel.Item>
          <img src={js} alt="js" className="caritem text-center" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={reactjs} alt="react" className="caritem" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={html} alt="html" className="caritem" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={css} alt="html" className="caritem" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={mongodb} alt="html" className="caritem" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={mysql} alt="html" className="caritem" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={bootstrap} alt="html" className="caritem" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={nodejs} alt="html" className="caritem" />
        </Carousel.Item>
      </Carousel>
      <a
        href="https://drive.google.com/open?id=1ebydBqrZENpQSf7sVp0AGBUfjV0ukH7B"
        className="resumeTag"
      >
        Download Complete Resume
      </a>
    </div>
  );
}

export default Languages;
import React from "react";
import { Carousel } from "react-bootstrap";
import js from "../images/javascript-logo-png-transparent.png";
import reactjs from "../images/reactjs.png";
import html from "../images/html5.png";
import css from "../images/css.png";
import mongodb from "../images/mongodb.png";
import mysql from "../images/mysql.png";
import bootstrap from "../images/bootstrap.png";
import nodejs from "../images/nodejs.png";

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
        href="https://drive.google.com/file/d/1ypnrgwQuFd4OOOqkXDRSUgy8C7DsbMEF/view?usp=sharing"
        className="resumeTag"
      >
        Download Complete Resume
      </a>
    </div>
  );
}

export default Languages;

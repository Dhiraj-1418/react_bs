import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../Assets/model.png";
import "./Card.css/";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Card = () => {
  return (
    <div className="container-fluid h-100 w-100 d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col className="">
            <div className="d-flex flex-column justify-content-center h-100">
              <h1>Hi, I am John Deo. </h1>
              <p>
                A freelancer Web Devloper from London. I Convert Custom Web
                Design to bootstrap Template
              </p>
              <p>I make Youtube videos and write Blog</p>
              <div>
                <button className="btn btn-primary">I'M AVIAILABLE</button>
              </div>
              <div className="p-2">
                <FaFacebook />
                <FaTwitter />
                <FaSquareInstagram />
                <FaGithub />
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <img src={img} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Card;

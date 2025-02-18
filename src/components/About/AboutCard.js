import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Isha Mishra </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            I am currently studing in MCA from Chameli Devi Group Of Institutions.
            <br />
            I have completed BSc in Computer Science at DAVV.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Streaming WebSeries and K-dramas.
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In the world of software, the best way to predict the future is to invent it."{" "}
          </p>
          <footer className="blockquote-footer">Isha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

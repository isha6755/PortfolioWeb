import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import seating from "../../Assets/Projects/seatinggenius.jpeg";
import expenseTracker from "../../Assets/Projects/expenseTracker.jpg";
import portfolio from "../../Assets/Projects/portfolio.png";
import QR from "../../Assets/Projects/QR.png";
import digitalclock from "../../Assets/Projects/digitalclock.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seating}
              isBlog={false}
              title="Seating Genius"
              description="Seating Genius is an innovative web-based platform designed to streamline and optimize seating arrangements for various events, institutions, and organizations. Whether it’s for classrooms and  examination halls. Seating Genius provides an intelligent and efficient solution for managing seating plans effortlessly. By leveraging modern web technologies, Seating Genius ensures a seamless experience, reducing manual effort and minimizing errors in seating management."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenseTracker}
              isBlog={false}
              title="Expense Tracker"
              description="An expense tracker website is a digital tool designed to help users manage their finances efficiently. It allows individuals to record their income and expenses, categorize transactions, and generate insightful reports on their spending habits. With features like budget setting, expense analysis, and visual charts, users can gain a clear understanding of their financial health."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio"
              description="My personal portfolio showcases my skills, projects, and expertise as a front-end developer. It highlights my proficiency in HTML, CSS, JavaScript, and frameworks like React.js. The portfolio includes my work, certifications, and contact details, providing a glimpse into my passion for creating interactive and user-friendly web experiences. Designed with a modern and responsive layout, it reflects my dedication to continuous learning and professional growth in the field of web development. "
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ QR}
              isBlog={false}
              title="QR Code Generator"
              description="This website is powered by HTML, CSS, JavaScript and is a platform that allows users to easily generate QR codes by inputting desired information like a website URL, phone number, or text, which can then be scanned by a smartphone camera to access that data quickly"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digitalclock}
              isBlog={false}
              title="Digital Clock"
              description="A digital clock made using HTML, CSS, and JavaScript is a simple yet functional web-based time display. HTML provides the structure, defining a container for the clock. CSS is used for styling, ensuring an attractive and readable display. JavaScript handles the logic, updating the clock in real-time by fetching the current time using the Date object and dynamically updating the displayed hours, minutes, and seconds."
              ghLink="https://github.com/isha6755/Fronted-Projects/tree/master/Digital%20Clock"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

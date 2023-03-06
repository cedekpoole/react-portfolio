import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { Row, Container } from "react-bootstrap";
import './Projects.css'

import Cards from "../project-data.json";

const Projects = () => {
  return (
    <div>
      <div className="background-2"></div>
      <div className="background2-reverse"></div>
      <h1 className="text-dark">Projects</h1>
      <Container>
        <Row>
          {Cards.map(proj => (
            <ProjectCard
              id={proj.id}
              key={proj.id}
              title={proj.title}
              link={proj.link}
              image={proj.image}
              alt={proj.alt}
              text={proj.text}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;

import { Row, Container, Col } from "react-bootstrap";
import "./Projects.css";

// Import project card data stored within json file
import Cards from "../../project-data.json";

// Import project card component
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="bg-color">
      <div className="red-bg-path"></div>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-header mb-4 position-relative mt-3">
              <i className="fa-regular fa-folder-open scaling"></i>
              <br />
              Previous <span className="color-change">Projects</span>.
            </div>
          </Col>
        </Row>
        <Row>
          {/* Map over each of the items in json file and add the data to each project card */}
          {Cards.map((proj) => (
            <ProjectCard
              id={proj.id}
              key={proj.id}
              title={proj.title}
              link={proj.link[0]}
              github={proj.link[1]}
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

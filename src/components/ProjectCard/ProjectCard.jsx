import { Card, Col, Button } from "react-bootstrap";
import "./ProjectCard.css";

// Create project card component that can be used when mapping over the project json data
function ProjectCard(props) {
  return (
    <Col xs={12} md={6} lg={4} className="my-2">
      <Card className="h-100 project-card">
        <div>
          <Card.Img
            variant="top"
            src={props.image}
            alt={props.alt}
            className="img-fluid proj-img"
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="text-small">{props.text}</Card.Text>
            <a href={props.link} target="_blank">
              <Button variant="success">Online</Button>
            </a>
            <a href={props.github} target="_blank">
              <Button className="button-style">
                <i className="fa-brands fa-github icon"></i>
              </Button>
            </a>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
}

export default ProjectCard;

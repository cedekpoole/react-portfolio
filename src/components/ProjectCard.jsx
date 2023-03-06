import { Card, Col } from "react-bootstrap";
import "./ProjectCard.css";
import React from 'react'

function ProjectCard(props) {
  return (
    <Col xs={6} md={4} lg={3} className="my-2">
      <Card className="h-100 project-link">
        <a href={props.link} target="_blank">
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
            </Card.Body>
          </div>
        </a>
      </Card>
    </Col>
  );
};

export default ProjectCard;

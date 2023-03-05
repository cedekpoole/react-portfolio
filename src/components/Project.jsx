import { Card, Button, Col, Row } from 'react-bootstrap'
import './project.css'

const Project = (props) => {
    return (
    <Col s={12} md={6} lg={4} className="mb-2">
        <Card className="h-100 project-link">
            <a 
            href={link}
            target="_blank"
            ><div>
                <Card.Img variant="top"
                 src={image}
                 alt={alt} 
                 className="img-fluid proj-img proj-img-sm"
                 />
                 <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="text-small">{text}</Card.Text>
                 </Card.Body>
            </div></a>
        </Card>
    </Col>
    )
}


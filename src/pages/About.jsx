import './About.css'
import {Container, Row, Col} from 'react-bootstrap'

const About = () => {
    return (
        <div>
            <div className="bg-lightning"></div>
                <Container fluid>
                    <Row>
                        <Col>
                        <h1 className="section-header mt-4 mb-3">
                            <i className="fa-solid fa-address-card"></i><br />About Me
                        </h1>
                        </Col>
                    </Row>
                </Container>

        </div>
    )

}

export default About;
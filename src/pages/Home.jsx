import { Row, Col, Container, Button } from "react-bootstrap"
import './Home.css'
import image from '../images/home.png'

const Home = () => {
    return (
    <div>
        <Container fluid>
            <Row>
                <Col lg className="mt-4">
                    <h1 className="mb-4 ms-lg-2">Welcome to my <span className="color-change">portfolio</span>.</h1>
                    <Row>
                        <Col md>
                        <h5>My name is <span className="color-change">CAMERON EDEK POOLE</span>, an aspiring full-stack developer:)</h5>
                        </Col>
                        <Col md>
                    <Button className="mb-4 cv">Download CV</Button>
                        </Col>
                    </Row>
                </Col>
                <Col lg className="position-relative">
                    <div className="img-background"></div>
                    <img src={image} alt="Me, wearing a hat and a coat" className="portfolio-image"/>
                   
                </Col>
            </Row>
        </Container>
    </div>
    )

}

export default Home;
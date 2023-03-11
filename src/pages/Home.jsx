import { Row, Col, Container, Button } from "react-bootstrap"
import './Home.css'
import image from '../images/home.png'

const Home = () => {
    return (
    <div>
        <Container fluid>
            <Row>
                <Col xl className="mt-4">
                    <h1 className="mb-4 ms-lg-2 display-1">Welcome to my <span className="color-change">portfolio</span>.</h1>
                    <Row>
                        <Col xs={12} lg={8}>
                        <h4 className="mb-3 lh-base">My name is <span className="color-change">CAMERON EDEK POOLE</span>, an aspiring full-stack developer:)</h4>
                        </Col>
                        <Col xs={12} lg={4} className="text-xl-center">
                    <Button className="mb-2">Download CV</Button>
                        </Col>
                    </Row>
                </Col>
                <Col xl className="position-relative">
                    <div className="img-background"></div>
                    <img src={image} alt="Me, wearing a hat and a coat" className="portfolio-image"/>
                   
                </Col>
            </Row>
        </Container>
    </div>
    )

}

export default Home;
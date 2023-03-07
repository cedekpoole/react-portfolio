import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row, Col, Container, Button } from "react-bootstrap"
import './Home.css'
import Me from '../images/profile-picture.jpg' 

const Home = () => {
    return (
    <div>
        <div className="background"></div>
        <div className="background-2"></div>
        <Container fluid>
            <Row className="mt-5 position-relative">
                <Col xs={12} md={6} className="mt-4 ms-2">
                    <div className="dark-col">
                        <h1 className="mb-4 ms-2">Welcome to my <span className="color-change">portfolio</span>.</h1>
                        <h4 className="mb-2 ms-4"> My name is <span className="color-change">CAMERON EDEK POOLE</span></h4>
                        <p className="ms-4">An aspiring Full-Stack Developer :)</p>
                    </div>
                    <div className="circle">
                    <div className="circle1"></div>
                    </div>
                    <div className="circle circle-right">
                    <div className="circle1"></div>
                    </div>
                </Col>
                <Col xs={12} md={5} className="ms-1">
                    <img src={Me} alt="Me, driving a boat on a lake" className="portfolio-image"/>
                    <i className="fa-brands fa-git-alt floating"></i>
                </Col>
            </Row>
        </Container>
    </div>
    )

}

export default Home;
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
        <Header />
        <Container className="position-relative">
            <Row className="mt-5">
                <Col xs={12} md={6} className="mt-4">
                    <h1>Welcome to my <span className="color-change">portfolio</span></h1>
                
                {/* <div className="typewriter">
                    Sit back, and relax. An aspiring Full-Stack Dev
                    </div> */}
        
                </Col>
                <Col xs={12} md={6}>
                    {/* <img src={Me} alt="Me, driving a boat on a lake" className="portfolio-image"/> */}
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
    )

}

export default Home;
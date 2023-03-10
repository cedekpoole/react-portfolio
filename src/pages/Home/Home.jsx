import { Row, Col, Container, Button } from "react-bootstrap"
import './Home.css'

// Import image and pdf file 
import image from '../../images/home.png'
import pdf from '../../cv.pdf'

// Create component for Home page
const Home = () => {
    return (
    <div>
        <Container fluid>
            <Row>
                <Col xl className="mt-4">
                    <h1 className="mb-4 ms-lg-2 display-1">Welcome to my <span className="color-change">portfolio</span>.</h1>
                    <Row>
                        <Col xs={12} lg={8}>
                        <h4 className="mb-3 lh-base ms-lg-2">My name is <span className="color-change">CAMERON EDEK POOLE</span>, a front-end web developer:)</h4>
                        </Col>
                        <Col xs={12} lg={4} className="text-xl-center">
                            {/* When user presses 'Download CV' button, download pdf version onto their local machine */}
                    <a href={pdf} download><Button className="mb-2 btn-xl text-white border cv">Download CV</Button></a>
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
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row, Col, Container, Button } from "react-bootstrap"
import './Home.css'
import Me from '../images/profile-picture.jpg' 

const Home = () => {
    return (
    <div className="d-flex flex-column min-vh-100">
        <Header />
        <Container>
            <Row className="mt-5">
                <Col xs={12} md={6}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis aut odio repellat? Repellat consequatur eaque quisquam cum error labore quam excepturi molestias, aperiam quasi deleniti voluptatem nihil recusandae facere animi.</Col>
                <Col xs={12} md={6}>
                    <img src={Me} alt="Me, driving a boat on a lake" className="portfolio-image"/>
                </Col>
            </Row>
        </Container>
        <Footer />
    </div>
    )

}

export default Home;
import "./About.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <div>
      {/* Add additional colors to the background */}
      <div className="bg-lightning"></div>
      <Container fluid>
        <Row>
          <Col>
            <div className="round"></div>
            <h1 className="section-header mt-3 mb-4 position-relative">
              <i className="fa-solid fa-address-card mb-2"></i>
              <br />
              About <span className="color-change">Me</span>.
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={10} lg={3} className="mb-3 ms-5 p-0 me-sm-5 ">
            <Card.Body className="border position-relative card-bg">
              <Card.Text className="p-3">
                {/* Include a brief intro in the About me page */}
                I am a recent Philosophy graduate who has an affinity for
                problem solving. While I very much enjoy analysing continental
                philosophy, my other passion lies within the world of
                programming and web development. <br />
                <br /> I love a challenge, which is the reason why I decided to
                develop my skills in programming. I have almost completed a 16
                week Front-End Development bootcamp (provided by Trilogy
                Education) which has spurred my interest even further.
              </Card.Text>
            </Card.Body>
          </Col>
          <Col xs={12} lg={7} className="position-relative">
            <Card.Body className="border card-bg">
              {/* Add technologies, skills and education section to About page */}
              <h4 className="text-center mb-3 mt-2">Technologies and Skills</h4>
              <ul>
                <li>HTML5, CSS3 and Javascript (ES5 & 6) fundamentals</li>
                <li>
                  UX Design; experience with CSS frameworks (e.g. Bootstrap v5)
                </li>
                <li>Version control via Git and Github</li>
                <li>
                  Experience with JS libraries (e.g. React.js and jQuery)
                </li>
                <li>
                  Ability to retrieve server data via RESTful-compliant AJAX requests
                </li>
                <li>
                  Knowledge of object-oriented programming foundations and
                  functional programming paradigms
                </li>
                <li>
                  Node.js and node package manager (npm)
                </li>
                <li>Brief experience with testing (TDD and BDD)</li>
                <li>Deployment using Netlify</li>
              </ul>
              <h4 className="text-center mb-3">Education</h4>
              <ul>
                <li>
                  16 Week front-end development bootcamp provided by EdX
                  (Trilogy Education)
                </li>
                <li>
                  First Class Honours in Philosophy (Newcastle University)
                </li>
              </ul>
            </Card.Body>
            {/* Add icons that lie across the bottom of the page */}
            <div className="d-flex justify-content-evenly mt-4 icon-box">
              <i className="fa-brands fa-html5 text-white icons"></i>
              <i className="fa-brands fa-css3-alt text-white icons"></i>
              <i className="fa-brands fa-square-js text-white icons"></i>
              <i className="fa-brands fa-square-git text-white icons"></i>
              <i className="fa-brands fa-bootstrap text-white icons"></i>
              <i className="fa-brands fa-node-js text-white icons"></i>
              <i className="fa-brands fa-react text-white icons"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

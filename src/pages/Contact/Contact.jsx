import "./Contact.css";
// import bootstrap components from react-bootstrap
import {
  Container,
  Col,
  Row,
  Form,
  FloatingLabel,
  FormControl,
  Button,
} from "react-bootstrap";

// import useRef and emailjs for the functional contact form
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // Followed instructions on emailjs website (https://www.emailjs.com/docs/)
  // Allow the user to send an email to my email account
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q068uop",
        "template_usdycvh",
        form.current,
        "XcmaoEwN6jsOPR8Uf"
      )
      .then(
        () => {
          alert("Message has been sent!");
          window.location.reload(false);
        },
        () => {
          alert("Message failed, please try again :)");
        }
      );
  };
  // Return the 'contact me' component
  return (
    <div className="bg-red">
      <div className="bg-shape"></div>
      <Container className="contact-page pt-2 position-relative">
        <Row>
          <Col lg={7} className="mt-lg-5">
            <h1>
              <i className="fa-solid fa-envelope rotating"></i>
              <br />
              Contact Me
            </h1>
            <p>
              I am interested in both full-time and freelance opportunities. If
              you would like to inquire, please feel free to leave a message by
              filling in the form below! Anyone interested in collaborating on
              large projects are also welcome to message :)
            </p>
            <div className="contact-form">
              <Form onSubmit={sendEmail} ref={form}>
                <Row className="g-2 text-dark mb-2">
                  <Col>
                    <FloatingLabel controlId="floatingName" label="Name">
                      <FormControl
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel controlId="floatingEmail" label="Email">
                      <FormControl
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row className="text-dark">
                  <Col xs={12} className="mb-2">
                    <FloatingLabel controlId="floatingSubject" label="Subject">
                      <FormControl
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} className="mb-2">
                    <FloatingLabel controlId="floatingTextarea" label="Message">
                      <Form.Control
                        as="textarea"
                        name="message"
                        placeholder="Message"
                        style={{ height: "100px" }}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12}>
                    <Button
                      className="float-md-end margin-unique"
                      type="submit"
                    >
                      Submit!
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

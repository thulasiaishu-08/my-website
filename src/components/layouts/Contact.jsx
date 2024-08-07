import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Footer from "../Footer";
import Header from "../Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareFacebook, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact(){
    return(
        <>
        <Header/>

        <section className="pagebg">
            <Container>
                <h2>Contact</h2>
            </Container>
        </section>

        <section className="contact">
            <Container>
                <h3>Reach Us</h3>
                <Row>
                    <Col md={6}>
                        <div className="form-contact">
                            <h2>Get in Touch with TechWave Solutions</h2>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="name" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" placeholder="Message" rows={3} />
                                    </Form.Group>
                                    <Button type="submit">Send Message</Button>
                                </Form>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="contact-content">
                            <h2>Contact Info</h2>
                            <h6>Address</h6>
                            <p>123 Innovation Drive
                            Tech City, TC 12345</p>
                            <h6>Email</h6>
                            <p>info@techwavesolutions.com</p>
                            <h6>Phone</h6>
                            <p>+1 (123) 456-7890</p>
                            <h6>Follow Us</h6>
                            <div className="icons">
                                <a href="#"><FontAwesomeIcon className="fb" icon={faSquareFacebook} /></a>
                                <a href="#"><FontAwesomeIcon className="fb" icon={faSquareInstagram} /></a>
                                <a href="#"><FontAwesomeIcon className="fb" icon={faLinkedin} /></a>
                                <a href="#"><FontAwesomeIcon className="fb" icon={faSquareTwitter} /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <div className="map">
            <iframe frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=123+Innovation+Drive+San+Francisco,+CA+94105&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div>

        <Footer/>
        </>
    );
}
export default Contact;
import { Col, Container, Row } from "react-bootstrap";
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
                <h2>Services</h2>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col md={6}>
                        <div>
                            <h3>Get in Touch with TechWave Solutions</h3>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <h3>Contact Info</h3>
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

        <Footer/>
        </>
    );
}
export default Contact;
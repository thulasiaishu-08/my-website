import { Col, Container, Row } from "react-bootstrap";
import Logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareFacebook, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer(){
    return(
        <>
        <section className="footer-bg">
            <Container>
                <Row>
                    <Col md={3} sm={12}>
                        <div className="logo-width">
                            <img src={Logo}/>
                            <p>Empowering businesses with innovative IT solutions, TechWave Solutions drives success through technology and expertise.</p>
                            <div className="icons">
                                <a href="#"><FontAwesomeIcon className="fb" icon={faSquareFacebook} /></a>
                                <a href="#"><FontAwesomeIcon className="fb" icon={faSquareInstagram} /></a>
                                <a href="#"><FontAwesomeIcon className="fb" icon={faLinkedin} /></a>
                                <a href="#"><FontAwesomeIcon className="fb" icon={faSquareTwitter} /></a>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} sm={12}>
                        <div className="links mar">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3} sm={12}>
                        <div className="links">
                            <h3>Important Links</h3>
                            <ul>
                                <li><a href="#">Software Development</a></li>
                                <li><a href="#">Cybersecurity</a></li>
                                <li><a href="#">IT Consulting</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3} sm={12}>
                        <div className="footer-contact">
                            <h3>Reach Us</h3>
                            <ul>
                                <p><FontAwesomeIcon className="map" icon={faLocationDot} /><li>123 Innovation Drive, Tech City.</li></p>
                                <p><FontAwesomeIcon icon={faPhone} /><li>+1 (123) 456-7890</li></p>
                                <p><FontAwesomeIcon icon={faEnvelope} /><li>info@techwavesolutions.com</li></p>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}
export default Footer;
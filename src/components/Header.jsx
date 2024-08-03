import { Container, Col, Row } from "react-bootstrap";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";


function Header(){
    return(
        <>
        <section className="head">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="logo-width">
                            <img src={Logo}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="navbar">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <button className="nav-btn">Explore</button>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}
export default Header;
import { Container, Col, Row, Dropdown } from "react-bootstrap";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";


function Header(){
    return(
        <>
        <section className="head">
            <Container>
                <Row>
                    <Col md={6} className="custom">
                        <div className="logo-width">
                            <img src={Logo}/>
                        </div>
                    </Col>
                    <Col md={6} className="custom">
                        <div className="navbar">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <button className="nav-btn"><Link to="/loginsignup">Login/Signup</Link></button>
                            </ul>
                        </div>

                        <div className="mob-nav">
                            <Dropdown>
                                <Dropdown.Toggle>
                                    <FontAwesomeIcon icon={faBars} id="dropdown-basic" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/">Home</Dropdown.Item>
                                    <Dropdown.Item href="/about">About</Dropdown.Item>
                                    <Dropdown.Item href="/services">Services</Dropdown.Item>
                                    <Dropdown.Item href="/contact">Contact</Dropdown.Item>
                                    <Dropdown.Item><button className="nav-btn"><Link to="/loginsignup">Login/Signup</Link></button></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}
export default Header;
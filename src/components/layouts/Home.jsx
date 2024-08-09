import Header from "../Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons';
import { Col, Container, Row } from "react-bootstrap";
import innovation from "../../assets/img/innovation.jpg";
import team1 from "../../assets/img/team1.jpg";
import team2 from "../../assets/img/team2.jpg";
import team3 from "../../assets/img/team3.jpg";
import team4 from "../../assets/img/team4.jpg";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <Header/>
        
        <section className="banner">
            <div className="banner-content">
                <h1>Welcome to TechWave Solutions</h1>
                <p>At TechWave Solutions, we deliver cutting-edge technology solutions to elevate your business operations. From web development to cybersecurity, our expert team is dedicated to driving your success through innovation and excellence.</p>
                <button className="banner-btn"><span><Link to="/contact">Start Exploring</Link></span> <FontAwesomeIcon icon={faRightToBracket} /> </button>
            </div>
        </section>

        <section className="about">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="about-content">
                            <h3>About Us</h3>
                            <h2>Empowering Your Business with Innovative IT Solutions</h2>
                            <p>At TechWave Solutions, we are committed to delivering cutting-edge technology solutions that drive business success. Our team of experienced professionals specializes in custom software development, IT consulting, and cybersecurity. With a focus on innovation and client satisfaction, we empower businesses to thrive in the digital age.</p>
                        </div>
                    </Col>
                    <Col className="space" md={6}>
                        <div className="about-img">
                            <img src={innovation}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="service-section">
            <Container>
                <div className="service">
                    <h3>Our Services</h3>
                    <h2>Comprehensive IT Services to Drive Your Business Forward</h2>
                    <Row>
                        <Col md={4} sm={12}>
                            <div className="service-card">
                                <h3>Custom Software Development</h3>
                                <p>We create bespoke software solutions designed to meet your unique business needs. Our end-to-end development process ensures seamless integration and optimal performance. Transform your ideas into reality with our team.</p>
                                <button><Link to="/services">Read More</Link></button>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="service-card">
                                <h3>Cybersecurity Solutions</h3>
                                <p>Protect your business with our advanced cybersecurity services. We offer comprehensive security assessments, threat detection, and risk management strategies. Safeguard your data and maintain your peace of mind.</p>
                                <button><Link to="/services">Read More</Link></button>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="service-card">
                                <h3>IT Consulting</h3>
                                <p>Leverage our expertise to enhance your IT infrastructure and strategy. Our consultants provide insightful guidance on technology implementation and optimization. Drive efficiency and growth with our tailored IT solutions.</p>
                                <button><Link to="/services">Read More</Link></button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>

        <section className="call-action">
            <div className="call-content">
                <h2>Ready to Elevate Your Business with TechWave Solutions?</h2>
                <p>Transform your operations with our innovative IT services tailored to meet your unique needs. Whether you need custom software development, cybersecurity, or IT consulting, our expert team is here to help you succeed.</p>
                <button><Link to="/contact">Get Started</Link></button>
            </div>
        </section>

        <section className="team">
            <Container>
                <div className="team-content">
                    <h3>Our Team</h3>
                    <h2>Meet the Experts Behind TechWave Solutions</h2>
                </div>
                <div>
                    <Row>
                        <Col md={3}>
                            <div className="team-card">
                                <img src={team1}/>
                                <h3>John Smith</h3>
                                <h4>CEO</h4>
                                <p>John brings over 20 years of experience in the IT industry</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="team-card">
                                <img src={team2}/>
                                <h3>Emily Brown</h3>
                                <h4>Head</h4>
                                <p>John brings over 20 years of experience in the IT industry</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="team-card">
                                <img src={team3}/>
                                <h3>Sarah Lee</h3>
                                <h4>IT Consultant</h4>
                                <p>John brings over 20 years of experience in the IT industry</p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="team-card">
                                <img src={team4}/>
                                <h3>Michael Johnson</h3>
                                <h4>Lead Developer</h4>
                                <p>John brings over 20 years of experience in the IT industry</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>

        <Footer/>
        </>
    );
}
export default Home;
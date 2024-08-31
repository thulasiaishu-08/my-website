import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer";
import Header from "../Header";
import software from "../../assets/img/software.jpg";
import cyber from "../../assets/img/cyber.webp";
import consultant from "../../assets/img/consultant.jpg";
import { Link } from "react-router-dom";

function Services(){
    return(
        <>
        <Header/>
        
        <section className="pagebg">
            <Container>
                <h2>Services</h2>
            </Container>
        </section>

        <section className="service-section new">
            <Container>
                <div className="service">
                    <h3>Our Services</h3>
                    <h2>Comprehensive IT Services to Drive Your Business Forward</h2>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="service-card padding">
                                <img src={software}/>
                                <div className="content">
                                    <h3>Custom Software Development</h3>
                                    <p>We create bespoke software solutions designed to meet your unique business needs. Our end-to-end development process ensures seamless integration and optimal performance. Transform your ideas into reality with our team.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="service-card padding">
                                <img src={cyber}/>
                                <div className="content">
                                    <h3>Cybersecurity Solutions</h3>
                                    <p>Protect your business with our advanced cybersecurity services. We offer comprehensive security assessments, threat detection, and risk management strategies. Safeguard your data and maintain your peace of mind.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="pt-20">
                            <div className="service-card padding">
                                <img src={consultant}/>
                                <div className="content">
                                    <h3>IT Consulting</h3>
                                    <p>Leverage our expertise to enhance your IT infrastructure and strategy. Our consultants provide insightful guidance on technology implementation and optimization. Drive efficiency and growth with our tailored IT solutions.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>

        <section className="call-action gap">
            <div className="call-content">
                <h2>Ready to Elevate Your Business with TechWave Solutions?</h2>
                <p>Transform your operations with our innovative IT services tailored to meet your unique needs. Whether you need custom software development, cybersecurity, or IT consulting, our expert team is here to help you succeed.</p>
                <button><Link to="/contact">Get Started</Link></button>
            </div>
        </section>



        <Footer/>
        </>
    );
}
export default Services;
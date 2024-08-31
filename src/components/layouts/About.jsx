import { Col, Container, Row } from "react-bootstrap";
import about from "../../assets/img/about.webp";
import team1 from "../../assets/img/team1.jpg";
import team2 from "../../assets/img/team2.jpg";
import team3 from "../../assets/img/team3.jpg";
import team4 from "../../assets/img/team4.jpg";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function About(){
    return(
        <>
        <Header/>

        <section className="pagebg">
            <Container>
                <h2>About Us</h2>
            </Container>
        </section>

        <section className="about margin">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="about-content">
                            <h3>Who We Are</h3>
                            <h2>Driving Business Success with Cutting-Edge Technology Solutions</h2>
                            <p>TechWave Solutions is a premier IT service provider dedicated to offering innovative technology solutions to businesses of all sizes. Founded in 2010, our mission is to empower organizations with the tools and expertise they need to excel in an increasingly digital world.</p>
                        </div>
                    </Col>
                    <Col className="space" md={6}>
                        <div className="about-img">
                            <img src={about}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="absec">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="journey">
                            <h3>Our Journey</h3>
                            <p>What began as a small team of passionate IT professionals has grown into a leading technology partner for businesses across various industries. Known for our commitment to quality and customer satisfaction, we have become a trusted name in the IT services sector.</p>
                            <p>Over the years, we have expanded our expertise, embraced new technologies, and continuously evolved to meet the ever-changing demands of the digital landscape.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="values">
                            <h3>Our Values</h3>
                            <p>At TechWave Solutions, our core values guide everything we do. Innovation drives us to embrace the latest technology trends and provide cutting-edge solutions that keep our clients ahead of the curve. </p>
                            <ul>
                                <li>Innovation</li>
                                <li>Integrity</li>
                                <li>Excellence</li>
                                <li>Collaboration</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="team">
            <Container>
                <div className="team-content">
                    <h3>Our Team</h3>
                    <h2>Meet the Experts Behind TechWave Solutions</h2>
                </div>
                <div>
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <div className="team-card">
                                <img src={team1}/>
                                <h3>John Smith</h3>
                                <h4>CEO</h4>
                                <p>John brings over 20 years of experience in the IT industry</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="team-card">
                                <img src={team2}/>
                                <h3>Emily Brown</h3>
                                <h4>Head</h4>
                                <p>John brings over 20 years of experience in the IT industry</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="pt-20">
                            <div className="team-card">
                                <img src={team3}/>
                                <h3>Sarah Lee</h3>
                                <h4>IT Consultant</h4>
                                <p>John brings over 20 years of experience in the IT industry</p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="pt-20">
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
export default About;
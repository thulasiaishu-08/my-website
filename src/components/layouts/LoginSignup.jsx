import { Button, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../../assets/css/loginsignup.css";

function LoginSignup() {

    const [login, setLogin] = useState(true);

    function showLogin(event) {
        event.preventDefault();
        setLogin(true);
    }

    function showSignup(event) {
        event.preventDefault();
        setLogin(false);
    }

    useEffect(() => {
        document.body.classList.add('loginsignup-body');
        return () => {
            document.body.classList.remove('loginsignup-body');
        };
    }, []);

    return (
        <>
            <section className="login">
                <Container>
                    <div className="form-login">
                        <Form>
                            {!login && (
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="name" placeholder="Name" />
                                </Form.Group>
                            )}
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="form-btns">
                                <Button className={`log ${login ? 'button' : 'gray'}`} onClick={showLogin}>Login</Button>
                                <Button className={`${!login ? 'button' : 'gray'}`} onClick={showSignup}>SignUp</Button>
                            </div>
                        </Form>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default LoginSignup;

import { Button, Container, Form } from "react-bootstrap";
import "../../assets/css/loginsignup.css";
import { useEffect, useState } from "react";

function LoginSignup(){

    const[login,setLogin] = useState(true);

    function showLogin(){
        setLogin(true);
    }
    function showSignup(){
        setLogin(false);
    }
        useEffect(() => {
            document.body.classList.add('loginsignup-body');
            return () => {
                document.body.classList.remove('loginsignup-body');
            };
        }, []);
    return(
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
                                <Button  className={`log ${login ? 'button' : 'gray'}`} onClick={showLogin} type="submit">Login</Button>
                                <Button className={`${!login ? 'button' : 'gray'}`} onClick={showSignup} type="submit">SignUp</Button>
                            </div>
                        </Form>
                    </div>
                </Container>
            </section>
        </>
    );
}
export default LoginSignup;
import { Container, Form } from "react-bootstrap";
import Login from "./Login";
import { Link } from "react-router-dom";

function Register(){
    function handleRegister(event){
        event.preventDefault();
        alert("Registered Successfully");
    }
    return(
        <>
            <Container>
                <Form onSubmit={handleRegister}>
                    <input type="text" placeholder="Name" required/>
                    <input type="mail" placeholder="Email" required/>
                    <input type="password" placeholder="Password" required/>
                    <button type="submit">Register</button>
                    <p>Already have an account? <Link to="/Login">Login</Link></p>
                </Form>
            </Container>
        </>
    );
}
export default Register;
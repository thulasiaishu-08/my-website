import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Register from "./Register";

function Login(){
    function handleLogin(event){
        event.preventDefault();
        alert("Loggedin Successfully")
    }
    return(
        <>
        <Container>
            <Form onSubmit={handleLogin}>
                <input type="mail" placeholder="Email" required/>
                <input type="password" placeholder="Password" required/>
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/Register">Register Now</Link></p>
            </Form>
        </Container>
        </>
    );
}
export default Login;
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import NavBar from '../Share/NavBar/NavBar';
import { Link,  useNavigate } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const Login = () => {

    const { signIn }= useContext(AuthContext);

     //login sucessfullyb hole home niye jaoyar jonno
     const navigate = useNavigate();
    

   ////signin
    const handleSignIn = event=>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        //
        signIn(email, password)
         .then(result=>{
             const logined = result.user;
             console.log(logined);
             navigate('/')
         })
         .catch(error=>{
             console.log(error);
         })
    }

    return (
        <div>
        <NavBar/>

        <Container>
              <h4 className='text-center mt-5'>Please Login Your Acoount</h4>

              <Form className='w-25 mx-auto border p-3 rounded-2' onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className='w-100'>
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
            
          </Container>
          <Footer/>
        </div>
    );
};

export default Login;
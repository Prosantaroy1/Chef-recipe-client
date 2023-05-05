import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import NavBar from '../Share/NavBar/NavBar';
import { Link,  useLocation,  useNavigate } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { AiFillGoogleSquare, AiFillGithub } from "react-icons/ai";


const Login = () => {

    const { signIn, GoogleSignIn, GithubLogin }= useContext(AuthContext);

     //login sucessfullyb hole home niye jaoyar jonno
     const navigate = useNavigate();
    //details page niye jaoyar jonno
     const location = useLocation();
     const  from = location.state?.from?.pathname || '/';

   ////signin
    const handleSignIn = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //
        signIn(email, password)
         .then(result=>{
             const logined = result.user;
             console.log(logined);
             navigate(from, {replace: true})
             event.target.reset();
         })
         .catch(error=>{
             console.log(error);
         })
            
    }
    //google signin
    const hadleGoogle = () =>{
        //console.log('google')
        GoogleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error)
        })
    }
    //Github signin
    const handleGithub = ()=>{
        //console.log('Github')
        GithubLogin()
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
        <NavBar/>

        <Container>
             
              <Form className='w-50 mx-auto border p-3 bg-secondary text-light rounded-2 mt-3' onSubmit={handleSignIn}>
               <h5 className='text-center'>Please Login Your Acoount</h5>
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
                <Form.Text className="text-light fw-bold mt-4">
                    Don't Have an Account ? <Link to="/register" className='text-dark fs-6'>Register</Link>
                </Form.Text>
                <hr/>
                <Form.Text className="text-success">
                    <div className='d-flex  gap-2 mt-2 '>
                        <button type="button" class="btn btn-dark w-100" onClick={hadleGoogle}>
                             <AiFillGoogleSquare className='fs-1'/>
                        </button>
                        <button type="button" class="btn btn-danger w-100" onClick={handleGithub}>
                            <AiFillGithub className='fs-1'/>
                        </button>
                    </div>
                </Form.Text>
                <Form.Text>

                </Form.Text>
            </Form>
            
          </Container>
          <Footer/>
        </div>
    );
};

export default Login;
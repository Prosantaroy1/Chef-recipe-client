import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import NavBar from '../Share/NavBar/NavBar';
import Footer from '../Share/Footer/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';


const Register = () => {

   //const [error, setError] = useState([]);
   //
   const { createUser } = useContext(AuthContext);

   const handleCreated = event => {
     event.preventDefault();

     const from = event.target;
     const name = from.name.value;
     const photoURL = from.photoURL.value;
     const email = from.email.value;
     const password = from.password.value;
     console.log(name, email,  password, photoURL)  
     //created user
     createUser(email, password)
      .then(result=>{
         const createdUser = result.user;
         console.log(createdUser);
      })
      .catch(error=>{
         console.log(error);
      })

   }
  


    return (  
        <div>
        <NavBar/>
          <Container>
               <h4 className='text-center'>Please Created Account</h4>
               
              <Form className='w-50 mx-auto border p-3 rounded-2' onSubmit={handleCreated}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Enter photo url" required />
                </Form.Group>

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
                    Don't Have an Account? <Link to="/login">Login</Link>
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

export default Register;
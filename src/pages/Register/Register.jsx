import React, { useContext, useState } from 'react';
import { Button,  Form } from 'react-bootstrap';
import NavBar from '../Share/NavBar/NavBar';
import Footer from '../Share/Footer/Footer';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';



const Register = () => {

   const [error, setError] = useState('');
   //
   const { createUser, updateUserData} = useContext(AuthContext);

   const handleCreated = event => {
     event.preventDefault();
     const from = event.target;
     const name = from.name.value;
     const photo = from.photo.value;
     const email = from.email.value;
     const password = from.password.value;
    // console.log(name, email,  password, photo)  
     //created user
     createUser(email, password)
      .then(result=>{
         const createdUser = result.user;
         console.log(createdUser);
         updateUserData(name, photo)
         from.reset('')
         event.target.reset();
      })
      .catch(error=>{ 
         console.log(error);
      })
      
      if(password.length < 6){
        setError('password must be grater then 6 char')
        return;
      }
      updateUserData(name, photo)
       .then(()=>{
         console.log('user profile update')
       })
       .then(error=>{
         console.log(error)
       })
    }
   

    return (  
        <div>
        <NavBar/>
              <Form className='w-50 mx-auto border bg-secondary mt-4 text-light p-3 rounded-2' onSubmit={handleCreated}>
              <h5 className='text-center'>Please Created Account</h5>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo url" required />
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
                    Register
                </Button>
                <br />
                <Form.Text className="text-light fw-bold">
                    Already Have a Account? <Link to="/login" className='text-dark pe-2 fs-6'>Login</Link>
                </Form.Text>
                <Form.Text className="text-danger fs-5">
                    <p className='text-danger'>{error}</p>
                </Form.Text>
             </Form>
         
          <Footer/>
        </div>
    );
};

export default Register;


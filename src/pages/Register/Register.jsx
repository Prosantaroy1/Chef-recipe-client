import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../Share/NavBar/NavBar';
import Footer from '../Share/Footer/Footer';

const Register = () => {
    return (  
        <div>
        <NavBar/>
          <Container className='mt-5'>
               <h4>Please Created Account</h4>
          </Container>
         <Footer/>
        </div>
    );
};

export default Register;
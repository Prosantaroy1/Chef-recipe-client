import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Container>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-2 mb-4'>
               <Container>
               <Nav.Link href="#pricing" className='fs-3 fw-bold  text-primary'>Bangli-CheF</Nav.Link>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="mx-auto">
                     <Nav.Link className='fs-5 fw-600'>
                         <Link to="/" className='text-decoration-none'>Home</Link>
                     </Nav.Link>
                     <Nav.Link href="#pricing" className='fs-5 fw-600'>
                        <Link to="/about" className='text-decoration-none'>About</Link>
                     </Nav.Link>
                   </Nav>
                   <Nav>
                          
                          <Link to="/login">
                             <Button variant="secondary">Login</Button>{' '}
                          </Link>
                   </Nav>
                 </Navbar.Collapse>
               </Container>
             </Navbar>
        </Container>
    );
};

export default NavBar;
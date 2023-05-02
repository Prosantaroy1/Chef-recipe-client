import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div class="p-2 bg-light  " >
         <Container>
              <Navbar collapseOnSelect expand="lg"  variant="light" >
               <Container>
               <Nav.Link href="#pricing" className='fs-3 fw-bold text-primary'>Bangli-CheF</Nav.Link>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="mx-auto">
                     <Nav.Link className='fs-4 fw-semibold'>
                         <Link to="/" className='text-decoration-none text-dark'>Home</Link>
                     </Nav.Link>
                     <Nav.Link href="#pricing" className='fs-4 fw-semibold'>
                        <Link to="/about" className='text-decoration-none text-dark'>About</Link>
                     </Nav.Link>
                     <Nav.Link href="#pricing" className='fs-4 fw-semibold'>
                        <Link to="/about" className='text-decoration-none text-dark'>Contact</Link>
                     </Nav.Link>
                   </Nav>
                   <Nav className='gap-2'>
                     <Button variant="secondary">Profile</Button>{' '}
                          <Link to="/login">
                             <Button variant="secondary">Login</Button>{' '}
                          </Link>
                   </Nav>
                 </Navbar.Collapse>
               </Container>
             </Navbar>
        </Container>
        </div>
    );
};

export default NavBar;
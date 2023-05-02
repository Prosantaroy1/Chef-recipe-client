import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Container>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mt-2 mb-4'>
               <Container>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                   <Nav className="mx-auto">
                    
                       <Link to="/">Home</Link>
        
                     <Nav.Link href="#pricing">About</Nav.Link>
                     <Nav.Link href="#pricing">Career</Nav.Link>
                   </Nav>
                   <Nav>
                     

                          <Button ariant="secondary">Logout</Button> :
                          <Link>
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
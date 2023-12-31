import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';

const NavBar = () => {
    
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
     .then()
     .catch(error =>{
       console.log(error)
     })
  }
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
                        <Link to='/'  className='text-decoration-none text-dark'>Product</Link>
                     </Nav.Link>
                   </Nav>
                   <Nav className='gap-3'>
                      {user && <div>
                          <img src={user.photoURL} data-bs-toggle="tooltip" data-bs-placement="top" title={user.displayName}
                           className="rounded-circle" style={{width: '50px', height: '50px'}}/>
                        </div>}
    
                        {
                         user ?
                           <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                           <Link to="/login">
                              <Button variant="secondary">Login</Button>{' '}
                           </Link>
                        }
                    
                   </Nav>
                 </Navbar.Collapse>
               </Container>
             </Navbar>
        </Container>
        </div>
    );
};

export default NavBar;
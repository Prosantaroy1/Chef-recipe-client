import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCaretRight, FaFacebookSquare, FaInstagram, FaMinus, FaTwitterSquare} from "react-icons/fa";
import './Footer.css'



const Footer = () => {
    return (
        <div>
        <div className='bg-dark text-light p-5 mt-4'>
              <Container>
                 <Row>
                   <Col sm={12} lg={3} md={6}>
                        <h3>Bangli-CheF</h3>
                        <p>
                            Lorem ipsum dolor sit,<br/> amet consectetur adipisicing elit. 
                            Ipsa, consequatur aspernatur <br/>velit porro mollitia laboriosam?
                        </p>
                        <div className='fs-2 d-flex gap-3 '>
                            <FaFacebookSquare/>
                            <FaTwitterSquare/>
                            <FaInstagram/>
                            
                        </div>
                   </Col>
                   <Col sm={12} lg={3} md={6}>
                        <h3>RECIPES</h3>
                        <ul className='list-unstyled lh-lg'>
                            <li className='list'> <FaCaretRight/> Breakfast</li>
                            <li className='list'> <FaCaretRight/> Desserts</li>
                            <li className='list'> <FaCaretRight/> Diner</li>
                            <li className='list'> <FaCaretRight/> Dairy</li>
                        </ul>
                   </Col>
                   <Col sm={12} lg={3} md={6} className='pe-4'>
                       <h3>Legal</h3>
                        <ul className='list-unstyled lh-lg'>
                            <li className='list'> <FaCaretRight/> Privacy Policy</li>
                            <li className='list'> <FaCaretRight/> Refund Policy</li>
                            <li className='list'> <FaCaretRight/> Cookie Policy</li>
                            <li className='list'> <FaCaretRight/> Terms and Conditions</li>
                        </ul>
                   </Col>
                   <Col sm={12} lg={3} md={6} className='fw-bold'>
                       <h3>OPENING HOURS</h3>
                        <ul className='list-unstyled lh-lg'>
                            <li>Monday <FaMinus/> <span className='mx-3'>5pm-11pm</span></li>
                            <li>Tuesday <FaMinus/>   <span className='ms-5'>5pm-11pm</span></li>
                            <li>Wednessday <FaMinus/>   <span className='ms-4 text-danger'>Closed</span></li>
                            <li>Thursday <FaMinus/>   <span className='ms-3'>5pm-MidNight</span></li>
                            <li>Friday<FaMinus/>    <span className='mx-4'>5pm-MidNight</span></li>
                            <li>Saturday <FaMinus/>   <span className='ms-5'>5pm-11pm</span></li>
                            <li>Sunday <FaMinus/>     <span className='ms-5'>5pm-8pm</span></li>
                        </ul>
                   </Col>
                 </Row>
              </Container>
        </div>
         <div className='bg-danger p-3 text-light'>
            <Container>
              <p>@2023 RedChli All Rights Reserved CopyRight. Desiged By Prosanta Roy ?</p>
            </Container>
        </div>
     </div>
    );
};

export default Footer;
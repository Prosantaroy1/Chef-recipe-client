import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa";
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
                        <div className='gap-5 fs-2 '>
                            <FaFacebookSquare/>
                            <FaTwitterSquare/>
                            <FaInstagram/>
                            <FaYoutube/>
                        </div>
                   </Col>
                   <Col sm={12} lg={3} md={6}>
                        <h3>RECIPES</h3>
                        <ul className='list-unstyled lh-lg'>
                            <li className='list'>Breakfast</li>
                            <li className='list'>Desserts</li>
                            <li className='list'>Diner</li>
                            <li className='list'>Dairy</li>
                        </ul>
                   </Col>
                   <Col sm={12} lg={3} md={6} className='pe-4'>
                       <h3>Legal</h3>
                        <ul className='list-unstyled lh-lg'>
                            <li className='list'>Privacy Policy</li>
                            <li className='list'>Refund Policy</li>
                            <li className='list'>Cookie Policy</li>
                            <li className='list'>Terms and Conditions</li>
                        </ul>
                   </Col>
                   <Col sm={12} lg={3} md={6}>
                       <h3>OPENING HOURS</h3>
                        <ul className='list-unstyled lh-lg'>
                            <li>Monday   <span className='mx-5'>5pm-11pm</span></li>
                            <li>Tuesday  <span className='ms-5'>5pm-11pm</span></li>
                            <li>Wednessday  <span className='ms-5 text-danger'>Closed</span></li>
                            <li>Thursday  <span className='ms-5'>5pm-MidNight</span></li>
                            <li>Friday    <span className='mx-5'>5pm-MidNight</span></li>
                            <li>Saturday  <span className='ms-5'>5pm-11pm</span></li>
                            <li>Sunday    <span className='ms-5'>5pm-8pm</span></li>
                        </ul>
                   </Col>
                 </Row>
              </Container>
        </div>
         <div className='bg-danger p-3 text-light'>
            <Container>
              <h5>@2023 RedChli All Rights Reserved CopyRight. Desiged By Prosanta Roy ?</h5>
            </Container>
        </div>
     </div>
    );
};

export default Footer;
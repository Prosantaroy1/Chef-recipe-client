import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import client1 from '../../../src/assets/Client img/member-1.png'
import client2 from '../../../src/assets/Client img/member-2.png'
import client3 from '../../../src/assets/Client img/member-3.png'
import client4 from '../../../src/assets/Client img/member-4.png'
import client5 from '../../../src/assets/Client img/photo2.png'
import client6 from '../../../src/assets/Client img/photo3.png'

const SocialChef = () => {
    return (
        <Container className='mt-5'>
            <h4 className='text-center text-dark fw-bold fs-2 mb-2'>
              Best Client and Daliy Order Product
            </h4>
         <Marquee>
          
              <Col  lg={3} md={6} className='pe-3'>
                  <Card border="secondary" style={{ width: '13rem' }}>
                     <div className='d-flex mt-2 flex-column justify-content-center align-items-center gap-2'>
                       <img src={client1} className='w-50 rounded-circle'/>
                       <h4 className='fw-bold text-danger'>Borsha Pal</h4>
                       <p className='fw-semibold text-secondary'>Mombai, India</p>
                     </div>
                  </Card>
              </Col>
              <Col  lg={3} md={6} className='pe-3'>
                <Card border="secondary" style={{ width: '13rem' }}>
                     <div className='d-flex mt-2 flex-column justify-content-center align-items-center gap-2'>
                       <img src={client2} className='w-50 rounded-circle'/>
                       <h4 className='fw-bold text-danger'>Apu Chowdry</h4>
                       <p className='fw-semibold text-secondary'>Dhaka , Banglaseh</p>
                     </div>
                  </Card>
              </Col>
              <Col  lg={3} md={6} className='pe-3'>
                <Card border="secondary" style={{ width: '13rem' }}>
                     <div className='d-flex mt-2 flex-column justify-content-center align-items-center gap-2'>
                       <img src={client3} className='w-50 rounded-circle'/>
                       <h4 className='fw-bold text-danger'>Mina Rani</h4>
                       <p className='fw-semibold text-secondary'>Dinajpur, Banglaseh</p>
                     </div>
                  </Card>
              </Col>
              <Col   lg={3} md={6} className='pe-3'>
                 <Card border="secondary" style={{ width: '13rem' }}>
                     <div className='d-flex mt-2 flex-column justify-content-center align-items-center gap-2'>
                       <img src={client4} className='w-50 rounded-circle'/>
                       <h4 className='fw-bold text-danger'>Bipul Gupta</h4>
                       <p className='fw-semibold text-secondary'>Mombai, India</p>
                     </div>
                  </Card>
              </Col>
              <Col   lg={3} md={6} className='pe-3'>
                 <Card border="secondary" style={{ width: '13rem' }}>
                     <div className='d-flex mt-2 flex-column justify-content-center align-items-center gap-2'>
                       <img src={client5} className='w-50 rounded-circle'/>
                       <h4 className='fw-bold text-danger'>Omit Sen</h4>
                       <p className='fw-semibold text-secondary'>Kolkata, India</p>
                     </div>
                  </Card>
              </Col>
              <Col   lg={3} md={6} className='pe-3'>
                 <Card border="secondary" style={{ width: '13rem' }}>
                     <div className='d-flex mt-2 flex-column justify-content-center align-items-center gap-2'>
                       <img src={client6} className='w-50 rounded-circle'/>
                       <h4 className='fw-bold text-danger'>Shamim Hosen</h4>
                       <p className='fw-semibold text-secondary'>Mirpur, Dhaka</p>
                     </div>
                  </Card>
              </Col>
         </Marquee>
        </Container>
    );
};

export default SocialChef;

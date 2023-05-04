import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsFillPersonPlusFill, BsFillCupHotFill, BsFillEnvelopeAtFill, BsFillImageFill } from "react-icons/bs";

const SocialChef = () => {
    return (
        <Container className='mt-5'>
            <h4 className='text-center text-dark fw-bold fs-'>SocialChef in numbers</h4>
           <Row>
              <Col xs={12} lg={3} md={6}>
                 <Card className='d-flex text-light flex-column justify-content-center align-items-center bg-secondary'>
                    <BsFillPersonPlusFill className='fs-1 mt-2'/>
                     <h4 className='mt-3 mb-2'>37</h4>
                     <h5>members</h5>
                 </Card>
              </Col>
              <Col xs={12} lg={3} md={6}>
                 <Card className='d-flex text-light flex-column justify-content-center align-items-center bg-secondary'>
                    <BsFillCupHotFill className='fs-1 mt-2'/>
                     <h4 className='mt-3 mb-2'>20</h4>
                     <h5>recipes</h5>
                 </Card>
              </Col>
              <Col xs={12} lg={3} md={6}>
                 <Card className='d-flex text-light flex-column justify-content-center align-items-center bg-secondary'>
                    <BsFillEnvelopeAtFill className='fs-1 mt-2'/>
                     <h4 className='mt-3 mb-2'>500</h4>
                     <h5>comment</h5>
                 </Card>
              </Col>
              <Col xs={12} lg={3} md={6}>
                 <Card className='d-flex text-light flex-column justify-content-center align-items-center bg-secondary'>
                    <BsFillImageFill className='fs-1 mt-2'/>
                     <h4 className='mt-3 mb-2'>57</h4>
                     <h5>photo</h5>
                 </Card>
              </Col>
           </Row>
        </Container>
    );
};

export default SocialChef;
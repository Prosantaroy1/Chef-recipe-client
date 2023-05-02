import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import images1 from '../../assets/collections img/1.webp'
import images2 from '../../assets/collections img/2.webp'
import images3 from '../../assets/collections img/3.webp'
import images4 from '../../assets/collections img/4 (2).webp'



const RecipeCollections = () => {
    return (
        <Container>
            <h3 className='mt-5 fw-bold mb-4'>Bangladeshi  Recipe Collections :</h3>
            <Row>
              <Col lg={3} xs={12} md={6}>
               <Card>
                 <Card>
                    <img src={images1} className='w-100'/>
                 </Card>
                     <Card.Title className='text-center'>Bangladeshi beef shatkora</Card.Title>
                     <Card.Text className='text-center fw-bold'>
                       By Prosanta Roy
                     </Card.Text>
                  </Card>
              </Col>
              <Col lg={3} xs={12} md={6}>
               <Card>
                 <Card>
                    <img src={images2} className='w-100'/>
                 </Card>
                     <Card.Title className='text-center'>Bangladeshi Paroti </Card.Title>
                     <Card.Text className='text-center fw-bold'>
                       By Shamim Hosan
                     </Card.Text>
                  </Card>
              </Col>
              <Col lg={3} xs={12} md={6}>
                <Card>
                  <Card>
                    <img src={images3} className='w-100'/>
                 </Card>
                     <Card.Title className='text-center'>Bangladeshi alu cop</Card.Title>
                     <Card.Text className='text-center fw-bold'>
                       By Dipika rani
                     </Card.Text>
                  </Card>
              </Col>
              <Col lg={3} xs={12} md={6}>
               <Card>
                 <Card>
                    <img src={images4} className='w-100'/>
                 </Card>
                     <Card.Title className='text-center'>Bangladeshi Sim Vaji</Card.Title>
                     <Card.Text className='text-center fw-bold'>
                       By Sushil Sen
                     </Card.Text>
                  </Card>
              </Col>
           </Row>
        </Container>
    );
};

export default RecipeCollections;

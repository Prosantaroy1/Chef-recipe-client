import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ChefCard = () => {
  ///data stated
    const[servicesData, setServicesData] = useState([]);
    //data fetch load
     useEffect(()=>{
        fetch('http://localhost:5000/chef')
         .then(res => res.json())
         .then(data=> setServicesData(data))
     },[]);
    //console.log(servicesData);
    
    return (
        <Container>
                <h4 className='text-center'>Our Chef Service Details</h4>
                <div className='d-flex gap-4 flex-wrap justify-content-center'>
                   {
                    servicesData[0]?.services?.map((service)=>(
                        <div key={service.id}>
                            <Card style={{ width: '21.7rem' }}>
                               <Card.Img variant="top" src={service?.img} />
                               <Card.Body>
                                 <Card.Title>{service?.name}</Card.Title>
                                 <Card.Text>
                                    {service?.details}
                                 </Card.Text>
                                 <Button variant="primary">Go somewhere</Button>
                               </Card.Body>
                            </Card>
                        </div>
                    )
                    )
                   }
                </div>
        </Container>
    );
};

export default ChefCard;
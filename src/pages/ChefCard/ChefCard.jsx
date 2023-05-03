import React, { useEffect, useState } from 'react';
import { Button, Card, Container  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        <Container className='mt-5'>
                <h2 className='text-center mt-4 mb-4'>Our Chef Service Details</h2>
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
                                 <Link to={`/services/${service?.id}`}>
                                    <Button variant="primary">Go Details</Button>
                                 </Link>
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
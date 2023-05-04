import React, { useEffect, useState } from 'react';
import { Button, Card, Container  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';

const ChefCard = () => {
  ///data stated
    const[servicesData, setServicesData] = useState([]);
    //data fetch load
     useEffect(()=>{
        fetch('https://assienment-10-server.vercel.app/chef')
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
                                 <Card.Title className='fw-bold'>{service?.name}</Card.Title>
                                 <div className='d-flex justify-content-between align-items-center'>
                                    <p className='fw-semibold'>
                                       <AiFillLike className='w-10 fs-4'/> {service?.total_view}
                                    </p>
                                    <p className='fw-semibold'> Recipes Number: {service?.recipes_number}</p>
                                 </div>
                                 <p className='fw-semibold'>Work: {service?.experience}</p>
                                 <Link to={`/services/${service?.id}`}>
                                    <Button variant="primary" className='w-100'>Go Details</Button>
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
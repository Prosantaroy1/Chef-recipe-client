import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NavBar from '../Share/NavBar/NavBar';
import Footer from '../Share/Footer/Footer';
import RecipeCollections from '../RecipeCollections/RecipeCollections';
import { AiFillLike } from 'react-icons/ai';

const ChefDetails = () => {
    const { id } = useParams();
    
    const [details, setDatails] =useState([]);
     useEffect(() => {
       fetch(`https://assienment-10-server.vercel.app/chef/${id}`)
         .then((res) => res.json())
         .then((data) => setDatails(data.item));
     }, []);

     console.log(details)
     return( 
          <div>
            <NavBar/>
             <Container>
                <Row className='mt-4 border border-dark p-3 rounded-2'>
                    <Col xs={12} lg={6}>
                        <img src={details?.img} className='w-100 rounded-3' alt='chef-picture'/>
                    </Col>
                    <Col xs={12} lg={6}>
                        <h4>{details?.name}</h4>
                        <p>{details?.details}</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='fw-semibold fs-5'>
                               <AiFillLike className='w-10 fs-4'/> {details?.total_view}
                            </p>
                            <p className='fw-semibold fs-5'> Recipes Number: {details?.recipes_number}</p>
                        </div>
                        <p className='fw-semibold fs-5'>Work: {details?.experience}</p>
                    </Col>
                </Row>
                 <RecipeCollections/>
             </Container>
             <Footer/>
          </div>
     );
    
};

export default ChefDetails;
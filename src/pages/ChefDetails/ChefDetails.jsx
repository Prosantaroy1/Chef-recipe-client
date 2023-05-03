import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NavBar from '../Share/NavBar/NavBar';
import Footer from '../Share/Footer/Footer';
import RecipeCollections from '../RecipeCollections/RecipeCollections';

const ChefDetails = () => {
    const { id } = useParams();
    
    const [details, setDatails] =useState([]);
     useEffect(() => {
       fetch(`http://localhost:5000/chef/${id}`)
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
                    </Col>
                </Row>
                 <RecipeCollections/>
             </Container>
             <Footer/>
          </div>
     );
    
};

export default ChefDetails;
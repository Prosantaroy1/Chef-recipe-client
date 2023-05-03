import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

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
             <Container>
                <h2>this is details: {details?.name}</h2>
             </Container>
          </div>
     );
    
};

export default ChefDetails;
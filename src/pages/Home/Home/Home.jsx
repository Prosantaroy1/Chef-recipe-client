import React from 'react';
import { Container } from 'react-bootstrap';
import RecipeCollections from '../../RecipeCollections/RecipeCollections';
import ChefCard from '../../ChefCard/ChefCard';
import SocialChef from '../../SocialChef/SocialChef';

const Home = () => {
    return (
        <Container>
            <RecipeCollections/>
            <ChefCard/>
            <SocialChef/>
        </Container>
    );
};

export default Home;

/* 
<div className='mt-4'>
              <ChefCard/>
            </div>
*/
import React from 'react';
import { Container } from 'react-bootstrap';
import RecipeCollections from '../../RecipeCollections/RecipeCollections';
import ChefCard from '../../ChefCard/ChefCard';

const Home = () => {
    return (
        <Container>
            <RecipeCollections/>
            <div className='mt-4'>
              <ChefCard/>
            </div>
        </Container>
    );
};

export default Home;
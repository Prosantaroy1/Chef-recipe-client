import React from 'react';
import { Container } from 'react-bootstrap';
import RecipeCollections from '../../RecipeCollections/RecipeCollections';

const Home = () => {
    return (
        <Container>
            <RecipeCollections/>
        </Container>
    );
};

export default Home;
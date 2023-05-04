import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <h4 className='text-center'>Importance Questions for Job</h4>
            <h5 className='text-danger'>
               1. Tell us the differences between uncontrolled and controlled components.
            </h5>
            <p>
             In React, controlled components refer to components that have their state and behavior      
             controlled by the parent component. These components rely on props passed down from the 
              parent component to update their state and behavior
            </p> 
            <h5 className='text-danger'>
               2. How to validate React props using PropTypes
            </h5>
            <p>
                PropTypes.any : The prop can be of any data type.<br/>
                PropTypes.bool : The prop should be a Boolean.<br/>
                PropTypes.number : The prop should be a number.<br/>
                PropTypes.string : The prop should be a string.<br/>
                PropTypes.func : The prop should be a function.<br/>
                PropTypes.array : The prop should be an array.<br/>
            </p>  
            <h5 className='text-danger'>
               3. Tell us the difference between nodejs and express js.
            </h5>
            <p>
             Express is a minimal and flexible node. js web application framework, providing a robust 
             of features for building single and multi-page, and hybrid web applications. On the other 
              hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily 
               building fast, scalable network applications"
            </p> 
            <h4 className='text-danger'>
              4. What is a custom hook, and why will you create a custom hook?
            </h4>
            <p>
              Custom React JS hooks offer reusability as when a custom hook is created, it can be reused 
               easily, which makes the code cleaner and reduces the time to write the code. It also 
              enhances the rendering speed of the code as a custom hook does not need to be rendered 
               again and again while rendering the whole code
            </p>
        </Container>
    );
};

export default About;
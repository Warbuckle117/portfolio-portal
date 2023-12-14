import React from 'react';
import './About.css';
import { Card, Container } from '@mui/material';

const About = () => {
    return (
        <Container className='about-me-container'
        >
            <h1 className='about-me-header'>
                Mark Christopher Arbuckle
            </h1>
            <Card />
            <p className='about-me-content'>
                description goes here
            </p>
        </Container>
    );
};

export default About;
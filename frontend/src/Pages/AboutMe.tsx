import React from 'react';
import './AboutMe.css';
import {Box, Card, Container, List, ListItem, ListItemIcon} from '@mui/material';

import myHeadshot from '../images/MarkArbuckle.jpg';
import githubLogo from '../images/github-mark.svg';
import codewarsLogo from '../images/codewars.svg';
import linkedinLogo from '../images/LI-In-Bug.png';
import {Link} from "react-router-dom";



const AboutMe = () => {
    return (
        <Container className='about-me-container'>
            <h1 className='about-me-header'>
                Mark Christopher Arbuckle
            </h1>
            <Container className='about-me-body'>
                <Card className='about-me-card'>
                    <img
                        className='about-me-image'
                        src={myHeadshot}
                        alt='Mark Christopher Arbuckle'
                    />
                    <Container className='about-me-content'>
                        <p className="short-bio">
                            I am a seasoned Full-Stack Software Developer with two years of expertise in the Software Development
                            Lifecycle and a robust background in Information Technology, including a notable role as a Senior Help
                            Desk Administrator in the United States Army. I excel in developing cutting-edge web applications to
                            cloud environments. My proficiency spans technologies like React, Java, TypeScript, Golang, and cloud
                            platforms such as Microsoft Azure and Amazon Web Services. Beyond my technical abilities, I am a
                            military veteran with an active Secret Security Clearance.
                        </p>
                        <p className="hobbies">
                            My diverse hobbies blend digital and real-world experiences. From PC and Xbox gaming to Virtual
                            Reality and software projects, I find joy in both virtual and tangible realms. Balancing beach walks
                            with the adrenaline of flight sims and FPS games, I explore new places, be they in virtual landscapes
                            or uncharted territories. Each hobby contributes to a dynamic tapestry of leisure, weaving together my
                            passion for technology and the simple joys of the real world.
                        </p>
                        <Box className="website-list">
                            <Link className="website-list-item" to="https://www.linkedin.com/in/markarbuckle" target="_blank">
                                <img className="linkedin-logo" src={linkedinLogo} alt="linkedin"/>
                            </Link>
                            <Link className="website-list-item" to="https://github.com/Warbuckle117" target="_blank">
                                <img className="github-logo" src={githubLogo} alt="github"/>
                            </Link>
                            <Link className="website-list-item" to="https://www.codewars.com/users/Warbuckle117" target="_blank">
                                <img className="codewars-logo" src={codewarsLogo} alt="linkedin"/>
                            </Link>
                        </Box>
                    </Container>
                </Card>
                <Card className="about-me-education">
                    <h2>Education</h2>
                    <Box className="education-category">
                        <Box className="education-category-item">
                            <h3>Western Governors University</h3>
                            <p>Bachelor of Science in Cloud Computing</p>
                            <p>Projected Graduation: June 2026</p>
                        </Box>
                        <Box className="education-category-item">
                            <h3>CompTIA</h3>
                            <List>
                                <ListItem><ListItemIcon></ListItemIcon> A+</ListItem>
                                <ListItem><ListItemIcon></ListItemIcon>Network+</ListItem>
                                <ListItem><ListItemIcon></ListItemIcon>Security+</ListItem>
                                <ListItem><ListItemIcon></ListItemIcon>Cloud+</ListItem>
                                <ListItem><ListItemIcon></ListItemIcon>Data+</ListItem>
                            </List>
                        </Box>
                        <Box className="education-category-item">
                            <h3>Azure</h3>
                            <List>
                                <ListItem><ListItemIcon></ListItemIcon>AZ-900: Azure Fundamentals</ListItem>
                                <ListItem><ListItemIcon></ListItemIcon>AI-900: Azure AI Fundamentals</ListItem>
                            </List>
                        </Box>
                        <Box className="education-category-item">
                            <h3>AWS</h3>
                            <List>
                                <ListItem><ListItemIcon></ListItemIcon>Cloud Practitioner  (In progress)</ListItem>
                            </List>
                        </Box>
                    </Box>
                </Card>
            </Container>
        </Container>
    );
};

export default AboutMe;
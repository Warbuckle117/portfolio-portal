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
                            I am a transitioning Army NCO with 8 years of experience in Information Technology, including 2 years
                            as a Full-Stack Software Developer and 6 years in a Senior Helpdesk Administrator role. My expertise lies in
                            developing advanced web applications for cloud environments. I am proficient in technologies such as React,
                            Java, TypeScript, and Golang, and I have experience working with cloud platforms like Microsoft Azure and
                            Amazon Web Services.
                        </p>
                        <p className="hobbies">
                            I enjoy a mix of digital and real-world activities. Whether it's gaming on my PC and Xbox, diving into
                            Virtual Reality, or working on software projects, I find happiness in both virtual and tangible experiences.
                            I balance relaxing beach walks with the excitement of flight sims and FPS games, exploring new places in
                            both virtual and real settings. These hobbies create a diverse and enjoyable leisure time, combining my
                            love for technology with the simple pleasures of the real world.
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
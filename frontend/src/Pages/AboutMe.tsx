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
                            I am an Army Veteran with 8 years of experience in Information Technology, including 2 years
                            as a Full-Stack Software Engineer and 6 years in a Senior Helpdesk Administrator role. My expertise lies in
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
                            <h3>College</h3>
                            <List>
                                <ListItem>Western Governors University</ListItem>
                                <ListItem>Bachelor of Science in Cloud Computing</ListItem>
                                <ListItem>Projected Graduation: June 2026</ListItem>
                            </List>
                        </Box>
                        <Box className="education-category-item">
                            <h3>Azure</h3>
                            <List>
                                <ListItem>AZ-900: Azure Fundamentals</ListItem>
                                <ListItem>AI-900: Azure AI Fundamentals</ListItem>
                            </List>
                        </Box>
                        <Box className="education-category-item">
                            <h3>AWS</h3>
                            <List>
                                <ListItem>Cloud Practitioner</ListItem>
                            </List>
                        </Box>
                        <Box className="education-category-item">
                            <h3>CompTIA</h3>
                            <List>
                                <ListItem> A+</ListItem>
                                <ListItem>Network+</ListItem>
                                <ListItem>Security+</ListItem>
                                <ListItem>Cloud+</ListItem>
                                <ListItem>Data+</ListItem>
                            </List>
                        </Box>
                        <Box className="education-category-item">
                            <h3>Management</h3>
                            <List>
                                <ListItem>Certified Scrum Master</ListItem>
                            </List>
                        </Box>
                        <Box className="education-category-item">
                            <h3>Data Science</h3>
                            <List>
                                <ListItem>AI Aware (In Progress)</ListItem>
                                <ListItem>Data Science Bootcamp (In Progress)</ListItem>
                            </List>
                        </Box>
                    </Box>
                </Card>
            </Container>
        </Container>
    );
};

export default AboutMe;
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import ProjectCard from '../../ProjectCard';
import project1 from '../../../assets/projects/bridge.jpg';
import project2 from '../../../assets/projects/FindMyBoards.JPG';
import project3 from '../../../assets/projects/budgetTracker.JPG';
import project4 from '../../../assets/projects/HomePageNotes.JPG';
import project5 from '../../../assets/projects/Landingpg.JPG';
import project6 from '../../../assets/projects/teamGenerated.JPG';


function Projects(){
    return(
        <Container fluid className = "project-section" >
            
            <h1 className ="project-heading" style={{color: "White", marginLeft:'50px', textDecoration:'underline #376E6F'}}>
                My Recent <strong className="header" style={{color:"#DA7B93"}}> Works </strong>
            </h1>
            {/* <p style = {{ color:"white", marginTop:'100px', marginLeft:'130px'}}>
                Here are a few projects I've worked on recently!
            </p> */}
            
            <Row style={{paddingButton: "10px", justifyContent:"center", flexWrap:'wrap'}}>
                <Col sm={4} className="project-card">
                    <ProjectCard 
                        imgPath={project1}
                        title="Board Reactions"
                        description="A fullstack MERN application that creates an interactive social networking site that connects board game enthusiast to new games and new people"
                        link="https://board-reactions.herokuapp.com/"
                        githublink="https://github.com/JSheleg/board-reactions"

                    />
                </Col>
                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={project2}
                        title="Find My Boards"
                        description="Social Media Application that connects board game lovers with a like minded community where they can share games, discover new games and make friends with users of similar tastes. Original version of Board Game Social Media App"
                        link="https://findmyboards.herokuapp.com/"
                        githublink="https://github.com/JSheleg/find-my-boards"
                    />
                </Col>
                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={project3}
                        title="Budget Tracker"
                        description=" Application to keep track of an individual's spendings and earnings. Built with Node, Express, MongoDB, Mongoose and Service Workers to make a Progressive Web Application."
                        link="https://mighty-springs-72989.herokuapp.com/"
                        githublink="https://github.com/JSheleg/pwa-budget-tracker"
                    />
                </Col>
                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={project4}
                        title="Note Taker"
                        description=" An application built with Express that takes notes, saves them using local storage and allows for notes to be deleted as things are completed."
                        link="https://stormy-journey-36440.herokuapp.com/"
                        githublink="https://github.com/JSheleg/digital-notepad"
                    />
                </Col>
                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={project5}
                        title="Destination Unknown"
                        description="Travel website that allows a user to search just for their days of travel and home airport to be provided with an unknown flight and destination. Information on Country of flight is provided. Built using 3rd party APIs, Vanilla JavaScript, HTML and CSS"
                        link="https://jsheleg.github.io/destination-unknown/"
                        githublink="https://github.com/JSheleg/destination-unknown"
                    />
                </Col>
                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={project6}
                        title="Dynamic Team Portfolio"
                        description="Application to dynamically create a team porfolio using Node, and Express with testing"
                        link="https://drive.google.com/file/d/1eg6nwiWQLMvwe3ylF8EtTqzI7K5MlFs9/view?usp=sharing"
                        githublink="https://github.com/JSheleg/team-portfolio"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;
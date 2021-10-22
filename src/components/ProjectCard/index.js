import React from 'react';
import { Card, Button} from "react-bootstrap";

function ProjectCard(props){
    return(
        
        <Card className="project-card-view" style={{ width: '18rem' , textAlign:"center", margin:'15px'}}>
            <Card.Img className="project-card-img" variant="top" src={props.imgPath} style={{ minHeight:'100px'}} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{margin:'2px'}}>
                    {props.description}
                </Card.Text>
                <a href={props.link} target="_blank" rel="noreferrer"><Button variant="primary" style={{marginTop:'5px'}}>View Deployed Project</Button></a><br/>
                <a href={props.githublink} target="_blank" rel="noreferrer"><Button variant="primary" style={{marginTop:'5px'}}>GitHub Repository</Button></a>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;
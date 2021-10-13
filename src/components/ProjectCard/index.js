import React from 'react';
import { Card, Button} from "react-bootstrap";

function ProjectCard(props){
    return(
        
        <Card className="project-card-view" style={{ width: '18rem' , textAlign:"center", margin:'15px'}}>
            <Card.Img className="project-card-img" variant="top" src={props.imgPath} style={{ minHeight:'100px'}} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text >
                    {props.description}
                </Card.Text>
                <a href={props.link}><Button variant="primary">View Project</Button></a>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;
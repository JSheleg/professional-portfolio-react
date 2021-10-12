import React from 'react';
import { Card, Button} from "react-bootstrap";

function ProjectCard(props){
    return(
        
        <Card className="project-card-view" style={{ width: '18rem' }}>
            <Card.Img className="project-card-img" variant="top" src={props.imgPath} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                    {props.description}
                </Card.Text>
                <Button variant="primary">View Project</Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;
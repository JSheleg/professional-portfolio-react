import React from 'react'
// import cover from "../../../assets/cover/Gourge.JPG";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Badge from 'react-simple-badges';

const Resume = () => (
    
    <Container style={{backgroundColor:"#2E151B"}}>
        <Row>
            {/* <Col><img src={cover} className="my-2" style={{margin: "25px", height: "500px", width: "600px", border: "10px solid #DA7B93"}} alt="cover"/></Col> */}
            <iframe title="resume" src="https://docs.google.com/document/d/e/2PACX-1vQvma5WD-XfT5R1UQjQuLm5ittWKwsVXt7IAftP53D8gJHIym3DqjPmYrKAO-rAWMd63bmtNjp3MROx/pub?embedded=true" style={{margin: "25px", height: "500px", width: "600px", border: "10px solid #DA7B93"}}></iframe>
            <Col style={{margin: "50px"}}><a href="https://docs.google.com/document/d/e/2PACX-1vQvma5WD-XfT5R1UQjQuLm5ittWKwsVXt7IAftP53D8gJHIym3DqjPmYrKAO-rAWMd63bmtNjp3MROx/pub"><Button variant="primary" size="lg" active style = {{width: "150px", height: "50px",marginTop:"50px", border: "10px solid #DA7B93", backgroundColor: "#376E6F", color: "white"}}>Download Resume</Button></a></Col>
            <Col id="badges" style={{width: 50, margin: "50px"}}>
                <h2 style={{color: "white"}}>Skills</h2>
                <Badge name="HTML5"  />
                <Badge name="CSS3" />
                <Badge name="React" />
                <Badge name="Git" />
                <Badge name="GitHub" />
                <Badge name="GraphQL" />
                <Badge name="Insomnia" />
                <Badge name="JavaScript" />
                <Badge name="Material-UI" />
                <Badge name="MySQL" />
                <Badge name="Node.js" />
            </Col>
        </Row>
        
        
    
    </Container>
    
)

export default Resume;


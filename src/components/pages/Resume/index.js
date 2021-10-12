import React from 'react'
import cover from "../../../assets/cover/Gourge.JPG";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Resume = () => (
    
    <Container style={{backgroundColor:"#2E151B"}}>
        <Row>
            <Col><img src={cover} className="my-2" style={{margin: "25px", height: "500px", width: "600px", border: "10px solid #DA7B93"}} alt="cover"/></Col>
            <Col style={{margin: "200px"}}><a href="https://docs.google.com/document/d/1FdpC4yaVQyklXrJ30La1WBjRUHYadhgPjiH8JRlnHiM/edit?usp=sharing"><Button variant="primary" size="lg" active style = {{width: "300px", height: "150px", border: "10px solid #DA7B93", backgroundColor: "#376E6F", color: "white"}}>Download Resume</Button></a></Col>
        </Row>
    </Container>
)

export default Resume;
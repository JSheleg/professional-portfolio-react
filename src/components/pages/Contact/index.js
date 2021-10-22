import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import emailjs from "emailjs-com"


const Contact = () => {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_5jei7t8', 'contact_form', e.target, 'user_xJ44jpcQNwEBSD6uhvoSF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text)
        });
        e.target.reset();
    }

    return(

    
        <Container style={{backgroundColor:"#DA7B93", paddingBottom:"50px", color:"white"}}>
            
            <Row>
                <Col style={{width:"100%",marginLeft:"50px"}}>
                    <h2 style={{fontSize:"40px"}}>Contact Me:</h2>
                    <p style={{fontStyle:"italic", fontSize:"20px", color: "white", marginLeft:"50px", marginRight: "50px"}}>I am currently studying and continuing to learn all I can to imporove my performancen as a developer. I am up for a challenge and I am always looking for opportunties. Feel free to reach out. Thank you! ~ Jessica Sheleg</p>
                </Col>
            </Row>
            <Form onSubmit={sendEmail} style={{marginLeft: "300px", marginTop:"75px", marginRight: "350px", marginBottom:"100px", paddingTop: "30px", paddingBottom:"30px", border: "10px solid black", backgroundColor: "#376E6F"}} >
                <Form.Group className="mb-3" controlId="contactInput" style={{marginTop:"10px", marginLeft:"100px"}}>
                    <Form.Label style={{marginRight:"50px"}}>Name: </Form.Label><br/>
                    <Form.Control id="name" type="text" placeholder="Name" name="user_name"/><br/>
                    <Form.Label>Email address: </Form.Label><br/>
                    <Form.Control id="email" type="email" style={{width:"400px"}}  placeholder="name@example.com" name="user_email" /><br/>
                    <Form.Label style={{marginBottom:"200px"}}>Message: </Form.Label><br/>
                    <Form.Control id="message" style={{width:"400px"}} as="textarea"name="message" rows={3} size="lg" /><br/>
                </Form.Group><br/>
                <Button  value = "Send Email" variant="primary" type="submit" style={{marginLeft:"100px", width: "350px", backgroundColor:"#2E151B", color:"white"}}>
                Submit
                </Button>
            </Form>
            <Row>
                <p style = {{marginLeft: '350px'}}>If form isn't working, feel free to reach me at jessica.sheleg@gmail.com</p>
            </Row>
            
        </Container>
    )
}

export default Contact;
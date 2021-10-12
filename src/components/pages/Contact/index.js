import Form from 'react-bootstrap/Form';
import { Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const Contact = () => (
    <Container style={{backgroundColor:"#DA7B93", paddingBottom:"50px", color:"white"}}>
        <Row>
            <Col style={{width:"100%",marginLeft:"50px"}}>
                <h2 style={{fontSize:"40px"}}>Contact Me:</h2>
                <p style={{fontStyle:"italic", fontSize:"20px", color: "white", marginLeft:"50px", marginRight: "50px"}}>I am currently studying and continuing to learn all I can to imporove my performancen as a developer. I am up for a challenge and I am always looking for opportunties. Feel free to reach out. Thank you! ~ Jessica Sheleg </p>
            </Col>
        </Row>
        <Form style={{marginLeft: "300px", marginTop:"75px", marginRight: "350px", marginBottom:"200px", paddingTop: "30px", paddingBottom:"30px", border: "10px solid black", backgroundColor: "#376E6F"}}>
            <Form.Group className="mb-3" controlId="contactInput" style={{marginTop:"10px", marginLeft:"100px"}}>
                <Form.Label style={{marginRight:"50px"}}>Name: </Form.Label>
                <Form.Control style={{marginBottom: "20px", width:"400px"}} type="text" placeholder=" Name"/><br/>
                <Form.Label>Email address: </Form.Label>
                <Form.Control style={{width:"400px"}} type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message" style={{marginTop:"10px", marginLeft:"100px", marginBottom:"10px"}}>
                <Form.Label style={{marginBottom:"200px"}}>Message: </Form.Label><br/>
                <Form.Control style={{width:"400px"}} as="textarea" rows={3} size="lg" />
            </Form.Group><br/>
            <Button variant="primary" type="submit" style={{marginLeft:"100px", width: "350px", backgroundColor:"#2E151B", color:"white"}}>
            Submit
            </Button>
        </Form>
        
    </Container>
)

export default Contact;
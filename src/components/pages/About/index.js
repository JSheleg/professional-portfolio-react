import React from 'react';
// import cover from "../../../assets/cover/Gourge.JPG"
import profile from "../../../assets/profilePicture/profile_pic.jpg";
import { Container, Row, Col, Image } from 'react-bootstrap';
// import { fontSize, textAlign } from '@mui/system';



function About() {
  
    return (

      <Container fluid className="profileContainer">
        <Row className="picture">
          <Col xs = {12} md = {12} className="profilePic">
            <Image src = {profile} rounded/>
          </Col>
          <Col xs={12} md={12} className="aboutDescription" style={{padding:'10px', textAlign:'center'}} >
            Hello, I'm a Full Stack Developer based in Dallas TX. I just recently graduated from University of Texas at Austin Full Stack Web Development Bootcamp with a focus on the MERN stack. My prior career included Mechanical and Manufacturing Engineering, Sales and Eduction.<br/> I have always loved coding having experienced it in my Bachelors with Java and C++ and Python through a Data Science Bootcamp. I greatly enjoy a challenge and have found that in the ever changing field of web development.<br/> Open to opportunties. Feel free to reach out!
          </Col>
        </Row>
      </Container>
      // <Box sx={{ flexGrow: 1 }}>
      //   <Grid container spacing={0}>
          
      //     <Grid item xs={12}>
      //       <img src={cover} className="my-2" style={{ width: "100%"}} alt="cover"/>
      //     </Grid>
      //     <Grid item xs={12} className="about-me">
      //       <h2 style = {{width: "100%",margin:"100px", textAlign: "center", fontSize:"2.2em"}}>About Me</h2>
      //     </Grid>
      //     <Grid item xs={12}>
      //       <img src = {profile} className="profile" style={{width:"100%"}} alt="profile"/>
      //     </Grid>
      //     <Grid item xs={12}>
      //       <p style= {{width:"100%", textAlign:"center"}} className="description">Hello, I'm Jessica. My education was in mechanical/electrical engineering, but I have had varied jobs that I have led me full circle back to coding. I am currently studying both Full-Stack Software Development and Data Science with a focus in Machine Learning. I'm looking for a challenge and a new opportunity. Feel free to reach out!</p>
      //     </Grid>
      //   </Grid>
      // </Box>
    );
}
  
export default About;
import React from 'react';
import cover from "../../../assets/cover/Gourge.JPG"
import profile from "../../../assets/profilePicture/profile_pic.jpg"
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import { fontSize, textAlign } from '@mui/system';



function About() {
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          
          <Grid item xs={12}>
            <img src={cover} className="my-2" style={{ width: "100%"}} alt="cover"/>
          </Grid>
          <Grid item xs={12} className="about-me">
            <h2 style = {{width: "100%",margin:"100px", textAlign: "center", fontSize:"2.2em"}}>About Me</h2>
          </Grid>
          <Grid item xs={12}>
            <img src = {profile} className="profile" style={{width:"100%"}} alt="profile"/>
          </Grid>
          <Grid item xs={12}>
            <p style= {{width:"100%", textAlign:"center"}} className="description">Hello, I'm Jessica. My education was in mechanical/electrical engineering, but I have had varied jobs that I have led me full circle back to coding. I am currently studying both Full-Stack Software Development and Data Science with a focus in Machine Learning. I'm looking for a challenge and a new opportunity. Feel free to reach out!</p>
          </Grid>
        </Grid>
      </Box>
    );
}
  
export default About;
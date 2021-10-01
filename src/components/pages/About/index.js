import React from 'react';
import cover from "../../../assets/cover/Gourge.JPG"
import profile from "../../../assets/profilePicture/profile_pic.jpg"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// import CenteredTabs from '../NavBar';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0),
  textAlign: 'center',
  verticalAlign: 'center',
  color: 'black',
  backgroundColor: '#ec160a'
}));

function About() {
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <h1><strong>Jessica Sheleg</strong></h1>
          </Grid>
          <Grid item xs={12}>
            <img src={cover} className="my-2" style={{ width: "100%"}} alt="cover"/>
          </Grid>
          <Grid item xs={12} className="about-me">
            <h2 style = {{width: "100%"}}>About Me</h2>
          </Grid>
          <Grid item xs={12}>
            <img src = {profile} className="profile" style={{width:"100%"}} alt="profile"/>
          </Grid>
          <Grid item xs={12}>
            <p style= {{width:"100%"}} className="description">Hello, I'm Jessica. My education was in mechanical/electrical engineering, but I have had varied jobs that I have led me full circle back to coding. I am currently studying both Full-Stack Software Development and Data Science with a focus in Machine Learning. I'm looking for a challenge and a new opportunity. Feel free to reach out!</p>
          </Grid>
        </Grid>
      </Box>

      // <section className = "my-5">
      //   <h1 id="about">Jessica Sheleg <p> Full Stack Developer</p></h1>
      //   <img src={coverImage} className="my-2" style={{ width: "100%"}} alt="cover"/>
      //     <div className='my-2'>
      //         <img src = {profilePic} className="my-2" style={{width:"25%"}} alt="profile picture"/>
      //         <p>Hello world</p>
      //     </div>
      // </section>
    );
}
  
export default About;
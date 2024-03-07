import React from 'react'
import {Grid, Paper, Typography} from '@mui/material'
import Header from "../Pages/Headers"
import Footer from '../../Footer';

export const Aboutus = () => {
    const paperStyle={padding :20,height: 'auto', width:600, margin:"50px auto"}
 
  return (
    <>
    <Header/>

    <Grid>
    <Paper elevation={10} style={paperStyle}>
      <Grid align='Center'>
   
<h1>About Us</h1>
<div style={{ marginBottom: '10px' }} />

<h4>Learn With Us</h4>
<Typography>Acing Abacus Becomes Easy, Even For Beginners</Typography>
<div style={{ marginBottom: '60px' }} />

<Typography>Institute Name</Typography>
<Typography>Contact number : +91 0000000000</Typography>
<Typography>Mode of Teaching : Online ( Zoom, Google Meet, etc.)</Typography>

<Typography>If you are trying your hand at abacus for the first time and wonder how to learn, you are in the right place..</Typography>
<div style={{ marginBottom: '40px' }} />

<Typography>With our Online quiz practice, you can master your skill and improve your level.</Typography>
<div style={{ marginBottom: '20px' }} />


</Grid>
</Paper>
 </Grid>
 <Footer/>
 </>
  )
}

export default Aboutus;
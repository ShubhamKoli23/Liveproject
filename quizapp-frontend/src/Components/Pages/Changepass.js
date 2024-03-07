import React from 'react'
import {Button, Grid, Paper,TextField} from '@mui/material'
import Header from "../Pages/Headers"
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

export const Changepass = () => {
    const paperStyle={padding :90,height: 'auto', width:500, margin:"50px auto"}
 
  return (
    <>
    <Header/>

    <Grid>
    <Paper elevation={10} style={paperStyle}>S
      <Grid align='Center'>
   
<h1>Change password</h1>

Enter a new password to change the password
123
<div style={{ marginBottom: '20px' }} />
<h4>Register Number:123456</h4>

  
 
<TextField label="Old Password" placeholder="Enter Email"variant='outlined' fullWidth/>
<div style={{ marginBottom: '10px' }} />
<TextField label="Email ID" placeholder="Enter Email"variant='outlined' fullWidth/>
<div style={{ marginBottom: '10px' }} />
<TextField label="Confirm n Password" placeholder="Enter Email"variant='outlined' fullWidth/>
<div style={{ marginBottom: '10px' }} />


<Grid container spacing={2}>
                <Grid align= 'center' item xs={6}>
                  <Link to={'/'}>
                <Button type='submit' colour='primary'variant="outlined" fullWidth>Cancel </Button>
                </Link>
                </Grid>
                
                <Grid item xs={6}>
                <Link to={'/'}>
                <Button type='submit' colour='primary'variant="contained" fullWidth>submit </Button>
                </Link>
                </Grid>
                </Grid>

               </Grid>
             </Paper>
           </Grid>
          <Footer/>
        </>
  )
}



export default Changepass;

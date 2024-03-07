import React from 'react'
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper,TextField,Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Header from "../Pages/Headers"
import Footer from '../../Footer';


const Accountinfo = () => {
    const paperStyle={padding :40,height: 'auto', width:450, margin:"50px auto"}
    const avatarStyle={backgroundColour:'green'}
 
    return (
        <>
        <Header/>
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                <Grid item xs={4}>
                    <h2>Sign Up</h2>
                </Grid>
                    
                    <div style={{ marginBottom: '20px' }} />
                
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField label="First name" placeholder="Enter first name" variant='outlined' fullWidth size="small"/>
                    </Grid>
                    <Grid item xs={6}>
                    <TextField label="Middle name" placeholder="Enter Middle name" variant='outlined' fullWidth size="small" />
                    </Grid>
                    <Grid item xs={6}>
                    <TextField label="Last name" placeholder="Enter sirname" variant='outlined' fullWidth size="small"/>
                    </Grid>
                </Grid>
            </Grid>

                <div style={{ marginBottom: '20px' }} />
            
            <Grid container spacing={2}>
                <Grid item xs={15}>
                    <TextField label="Email-Id" placeholder="abc@gmail.com" variant='outlined' fullWidth size="small" />
                </Grid>
            </Grid>
                
             <div style={{ marginBottom: '20px' }} />
            
             <Grid container spacing={2}>
             <Grid item xs={6}>
                    <TextField label="Registration Number" placeholder="123456" variant='outlined' fullWidth size="small" />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Registration Mobile Number" placeholder="+91 9999999999" variant='outlined' fullWidth size="small"/>
                </Grid>
            </Grid>
            <div style={{ marginBottom: '20px' }} />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField label="Date of Birth" placeholder="01-01-2024" variant='outlined' fullWidth size="small"/>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Gender" placeholder="Male/Female" variant='outlined' fullWidth size="small"/>
                </Grid>
            </Grid> 
                <div style={{ marginBottom: '20px' }} />
             <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField label="Teacher Full Name" placeholder="--" variant='outlined' fullWidth size="small"/>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="City" placeholder="Pune" variant='outlined' fullWidth size="small"/>
                </Grid>
            </Grid>
            <div style={{ marginBottom: '20px' }} />
             <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField label="Paaword" placeholder="******" variant='outlined' fullWidth size="small"/>
                </Grid>
                </Grid>
                <div style={{ marginBottom: '20px' }} />
                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField label="Confirm Password" placeholder="******" variant='outlined' fullWidth size="small"/>
                </Grid>
            </Grid>
            <div style={{ marginBottom: '20px' }} />
            <Grid align='center'>
            <Grid container spacing={2}>
                <Grid align= 'center' item xs={12}>
                    <Link to='/'>
                    <Button type='submit' color='primary' variant="contained" style={{ backgroundColor: '#6AA1FF' }} >Sign Up</Button>
                    </Link>
                </Grid>
                </Grid>
            
            Already have Account ?
            <Link to='/Signin'><Button type='submit' >Sign In</Button>
            </Link>
            </Grid>
        </Paper>
    </Grid>
        <Footer/>
        </>
  )
}
export default Accountinfo;

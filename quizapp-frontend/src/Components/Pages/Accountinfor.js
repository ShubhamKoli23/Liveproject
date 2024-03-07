import React from 'react'
import { Grid, Paper, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import Header from "../Pages/Headers";
import Footer from '../../Footer';


const Accountinfo = () => {
    const paperStyle = {
        padding: 30,
        height: 'auto', // Adjusted height to auto
        width: 500, // Adjusted width to make it smaller
        margin: "50px auto"
    }

    return (
    <>
    <Header/>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Grid item xs={4}>
                        <h1>Account Information</h1>
                        <h3>General Information</h3>
                    </Grid>

                    <div style={{ marginBottom: '20px' }} />

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField label="First name" placeholder="Enter first name" variant='outlined' fullWidth size="small" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField label="Middle name" placeholder="Enter Middle name" variant='outlined' fullWidth size="small" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField label="Last name" placeholder="Enter sirname" variant='outlined' fullWidth size="small" />
                        </Grid>
                    </Grid>
                </Grid>

                <div style={{ marginBottom: '20px' }} />

                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <TextField label="Email-Id" placeholder="abc@gmail.com" variant='outlined' fullWidth size="small" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Registration Number" placeholder="123456" variant='outlined' fullWidth size="small" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Registration Mobile Number" placeholder="+91 9999999999" variant='outlined' fullWidth size="small" />
                    </Grid>
                </Grid>

                <div style={{ marginBottom: '20px' }} />

                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <TextField label="Date of Birth" placeholder="01-01-2024" variant='outlined' fullWidth size="small" />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label="Gender" placeholder="Male/Female" variant='outlined' fullWidth size="small" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Teacher Full Name" placeholder="--" variant='outlined' fullWidth size="small" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="City" placeholder="Pune" variant='outlined' fullWidth size="small" />
                    </Grid>
                </Grid>

                <div style={{ marginBottom: '50px' }} />

                <Grid container spacing={2}>
                    <Grid align='center' item xs={6}>
                        <Link to={'/'}>
                        <Button type='submit' color='primary' variant="contained" fullWidth style={{ backgroundColor: '#6AA1FF' }} >Update</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to={'/'}>
                        <Button type='submit' color='primary' fullWidth style={{ backgroundColor: '#E6F4F1' }}>Cancel</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        <Footer/>
        </>
    )
}
export default Accountinfo;


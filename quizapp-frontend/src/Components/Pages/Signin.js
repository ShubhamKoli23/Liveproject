import React from 'react';
import { Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from "../Pages/Headers"
import Footer from '../../Footer';

const Signin = () => {
    const paperStyle = {
        padding: 30,
        height: 'auto',
        width: 400,
        margin: "50px auto"
    };

    return (
        <>
        <Header/>
       
            <form>
        <Grid container justifyContent="center">
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h1>Welcome</h1>
                    <Typography>
                        Sign in to Continue
                    </Typography>
                    <div style={{ marginBottom: '20px' }} />
                </Grid>
                <TextField label="Username" placeholder="Enter Username" variant='outlined' fullWidth />
                <div style={{ marginBottom: '10px' }} />
                <TextField label="Password" placeholder="Enter Password" type='password' variant='outlined' fullWidth />
                <div style={{ marginBottom: '20px' }} />
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                    </Grid>
                    <Grid item>
                        <Typography>
                            <Link to="/Forgetpass" >Forgot password?</Link>
                        </Typography>
                    </Grid>
                </Grid>
                <div style={{ marginBottom: '20px' }} />
                <Link to='/'>
                <Button type='submit' variant="contained" color="primary" fullWidth style={{ backgroundColor: '#6AA1FF' }}>Sign in</Button>
                </Link>
                <div style={{ marginBottom: '20px' }} />
                <Grid align='center'>
                    <Typography>
                        New user ?
                        <Link to="/Signup">
                            Sign Up
                        </Link>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
        <Footer/>
        </form>
        </>
        
    )
}

export default Signin;

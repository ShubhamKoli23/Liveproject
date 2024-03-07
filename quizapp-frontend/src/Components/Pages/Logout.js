import React from 'react';
import { Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';


export const Logout = () => {
  const paperStyle = {
    padding: 30,
    height: 'auto',
    width: 500,
    margin: "150px auto",
  };

  return (
    <Grid >
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <h1>Logout</h1>
            Hi abc@gmail.com,  
            Are you sure you want to logout from this website
          <h3>Registration Number : 123456</h3>  
          
        </Grid>
        <Grid align="Center">
        <Grid item xs={6}>
          <Link to={'/Logoutsuccessful'}>
             <Button color='primary' variant="contained" style={{ backgroundColor: '#6AA1FF' }}>Yes</Button>
             </Link>
        </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Logout;

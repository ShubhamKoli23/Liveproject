import React from 'react';
import { Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from "../Pages/Headers"
import Footer from '../../Footer';

export const Contactsubmit = () => {
  const paperStyle = {
    padding: 50,
    height: 'auto',
    width: 400,
    margin: "150px auto",
  };

  return (
    
    <Grid >
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <h1>Submited Successfully</h1>
          Please close the session window
        </Grid>
        <div style={{ marginBottom: '20px' }} />
        <Grid align= 'center' item xs={12}>
                    <Link to='/'>
                    <Button type='submit' color='primary' variant="contained" style={{ backgroundColor: '#6AA1FF' }} >close</Button>
                    </Link>
                </Grid>
      </Paper>
    </Grid>
    
  );
};

export default Contactsubmit;

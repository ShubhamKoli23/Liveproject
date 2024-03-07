import React from 'react';
import landpg from './landpg.jpg';
import { Grid, Paper, Typography } from '@mui/material';
import Header from "../Pages/Headers"
import Footer from '../../Footer';

const Landpage = () => {
  const paperStyle = { padding: 20, height: 'auto', width: '90%', margin: "50px auto" };

  return (
    <>
    <Header/>
    <Grid container justifyContent="center">
      <Paper elevation={10} style={paperStyle}>
        <Grid container alignItems="center" spacing={5}>
    
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h3">Unlimited Abacus Practice Question Papers</Typography>
              </Grid>
              <Grid item>
                <Typography style={{ fontSize: '20px' }}>
                  Generate unlimited question papers and practice endlessly with the Abacus tool. Complete registration and get access to endless questions and become an Abacus Champion.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        
          <Grid item xs={12} md={6}>
            <img src={landpg} alt="" width="100%" />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
    <Footer/>
    </>
  );
}

export default Landpage;

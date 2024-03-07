import React from 'react'
import trophy from './Trophy.jpg';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

const Congr = () => {
  const paperStyle = {
    padding: 10,
    height: 'auto',
    width: '80%', 
    margin: "50px auto"
  };

  const imageStyle = {
    width: '50%', 
    height: 'auto' 
  };

  const textStyle = {
    textAlign: 'center' 
  };

  return (
    <Grid container justifyContent="center">
      <Paper elevation={10} style={paperStyle}>
        <Grid item xs={12} align='center'>
          <img src={trophy} alt="" style={imageStyle} />
          <h1>Completed</h1>
          <Typography style={textStyle}>Great going. Work hard to get in the top list.</Typography>

          <h2>Total Question:40</h2>
          <Typography style={textStyle}>Correct Answer:30</Typography>
          <Typography style={textStyle}>Incorrect Answer:10</Typography>
          <Typography style={textStyle}>Time Taken:02:45 min</Typography>
          <div style={{ marginBottom: '10px' }} />
          <Link to='/'>
            <Button type='submit' variant='contained'>Close</Button>
          </Link>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Congr;
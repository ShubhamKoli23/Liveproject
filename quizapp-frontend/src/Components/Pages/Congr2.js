import React from 'react'
import Trophy from './Tropy2.jpg'
import { Button, Grid, Paper,Typography} from '@mui/material';
import { Link } from 'react-router-dom'

const Congr2 = () => {
  const paperStyle={padding :5,height: 'auto', width:700, margin:"80px auto"}
  return (
    <Grid>
    <Paper elevation={10} style={paperStyle}>
      <Grid align='Center'>
    <div><img src={Trophy} alt=""width="250" height="180"/></div>
    <h1>Completed</h1>
    <Typography >GOops! Your Score is very low, need improvement.</Typography>
    
        <h2>Total Question:40</h2>
        <Typography >Correct Answer:20</Typography>
        <Typography >Incorrect Answer:20</Typography>
        <Typography >Time Taken:02:35 min</Typography>
        <div style={{ marginBottom: '10px' }} />
       
        <Link to='/'>
        <Button type='submit' variant='contained'>Close</Button>
        </Link>
      
    </Grid>
    </Paper>
    </Grid>
  )
}

export default Congr2
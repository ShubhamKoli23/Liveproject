import * as React from 'react';
import Button from '@mui/material/Button';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function QuizStart()  {
    const paperStyle={padding :70,height: 'auto', width:400, margin:"20px auto"}
 
  return (
    <Grid>
        <div style={{marginTop:"100px"} }>

      </div>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='Center'>
            <h1 >Start Quiz </h1>

      <div style={{ marginBottom: '20px' }} />

          <Button type='submit' colour='primary'variant="contained" fullWidth style={{size:"100", background:'#6AA1FF'}}>Level 1 </Button>

          
              <div style={{ margin: '10px' }} />
              <h3> Quiz Details </h3>
              <div>
              <h4>Take The Test </ h4>
              </div>
              <div>
              <h5>Answer 5 Questions.</h5>
              Every child is a genius<br/>
              Score 75% or above in 2 mins to pass the test<br/>
              </div>
              <div style={{ marginBottom: '20px' }} />
          <Link to='/Questionpg1'>
          <Button type='submit' colour='primary'variant="contained" fullWidth style={{size:"100", backgroundColor: '#32cd32' }}>Start </Button>
          </Link>


          </Grid>
          </Paper>
          </Grid>
  )
}
export default QuizStart;

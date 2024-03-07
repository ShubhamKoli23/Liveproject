import React from 'react'
import {Button, Grid, Paper,TextField} from '@mui/material'
import { Link } from 'react-router-dom'


export const Newpass = () => {
    const paperStyle={padding :90,height: '45vh', width:500, margin:"50px auto"}
 
  return (
    <Grid>
    <Paper elevation={10} style={paperStyle}>
      <Grid align='Center'>
   
<h1>New Password</h1>

Enter a new password to reset the password
<div style={{ marginBottom: '10px' }} />

<TextField label="New Password" placeholder="Enter Email"variant='outlined' fullWidth/>
<div style={{ marginBottom: '10px' }} />
<TextField label="Confirm New Password" placeholder="Enter Email"variant='outlined' fullWidth/>
<div style={{ marginBottom: '10px' }} />
<Link to='/'>
<Button type='submit' color='primary' variant="contained"  style={{ backgroundColor: '#6AA1FF' }}>Reset Password </Button>
</Link>
</Grid>
</Paper>
 </Grid>
  )
}

export default Newpass;
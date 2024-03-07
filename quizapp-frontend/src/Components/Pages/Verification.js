import React, { useState } from 'react';
import { Button, Grid, Paper, TextField,  } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from "../Pages/Headers"
import Footer from '../../Footer';

const VerificationCode = () => {
  const paperStyle = { padding: 50, height: 'auto', width: 300, margin: "50px auto",}
  

  const [codes, setCodes] = useState(['', '', '', '', '']);

  const handleChange = (index, value) => {
    if (value.length <= 1 && !isNaN(value)) {
      const newCodes = [...codes];
      newCodes[index] = value;
      setCodes(newCodes);
    }
  };

  return (
   
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>

          <h2>Enter verification Code</h2>
          Please enter the 5 digit code that was sent to your email address

          <div style={{ marginBottom: '20px' }} />

          <Grid container spacing={2} justifyContent="center">
            {codes.map((code, index) => (
              <Grid item key={index}>
                <TextField
                  variant="outlined"
                  size="small"
                  value={code}
                  onChange={(e) => handleChange(index, e.target.value)}
                  inputProps={{
                    style: { textAlign: 'center', width: '1em' },
                    maxLength: 1,
                  }}
                />
              </Grid>
            ))}
          </Grid>

          <div style={{ marginBottom: '20px' }} />
          If you didn’t receive the email, <Button>Resend</Button>

          <div style={{ marginBottom: '20px' }} />
          <Link to='/Newpass'>
          <Button type='submit' color='primary' variant="contained" fullWidth style={{ backgroundColor: '#6AA1FF' }}> Verify </Button>
          </Link>

        </Grid>
      </Paper>
    </Grid>
    
  )
}

export default VerificationCode;

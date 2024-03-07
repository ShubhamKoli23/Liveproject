import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from "../Pages/Headers";
import Footer from '../../Footer';

export const Forgetpass = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const paperStyle = { padding: 20, width: isMobile ? '90%' : 500, margin: "50px auto" };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        // Perform email validation
        setIsValidEmail(validateEmail(event.target.value));
    };

    const validateEmail = (email) => {
        // Basic email validation (you can replace it with your desired validation logic)
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    return (
        <>
            <Header />

            <Grid container justifyContent="center">
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center' spacing={2}>
                            <Typography variant="h5" gutterBottom>
                                Forget your password
                            </Typography>
                            <TextField
                                label="Email"
                                placeholder="Enter Email"
                                variant='outlined'
                                fullWidth
                                value={email}
                                onChange={handleEmailChange}
                                error={!isValidEmail && email.trim() !== ''}
                                helperText={!isValidEmail && email.trim() !== '' ? 'Invalid email format' : ''}
                                style={{ marginBottom: '20px' }}
                            />
                            <Button
                                component={Link}
                                to={isValidEmail ? '/Verification' : '#'}
                                type='submit'
                                color='primary'
                                variant="contained"
                                fullWidth
                                disabled={!isValidEmail}
                                style={{ backgroundColor: '#6AA1FF', marginBottom: '20px' }}
                            >
                                Reset My Password
                            </Button>
                            <Typography variant="subtitle2" gutterBottom>
                                I already have an OTP
                            </Typography>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Forgetpass;

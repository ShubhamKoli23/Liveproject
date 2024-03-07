import React, { useState } from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from "../Pages/Headers";
import Footer from '../../Footer';

const Contactus = () => {
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        let hasErrors = false;

        // Basic validation
        if (formData.name.trim() === '') {
            errors.name = 'Enter your name';
            hasErrors = true;
        }
        if(formData.message.trim()=== ''){
            errors.message= 'Enter your message';
            hasErrors= true;
        }


        if (formData.email.trim() === '') {
            errors.email = 'Email is required';
            hasErrors = true;
        } else if (!formData.email.trim().endsWith('@gmail.com')) {
            errors.email = 'Only Gmail addresses are allowed';
            hasErrors = true;
        }

        if (formData.mobile.trim() === '') {
            errors.mobile = 'Enter your mobile number';
            hasErrors = true;
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            errors.mobile = 'Mobile number must be 10 digits';
            hasErrors = true;
        }
      
        // Additional validation can be added for other fields

        if (hasErrors) {
            setErrors(errors);
        } else {
            // Handle form submission
            console.log('Form submitted:', formData);
            // Redirect to Contactsub page with form data
            window.location.href = `/Contactsub?name=${formData.name}&city=${formData.city}&email=${formData.email}&mobile=${formData.mobile}&message=${formData.message}`;
        }
    };

    return (
        <>
            <Header />
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={10} md={8}>
                    <Paper elevation={10} style={{ padding: 30, height: 'auto', maxWidth: 600, margin: "50px auto" }}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" align="center">Contact Us</Typography>
                                    <Typography variant="subtitle1" align="center">Our experts will help you.</Typography>
                                    <Typography variant="body1" align="center">Do you need some help? Please help us with your details, and we will come back to you via email.</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        error={!!errors.name}
                                        helperText={errors.name}
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="City"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="E-mail ID"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Mobile No"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        error={!!errors.mobile}
                                        helperText={errors.mobile}
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        error={!!errors.message}
                                        helperText={errors.message}
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Link to='/'>
                                        <Button type='button' color='primary' fullWidth style={{ backgroundColor: '#E6F4F1' }}>Cancel</Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button type='submit' color='primary' variant="contained" fullWidth size="small" style={{ backgroundColor: '#6AA1FF' }}>Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Contactus;

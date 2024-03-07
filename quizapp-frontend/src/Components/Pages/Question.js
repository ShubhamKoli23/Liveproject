import React from 'react';
import { Grid, Paper, Button } from '@mui/material';
import StartPractice from "./StartPractice.jpg";
import TrackProgress from "./TrackProgress.jpg";
import {Link} from 'react-router-dom';
import Header from "../Pages/Headers"
import Footer from '../../Footer';

const Question = () => {
    const paperStyle = {
        padding: 30,
        height: 'auto',
        width: 400,
        margin: "50px auto",
        textAlign: 'center'
    };

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center'
    };

    return (
        <>
        <Header/>
        <div style={{ textAlign: "center" }}> {/* Added wrapper div with textAlign center */}
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={10} style={paperStyle}>
                        <div style={imageContainerStyle}>
                            <img src={StartPractice} alt="" width="150" height="150" />
                        </div>

                        <Grid container spacing={4}>
                            <Grid item xs={10}>
                                <p>See how you perform in real-time. Put your abacus-aptitude to test.
                                    Are you done solving some questions? Great. It’s now time for you to race against time,
                                    and see how good you really are. Take deep breaths and get started with online abacus practice paper.</p>

                                <h5>Ready to battle against time, for a full-fledged abacus test?</h5>
                                <Link to='/Questionlevel'>
                                <Button type='submit' color='primary' variant="contained" style={{ backgroundColor: '#6AA1FF' }}>Start practice</Button>
                                </Link>
                                </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={10} style={paperStyle}>

                        <div style={imageContainerStyle}>
                            <img src={TrackProgress} alt="" width="150" height="150" />
                        </div>

                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <p>A progress report serves as a communication link among students, teachers,
                                and parents, it is a feedback which helps the students in knowing actually- where they stand.
                                By tracking their own progress, students are encouraged to take ownership of their learning,
                                which helps them to develop the skills needed for better performance.</p>

                                <h5>Ready to see your progress?</h5>
                                <Link to={'/Trackprogress'}>
                                <Button type='submit' color='primary' variant="contained"  style={{ backgroundColor: '#6AA1FF' }}>Track progress</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        <Footer/>
        </>
    );
};

export default Question;

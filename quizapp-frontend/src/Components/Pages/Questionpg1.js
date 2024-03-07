import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Grid, Paper, Typography } from "@mui/material";
import {Link} from 'react-router-dom';

const QuestionPage = () => {
  const paperStyle = { padding: 10, height: 'auto', width: 'auto', margin: "50px auto" };
  const [selectedOption, setSelectedOption] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Card>
            <div style={{ marginTop: "50px" }}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={{ padding: "6px 150px" }}
              >
                <h3>Basic Level 1</h3>{" "}
              </Button>
            </div>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <Typography variant="h6" gutterBottom>Questions 1/5</Typography>
                </div>
                <div>
                  <Typography variant="h5" gutterBottom>Time: 01.00</Typography>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <div>
                  <Typography variant="h4"> What is an abacus used for?</Typography>
                </div>
              </div>

              <RadioGroup
                aria-label="programming-language"
                name="programming-language"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <FormControlLabel value="counting" control={<Radio />} label="Counting" />
          <FormControlLabel value="solving math problems" control={<Radio />} label="Solving Math Problems" />
          <FormControlLabel value="both" control={<Radio />} label="Both" />
          <FormControlLabel value="none" control={<Radio />} label="None" />
              </RadioGroup>

              <Grid container spacing={1}>
              <Grid container justifyContent="center"> {/* Center the button */}
              <Link to='/Questionpg2'>
                <Button type='submit' color='primary' variant="contained" style={{ padding: "15px 60px", marginTop: 'auto' }} 
                onClick={handleSubmit}>Next</Button>
                </Link>
              </Grid>

                {submitted && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginTop: "20px" }}
                  >
                    Your answer has been submitted! Thank you.
                  </Typography>
                )}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Paper>
    </Grid>


  )
}

export default QuestionPage;

import React from 'react'
import {Button, Grid, Paper} from '@mui/material'
import { Link } from 'react-router-dom'
import Header from "../Pages/Headers"
import Footer from '../../Footer';


export const Questionlevel = () => {
    const paperStyle={padding :10,height: 'auto', width:'90%', margin:"50px auto"}
 
  return (
    <>
    <Header/>

    <Grid container justifyContent="center">
    <Paper elevation={10} style={paperStyle}>
      <Grid align='Center'>
   
<h1>Start Practice</h1>

See how you perform in real-time. Put your abacus-aptitude to test.
<div style={{ marginBottom: '10px' }} />

Are you done solving some questions? Great. It’s now time for you to race against time, and see how good you really are. Take deep breaths and get started with online abacus practice paper.
<div style={{ marginBottom: '20px' }} />

<h6>Level 1Ready to battle against time, for a full-fledged abacus test?</h6>
<div style={{ marginBottom: '20px' }} />

<Grid container spacing={1}>
<Grid item xs={12} md={6} lg={3}>
    <Link to='/QuizStart'>
      <Button type='submit' colour='primary'variant="outlined"  style={{ padding: '9px 30px', width: '100%' }}>Basic Level 1 </Button>
    </Link>
</Grid>

<Grid item xs={12} md={6} lg={3}>
<Button type='submit' colour='primary'variant="outlined"  style={{ padding: '9px 30px', width: '100%' }} >Basic Level 2 </Button>
</Grid>

<Grid item xs={12} md={6} lg={3}>
<Button type='submit' colour='primary'variant="outlined"  style={{ padding: '9px 30px', width: '100%' }} >Basic Level 3 </Button>
</Grid>

<Grid item xs={12} md={6} lg={3}>
<Button type='submit' colour='primary'variant="outlined"  style={{ padding: '9px 30px', width: '100%' }}>Basic Level 4 </Button>
</Grid>
</Grid>

<div style={{ marginBottom: '10px' }} />
<Grid container spacing={1}>
<Grid item xs={12} md={6} lg={3}>
<Button type='submit' colour='primary'variant="outlined" style={{ padding: '9px 30px', width: '100%' }}>Regular Level 1 </Button>
</Grid>

<Grid item xs={12} md={6} lg={3}>
<Button type='submit' colour='primary'variant="outlined" style={{ padding: '9px 30px', width: '100%' }}>Regular Level 2 </Button>
</Grid>

<Grid item xs={12} md={6} lg={3}>
<Button type='submit' colour='primary'variant="outlined" style={{ padding: '9px 30px', width: '100%' }} >Regular Level 3 </Button>
</Grid>

<Grid item xs={12} md={6} lg={3}>
<Button type='submit' colour='primary'variant="outlined" style={{ padding: '9px 30px', width: '100%' }}>Regular Level 4 </Button>
</Grid>
</Grid>

<div style={{ marginBottom: '10px' }} />
<Grid container spacing={1} justifyContent="center">
<Grid item xs={12} md={6} lg={3}>
<Button type='submit' colour='primary'variant="outlined" style={{ padding: '9px 50px', width: '100%' }}>Level 1 </Button>
</Grid>

<Grid item xs={12} md={6} lg={3}>
<Button type='submit' colour='primary'variant="outlined" style={{ padding: '9px 50px', width: '100%' }}>Level 2 </Button>
</Grid>

<Grid item xs={12} md={6} lg={3}>
<Button type='submit' colour='primary'variant="outlined" style={{ padding: '9px 50px', width: '100%' }}>Level 3 </Button>
</Grid>

</Grid>
</Grid>
</Paper>
</Grid>
<Footer/>
</>
  )
}

export default Questionlevel;

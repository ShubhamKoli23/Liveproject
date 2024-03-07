import * as React from 'react';
import {FaSearch} from 'react-icons/fa';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
import { Typography } from '@mui/material';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)


function Trackprogress()  {
    const paperStyle={padding :70,height: 'auto', width:'auto', margin:"20px auto"}
    const [data, setData]= useState({
      labels:["Basic Level 1","Basic Level 2", "Basic Level 3", "Basic Level 4", "Regular Level 1", "Regular Level 2", "Regular Level 3", "Regular Level 4", "Level 1", "Level 2", "Level 3"],
      datasets:[
        {
          label:"First Dataset",
          data:[0, 5, 10, 15, 55, 25, 30, 35, 5, 45, 50, 55],
          borderColor:'green',
          tension:0.4,
          fill:true,
          pointStyle:'rect',
          pointBorderColor:'blue',
          pointBackgroundColor:'#fff',
          showLine:true
        }
      ]
    })
 
  return (
    <Grid>
        <div style={{marginTop:"80px"} }>

</div>
    <Paper elevation={5} style={paperStyle}>
      <Grid align='Center'>
      <h1 >Track Progress</h1>

      <form className='bg-slate-200 p-3 rounded-lg flex items-center'>
        <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className='text-slate-600' />
      </form>

      <Typography>Registration Number : 123456</Typography>

      <div className="App" style={{width:'800px', height:'800px'}}>
      <Line data={data}>Hello</Line>
      </div>




</Grid>
</Paper>
 </Grid>
  )
}
export default Trackprogress;
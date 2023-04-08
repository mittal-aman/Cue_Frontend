import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core';
import List from './List';
import {Route, Routes} from 'react-router-dom'
import Faculty from './Faculty';
import AreaofStudy from './AreaofStudy';
import Research from './Research';
import Staff from './Staff';
import StudentClub from './StudentClub';
import DepartmentMap from './DepartmentMap';
import Event from './Event';

const useStyle = makeStyles(()=>({
    box:{
        
        flexGrow: 1,
    },
    gridcon:{
        background:'#330662',
        width: '100%',
        height: '100%',

    },
    grid1:{
       
        height: '83vh',
        width: '100%',
        
        borderRight:'6px solid #ab82c5',
    },
    grid2:{
       
        height: '83vh',
        width: '100%',
        background: '#eee6f3',
        borderLeft:'6px solid #ab82c5',
    }
}))

const Main = () => {

    const classes = useStyle();


  return (
    
      <Grid container className={classes.gridcon}>
        <Grid item xs={9} className={classes.grid1}>
          <div >
            <Routes>
                <Route path='/' element={<Faculty/>} />
                <Route exact path='/cue/aos' element={<AreaofStudy/>} />
                <Route exact path='/cue/rg' element={<Research/>} />
                <Route exact path='/cue/fd' element={<Faculty/>} />
                <Route exact path='/cue/sd' element={<Staff/>} />
                <Route exact path='/cue/sc' element={<StudentClub/>} />
                <Route exact path='/cue/dp' element={<DepartmentMap/>} />
                <Route exact path='/cue/e' element={<Event/>} />
            </Routes>
          </div>
        </Grid>
        <Grid item xs={3} className={classes.grid2}>
        <div>
            <List />
        </div>
        </Grid>
      </Grid>
   
  );
}

export default Main;
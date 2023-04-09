import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { NavState } from '../Contextapi';



const useStyle =  makeStyles(()=>({
    grid_main:{
        width: '5vw',
        height:'55vh',
        

    },
    grid:{
        width: '1vw',
        height:'5vh',
        textAlign:"center",
        background:"#ab82c5",        
    }
}))

const List = () => {

    const {navvalue, setNavvalue} = NavState(); 

    const classes = useStyle();
  return (
    <div>
        
        
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        
        className={classes.grid_main}
        >

            <Grid item className={classes.grid} xs={12}>
            <Button
                onClick={() => setNavvalue("Area of Study")}>
               
                <NavLink to='/cue/aos'>Area of Study</NavLink>

            </Button>
                
            </Grid>
            <Grid item className={classes.grid} xs={12}>
            <Button
                onClick={() => setNavvalue("Research Group")}>
                
                <div>
                    <NavLink to='/cue/rg'>Research Group</NavLink>
                </div>
            </Button>    
            </Grid>
            <Grid item className={classes.grid} xs={12}>
            <Button
                onClick={() => setNavvalue("Faculty Directory")}>
                
                <div>
                    <NavLink to='/cue/fd'>Faculty Directory</NavLink>

                </div>
            </Button> 
                
            </Grid>
            <Grid item className={classes.grid} xs={12}>
            <Button
                onClick={() => setNavvalue("Student Club")} >
                
                <div>
                    <NavLink to='/cue/sc'>Student Club</NavLink>

                </div>
            </Button> 
                
            </Grid>
            <Grid item className={classes.grid} xs={12}>
            <Button
                onClick={() => setNavvalue("Department Map")} >
                
                <div>
                   <NavLink to='/cue/dp'>Department Map</NavLink>
                </div>
            </Button> 
               
            </Grid>

            <Grid item className={classes.grid} xs={12}>
            <Button
                onClick={() => setNavvalue("Events")}       
                >
                <div>
                    <NavLink to='/cue/e'>Events</NavLink>
                </div>
            </Button> 
                
            </Grid>

            
        </Grid>
    </div>
  )
}

export default List
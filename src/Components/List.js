import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';



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
                <div>
                    <NavLink to='/cue/aos'>AreaofStudy</NavLink>
                </div>
            </Grid>
            <Grid item className={classes.grid} xs={12}>
                <div>
                    <NavLink to='/cue/rg'>Research Group</NavLink>
                </div>
            </Grid>
            <Grid item className={classes.grid} xs={12}>
                <div>
                    <NavLink to='/cue/fd'>Faculty Directory</NavLink>
                </div>
            </Grid>
            <Grid item className={classes.grid} xs={12}>
                <div>
                    <NavLink to='/cue/sc'>Student Club</NavLink>
                </div>
            </Grid>
            <Grid item className={classes.grid} xs={12}>
                <div>
                    <NavLink to='/cue/dp'>Department Map</NavLink>
                </div>
            </Grid>
            <Grid item className={classes.grid} xs={12}>
                <div>
                    <NavLink to='/cue/e'>Events</NavLink>
                </div>
            </Grid>

            
        </Grid>
    </div>
  )
}

export default List
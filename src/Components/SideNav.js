import * as React from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { NavState } from "../Contextapi";

const useStyle = makeStyles(() => ({
  grid_main: {
    // width: "5vw",
    // height: "55vh",
    paddingLeft: "1em",
    paddingRight: "1em",
    paddingTop: "3em",
    
    
  },
  grid: {
    textAlign: "left",
    background: "#ab82c5",
    border: "2px solid",
    height: "7vh",
    display: "flex",
    alignItems: "center",
    borderRadius: "6px"
    
    
  },
  // button:{
  //   height:100%
  // },

  prevButton:{
    backgroundColor: '#3f0d60',
    borderRadius: '20px',
    padding: '17px 60px',
    cursor: 'pointer',
    borderColor:'#d8b1f3',
    color:'white',
    margin: 'auto',
    display: "flex",
    alignItems:'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize:'1.4vw'
  }
}));

const List = () => {
  const navigate = useNavigate();
    
  const { navvalue, setNavvalue } = NavState();

  const location = useLocation();

  const reverseData = () => {
    navvalue.pop();
    setNavvalue(navvalue); 
  };

  const navigateToMenu = (navigationName) => {
    navvalue.push(navigationName)
    setNavvalue(navvalue);
  }
  const classes = useStyle();

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        borderRadius='20px'
        borderTopRightRadius='20px'
        className={classes.grid_main}
      >
        <Grid item className={classes.grid} xs={12} style={{background:'#541182',}}>
          <Button onClick={() => navigateToMenu('Area of Study')} className={classes.button}>
            <NavLink style={{ textDecoration: 'none',background:'#541182', color: 'white',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/aos">Area of Study</NavLink>
          </Button>
        </Grid>
        <Grid item className={classes.grid} xs={12} style={{background:'#d8b1f3'}}>
          <Button onClick={() => navigateToMenu("Research Group")}>
            <div>
              <NavLink style={{ textDecoration: 'none', color: '#330662',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/rg">Research Group</NavLink>
            </div>
          </Button>
        </Grid>
        <Grid item className={classes.grid} xs={12} style={{background:'#541182'}}>
          <Button onClick={() => navigateToMenu("Faculty Directory")}>
            <div>
              <NavLink style={{ textDecoration: 'none', color: 'white',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/fd">Faculty Directory</NavLink>
            </div>
          </Button>
        </Grid>
        <Grid item className={classes.grid} xs={12} style={{background:'#d8b1f3'}}>
          <Button onClick={() => navigateToMenu("Staff Directory")}>
            <div>
              <NavLink style={{ textDecoration: 'none', color: '#330662',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/s">Staff Directory</NavLink>
            </div>
          </Button>
        </Grid>
        <Grid item className={classes.grid} xs={12} style={{background:'#541182'}}>
          <Button onClick={() => navigateToMenu("Student Club")}>
            <div>
              <NavLink style={{ textDecoration: 'none', color: 'white',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/sc">Student Club</NavLink>
            </div>
          </Button>
        </Grid>
        <Grid item className={classes.grid} xs={12} style={{background:'#d8b1f3'}}>
          <Button onClick={() => navigateToMenu("Department Map")} >
            <div>
              <NavLink style={{ textDecoration: 'none', color: '#330662',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/dp">Department Map</NavLink>
            </div>
          </Button>
        </Grid>

        <Grid item className={classes.grid} xs={12} style={{background:'#541182'}}>
          
          <Button onClick={() => navigateToMenu("Events")}>
            <div>
              <NavLink style={{ textDecoration: 'none', color: 'white',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/e">Events</NavLink>
            </div>
          </Button>
        </Grid>
        {location.pathname !== "/" ? (
          <Grid item className={classes.grid} xs={12} style={{background:'#d8b1f3'}}>
            <Button onClick={() => navigateToMenu("Faculty")}>
              <div>
                <NavLink style={{ textDecoration: 'none', color: '#330662',fontWeight: 'bold',fontSize:'1.4vw' }} to="/">Main Menu</NavLink>
              </div>
            </Button>
          </Grid>
        ) : null}
      </Grid>
              <br /> <br /> <br />
      {location.pathname !== "/" ? (

          <Grid item className={classes.prev} xs={12}>
              
                <button onClick={() => {navigate(-1);reverseData();}} className={classes.prevButton}>
                  Prev.Page
                </button>
              
          </Grid>
        ) : null}
    </div>
  );
};

export default List;

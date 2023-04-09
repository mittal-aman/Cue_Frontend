import * as React from "react";
import {useNavigate} from 'react-router-dom'
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { NavState } from "../Contextapi";

const useStyle = makeStyles(() => ({
  grid_main: {
    // width: "5vw",
    // height: "55vh",
    padding: "2em",
    
  },
  grid: {
    textAlign: "left",
    background: "#ab82c5",
    border: "2px solid",
    height: "50px",
    display: "flex",
    alignItems: "center",
  },
  prevButton:{
    textAlign: "center",
    padding: "1em",
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize:'1.4vw',
  }
  
}));

const List = () => {
    const navigate = useNavigate();

  const { navvalue, setNavvalue } = NavState();

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
          <Button onClick={() => setNavvalue("Area of Study")}>
            <NavLink style={{ textDecoration: 'none', color: 'white',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/aos">Area of Study</NavLink>
          </Button>
        </Grid>
        <Grid item className={classes.grid} xs={12}>
          <Button onClick={() => setNavvalue("Research Group")}>
            <div>
              <NavLink style={{ textDecoration: 'none', color: '#330662',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/rg">Research Group</NavLink>
            </div>
          </Button>
        </Grid>
        <Grid item className={classes.grid} xs={12}>
          <Button onClick={() => setNavvalue("Faculty Directory")}>
            <div>
              <NavLink style={{ textDecoration: 'none', color: 'white',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/fd">Faculty Directory</NavLink>
            </div>
          </Button>
        </Grid>
        <Grid item className={classes.grid} xs={12}>
          <Button onClick={() => setNavvalue("Staff Directory")}>
            <div>
              <NavLink style={{ textDecoration: 'none', color: '#330662',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/s">Staff Directory</NavLink>
            </div>
          </Button>
        </Grid>
        <Grid item className={classes.grid} xs={12}>
          <Button onClick={() => setNavvalue("Student Club")}>
            <div>
              <NavLink style={{ textDecoration: 'none', color: 'white',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/sc">Student Club</NavLink>
            </div>
          </Button>
        </Grid>
        <Grid item className={classes.grid} xs={12}>
          <Button onClick={() => setNavvalue("Department Map")}>
            <div>
              <NavLink style={{ textDecoration: 'none', color: '#330662',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/dp">Department Map</NavLink>
            </div>
          </Button>
        </Grid>

        <Grid item className={classes.grid} xs={12}>
          <Button onClick={() => setNavvalue("Events")}>
            <div>
              <NavLink style={{ textDecoration: 'none', color: 'white',fontWeight: 'bold',fontSize:'1.4vw' }} to="/cue/e">Events</NavLink>
            </div>
          </Button>
        </Grid>
        {!(navvalue === "Faculty") ? (
          <Grid item className={classes.grid} xs={12}>
            <Button onClick={() => setNavvalue("Faculty")}>
              <div>
                <NavLink style={{ textDecoration: 'none', color: '#330662',fontWeight: 'bold',fontSize:'1.4vw' }} to="/">Main Menu</NavLink>
              </div>
            </Button>
          </Grid>
        ) : null}
      </Grid>

      {!(navvalue === "Faculty") ? (
          <Grid item className={classes.prevButton} xs={12}>
            <Button onClick={() => {navigate(-1);}} variant="outlined" size="medium">
              Prev.Page
            </Button>
          </Grid>
        ) : null}
    </div>
  );
};

export default List;

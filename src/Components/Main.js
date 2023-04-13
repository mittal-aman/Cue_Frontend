import * as React from "react";
import  { useState,useEffect } from 'react'
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core";
import SideNav from "./SideNav";
import { Route, Routes } from "react-router-dom";
import Faculty from "./Faculty";
import AreaofStudy from "./Area of Study/AreaofStudy";
import Research from "./Research";
import Staff from "./Staff";
import StudentClub from "./StudentClub";
import DepartmentMap from "./DepartmentMap";
import Event from "./Event";
import {useNavigate} from 'react-router-dom'


const useStyle = makeStyles(() => ({
  box: {
    flexGrow: 1,
  },
  gridcon: {
    
    width: "100%",
    height: "100%",
  },
  grid1: {
    height: "83vh",
    width: "100%",
    background:'#702b9d',
    borderRight: "6px solid #ab82c5",
  },
  grid2: {
    height: "83vh",
    width: "100%",
    background: "#702b9d",
    borderLeft: "6px solid #ab82c5",
  },
}));



const Main = () => {
  const classes = useStyle();

  

  return (
    <Grid container className={classes.gridcon}>
      <Grid item xs={9} className={classes.grid1}>
          <Routes>
            <Route path="/" element={<Faculty />} />
            <Route
              exact
              path="/cue/aos"
              element={<AreaofStudy />}
            />
            <Route exact path="/cue/rg" element={<Research />} />
            <Route exact path="/cue/fd" element={<Faculty />} />
            <Route exact path="/cue/s" element={<Staff />} />
            <Route exact path="/cue/sc" element={<StudentClub />} />
            <Route exact path="/cue/dp" element={<DepartmentMap />} />
            <Route exact path="/cue/e" element={<Event />} />
          </Routes>
      </Grid>
      <Grid item xs={3} className={classes.grid2}>
          <SideNav />
      </Grid>
    </Grid>
  );
};

export default Main;

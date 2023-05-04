import * as React from "react";
import  { useState,useEffect } from 'react'
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core";
import SideNav from "./SideNav";
import { Route, Routes } from "react-router-dom";
import Faculty from "./Faculty";
import AreaofStudy from "./Area of Study/AreaofStudy";
import Research from "./Research/ResearchGroup";
import Staff from "./Staff";
import StudentClub from "./StudentClub";
import DepartmentMap from "./DepartmentMap";
import Event from "./Event";
import {useLocation} from 'react-router-dom'
import AlertDialog from "./AlertBox";
import ListAos from "./Area of Study/ListAos";
import ListResearch from "./Research/ListResearch";
import axios from "axios";

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
    background:'#541182',
    borderRight: "6px solid #ab82c5",
  },
  grid2: {
    height: "83vh",
    width: "100%",
    background: "#541182",
    borderLeft: "6px solid #ab82c5",
  },
}));



const Main = () => {
  const classes = useStyle();

  const location = useLocation();


  const getFaculty = async () => {
    await axios.get("http://128.122.136.144:8080/CUE/F").then((response) => {
      console.log(response.data.deptName);
      // console.log(typeof response.data[0].movies);
      // setMydata(response.data[0].movies)
      // console.log(typeof response.data[0].movies);
    }).catch((err) => {
      console.log(err)
    })
  }

  
  return (
    <Grid container className={classes.gridcon}>
      <Grid item xs={9} className={classes.grid1}>
          <Routes>
            <Route path="/" element={<Faculty />} />
            <Route exact path="/cue/aos" element={<ListAos />}/>
            <Route exact path="/cue/aos/:id" element={<AreaofStudy />}/>    
            <Route exact path="/cue/rg/" element={<ListResearch />} />
       
            <Route exact path="/cue/rg/:id" element={<Research />} />
            <Route exact path="/cue/fd" element={<Faculty />} />
            <Route exact path="/cue/s"  element={<Staff />} />
            <Route exact path="/cue/sc" element={<StudentClub />} />
            <Route exact path="/cue/dp" element={<DepartmentMap />} />
            <Route exact path="/cue/e" element={<Event />} />
          </Routes>
      </Grid>
      <Grid item xs={3} className={classes.grid2}>
          <SideNav />
      </Grid>
      {location.pathname !== "/" ? (
          <AlertDialog/>
        ) : null
      }

      
    </Grid>

  );
};

export default Main;

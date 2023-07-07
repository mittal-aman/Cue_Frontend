import { makeStyles } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AlertDialog from "./AlertBox";
import AreaofStudy from "./Area of Study/AreaofStudy";
import ListAos from "./Area of Study/ListAos";
import DepartmentMap from "./DepartmentMap";
import Event from "./Event";
import Faculty from "./Faculty";
import ListResearch from "./Research/ListResearch";
import Research from "./Research/ResearchGroup";
import SideNav from "./SideNav";
import Staff from "./Staff";
import FacultyByFacultyType from "./FacultyByFacultyType";


const useStyles = makeStyles(() => ({
  box: {
    flexGrow: 1,
  },
  gridcon: {
    width: "100vw",
    height: "100%",
  },
  grid1: {
    height: "85vh",
    width: "75vw",
    // background: "#b1adac",
    overflowY:'auto',
    background: 'linear-gradient(0deg, grey, #dee0e0,grey)',
    borderLeft: "6px solid #727474",
  },
  grid2: {
    height: "85vh",
    width: "25vw",
    // background: "#b1adac",
    overflowY:'auto',
    background: 'linear-gradient(0deg, grey, #dee0e0,grey)',
    borderRight: "6px solid #727474",
  },
}));

const Main = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Grid container className={classes.gridcon}>
      <Grid item xs={3} className={classes.grid2}>
        <SideNav />
      </Grid>
      <Grid item xs={9} className={classes.grid1}>
        <Routes>
          <Route path="/" element={<Faculty />} />
          <Route exact path="/cue/areaofstudy" element={<ListAos />} />
          <Route exact path="/cue/areaofstudy/:title" element={<AreaofStudy />} />
          <Route exact path="/cue/researchgroup/" element={<ListResearch />} />
          <Route exact path="/cue/researchgroup/:title" element={<Research />} />
          <Route exact path="/cue/facultydirectory" element={<Faculty />} />
          <Route exact path="/cue/facultydirectory/:facultyType" element={< FacultyByFacultyType/>} />
          <Route exact path="/cue/staff" element={<Staff />} />
          {/* <Route exact path="/cue/studentclub" element={<StudentClub />} /> */}
          <Route exact path="/cue/departmentmap" element={<DepartmentMap />} />
          <Route exact path="/cue/event" element={<Event />} />
        </Routes>
      </Grid>
      {location.pathname !== "/" && <AlertDialog />}
    </Grid>
  );
};

export default Main;
import React, { useContext, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "../Contextapi";
import logooo from "../images/logo.png";

const titleStyle = {
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "right",
  fontSize: "1.4vw",
  fontFamily: "gotham-bold",
};

const useStyles = makeStyles((theme) => ({
  gridmain1: {
    background: "#b1adac",
    height: "100%",
    fontWeight: "bold",
    width: "100%",
  },
  gridmain2: {
    backgroundImage: "linear-gradient(to right, #292929, #ffffff)",
    height: "100%",
    width: "100%",
    paddingLeft: "2vw",
    paddingTop: "1vh",
    paddingBottom: "1vh",
    fontWeight: "bold",
    fontSize: "7rem",
    color: "white",
  },
  logo: {
    height: "10vh",
    weight: "10vw",
    maxWidth: "50%",
  },
  title: {
    ...titleStyle,
    marginRight: "2vw",
    justifyContent: "right",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    color: "#4c1676",
    "&:hover": {
      color: "#ab82c5",
    },
  },
  title_topic: {
    ...titleStyle,
    alignItems: "start",
    justifyContent: "start",
  },
}));

const theme = createTheme({
  // Customize your theme here...
});

const Header = () => {
  const classes = useStyles();
  const [deptName, setDeptName] = useState("Department Name");
  const getDeptName = async () => {
    try {
      const response = await axios.get("https://128.122.136.144:8443/CUE/F");
      setDeptName(response.data.deptName);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDeptName();
  }, []);

  const location = useLocation();

  const getCurrentTitle = () => {
    switch (location.pathname) {
      case "/":
      default:
        return "Faculty";
      case "/cue/areaofstudy":
        return "Area Of Study";
      case "/cue/researchgroup":
        return "Research Group";
      case "/cue/facultydirectory":
        return "Faculty Directory";
      case "/cue/staff":
        return "Staff Directory";
      case "/cue/studentclub":
        return "Student Club";
      case "/cue/departmentmap":
        return "Department Map";
      case "/cue/event":
        return "Events";
    }
  };

  const { navvalue } = useContext(NavItem);
  const lastValue = navvalue[navvalue.length - 1].toUpperCase();

  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Grid container className={classes.gridmain1}>
        <Grid item xs={12} sm={6} md={8}>
          <Link to="/">
            <img src={logooo} alt="logo" className={classes.logo} style={{objectFit:'contain', mixBlendMode:'darken' }} />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} style={{ paddingTop: isSmScreen ? "2vh" : "1vh" }}>
          <Typography
            variant="h5"
            style={{ color: "#490d69" }}
            className={classes.title}
          >
            DEPARTMENT OF
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "#490d69" }}
            className={classes.title}
          >
            {deptName}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.gridmain2}>
        <Grid item xs={12} sm={6} md={8}>
          <Typography className={classes.title_topic}>{lastValue}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography style={{ cursor: "pointer" }} className={classes.title}>
            MORE INFORMATION
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* Rest of your app */}
    </ThemeProvider>
  );
};

export default App;
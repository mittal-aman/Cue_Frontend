import {
    Grid,
    makeStyles,
    Typography,
    useMediaQuery
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavState } from "../Contextapi";
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
    background: "#49126f",
    height: "100%",
    fontWeight: "bold",
    width: "100%"
  },
  gridmain2: {
    // backgroundImage: "linear-gradient(to right, #292929, #ffffff)",
    background: `rgb(36,39,40)`,
    background: `linear-gradient(90deg, rgba(36,39,40,1) 0%, rgba(255,255,255,1) 70%)`,
    height: "100%",
    width: "100%",
    paddingTop: "1vh",
    paddingBottom: "1vh",
    fontWeight: "bold",
    fontSize: "7rem",
    color: "black",
  },
  logo: {
    height: "10vh",
    weight: "10vw",
    maxWidth: "50%"
  },
  title: {
    ...titleStyle,
    marginRight: "2vw",
    justifyContent: "right",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    color: "#49126f",
    "&:hover": {
      color: "#ab82c5",
    },
  },
  title_topic: {
    ...titleStyle,
    marginRight: "2vw",
    justifyContent: "right"
  },
}));

const theme = createTheme({
  // Customize your theme here...
});
const environments = {
  test: "https://localhost:8443",
  prod: "https://128.122.136.144:8443"
};

const Header = () => {
  const classes = useStyles();
  const [deptName, setDeptName] = useState("Department Name");
  const getDeptName = async () => {
    try {
      const baseURL = process.env.NODE_ENV === 'development' ? environments.test : environments.prod;
  
      const response = await axios.get(`${baseURL}/CUE/F`);
      setDeptName(response.data.deptName);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDeptName();
  }, []);

  const location = useLocation();
  const { navvalue, setNavvalue } = NavState();
  const navigateToMenu = (navigationName) => {
    navvalue.push(navigationName)
    setNavvalue(navvalue);
  }
  const lastValue = navvalue[navvalue.length - 1].toUpperCase();

  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Grid container className={classes.gridmain1}>
        <Grid item xs={12} sm={6} md={8} style={{paddingLeft:16,paddingTop:4}}>
          <Link to="/">
            <img onClick={() => navigateToMenu("Faculty")} src={logooo} alt="logo" className={classes.logo} style={{ }} />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} style={{ paddingTop: isSmScreen ? "2vh" : "1vh" }}>
          <Typography
            variant="h5"
            style={{ color: "white" }}
            className={classes.title}
          >
            DEPARTMENT OF
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "white" }}
            className={classes.title}
          >
            {deptName}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.gridmain2}>
          <Typography className={classes.title_topic}>{lastValue}</Typography> 
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
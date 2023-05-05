import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useLocation } from "react-router-dom";
import {NavItem} from '../Contextapi';
import { useContext,useState,useEffect } from 'react';
import axios from "axios";


import logooo from '../images/logo.png';

const useStyles = makeStyles(() => ({

    gridmain1:{
        background:'#4A126F',
        height:'10vh',
        fontWeight: 'bold',
        width: '100%',
    },
    gridmain2:{
        background:'#ab82c5',
        height:'7vh',
        width: '100%',
        paddingLeft: '5vw',
        paddingRight: '5vw',
        paddingTop:'1.6vh',
        fontWeight: 'bold',
        fontSize:'7rem',
        color:'black',
    },
    logo:{
        height: '10vh',
        weight: '10vw',
        maxWidth: '50%'
    },
    title:{
      margin: 'auto',
      display: "flex",
      alignItems:'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize:'1.4vw'
    },
    title_topic:{
      margin: 'auto',
      display: "flex",
      alignItems:'start',
      justifyContent: 'start',
      fontWeight: 'bold',
      fontSize:'1.4vw'
    }
    
}));



const Header = () => {
  
  const classes = useStyles();
  
  const [deptName, setDeptName] = useState('')



  const getDeptName = async () =>{
    await axios.get("http://128.122.136.144:8080/CUE/F").then((response) => {
      setDeptName(response.data.deptName)
    })
  }

  useEffect(()=>{
    getDeptName();
  },[])

  

  const location = useLocation();

  const getCurrentTitle = () => {
    switch (location.pathname) {
      case "/":
      default:
        return "Faculty";
      case "/cue/aos":
        return "Area Of Study";
      case "/cue/rg":
        return "Research Group";
      case "/cue/fd":
        return "Faculty Directory";
      case "/cue/s":
        return "Staff Directory";
      case "/cue/sc":
        return "Student Club";
      case "/cue/dp":
        return "Department Map";
      case "/cue/e":
        return "Events";  
    }
  };

  const { navvalue } = useContext(NavItem);

  const lastValue = navvalue[navvalue.length - 1];
  

  return (
    <div>
    <Grid container className={classes.gridmain1}>
        <Grid item xs={6} md={9}>
            <img src={logooo} alt="logo" className={classes.logo} />
        </Grid>
        <Grid item xs={6} md={3} style={{paddingTop:'1vh'}}>
            <Typography variant="h5" style={{color:'white'}} className={classes.title}>DEPARTMENT OF {deptName}</Typography>

        </Grid>
    </Grid>
    <Grid container className={classes.gridmain2}>

        <Grid item xs={6} md={10}>

            <Typography sx={{ fontWeight: 'bold',}} className={classes.title_topic}>
              {lastValue}
              </Typography>

        </Grid>
        <Grid item xs={6} md={2}>

            <Typography sx={{ fontWeight: 'bold', }} className={classes.title}>More Information</Typography>
        
        </Grid>

    </Grid>
    </div>
  );
}

export default Header




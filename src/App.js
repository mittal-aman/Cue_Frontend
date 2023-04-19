//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import  { useState,useEffect } from 'react'

import Header from './Components/Header'
import Main from './Components/Main'
import {useNavigate} from 'react-router-dom'
import AlertDialog from "./Components/AlertBox";

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({  
  
      App : {
        backgroundColor : '#803DCD',
        color: 'white',
        minHeight:"100vh", 
      },
    }));
function App() {

  // const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      <AlertDialog/>
    }, 3000)
  }, [])
  
  
    const classes = useStyles()
    return (
   <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Main/>
      </div>
   </BrowserRouter>
  );
}

export default App;

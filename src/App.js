//import logo from './logo.svg';
import 'normalize.css';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import AlertDialog from "./Components/AlertBox";
import Header from './Components/Header';
import Main from './Components/Main';

import { makeStyles } from '@material-ui/core';
import Contextapi from './Contextapi';


const useStyles = makeStyles(() => ({  
  
      App : {
        backgroundColor : '#b1adac',
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
      <Contextapi>
        <BrowserRouter>
          <div className={classes.App}>
            <Header />
            <Main />
          </div>
        </BrowserRouter>
      </Contextapi>
  );
}

export default App;

import React from 'react';
import  { useState,useEffect } from 'react'
import { List, ListItem, ListItemText } from '@mui/material';
import axios from "axios";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'
import { NavState } from "../../Contextapi";




const useStyle = makeStyles(()=>({
  mainList:{
    overflow: 'auto',height:'79vh',
    textAlign:'center',width: '60%',
    margin:'auto',
  },
  list:{
    textAlign:'center',

  },
  innerList:{
    textAlign:'center',
    border: '3px solid red',
    
    
    
  }
}))


const ListAos = () => {
  // {setSelectedTopic}
  const { navvalue, setNavvalue } = NavState();
  
  const navigateToMenu = (navigationName) => {
    navvalue.push(navigationName)
    setNavvalue(navvalue);
  }
  
  const [mydata, setMydata] = useState();
  const classes = useStyle();


  const getteacherdata = async () => {

    await axios.get("https://gautamth1254.github.io/Movie-json/db.json").then((response) => {
      console.log(response)
      setMydata(response.data[0].movies)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(()=>{
    getteacherdata();
  },[])

  // function handleTopicClick(title) {
  //   setSelectedTopic(title);
  // }

  return (
  
    <List className={classes.mainList}>
      {mydata?.map((movies) => {
            const {id,title} = movies;
      return(      
      <ListItem button component={Link} key={id} to={`/cue/aos/${id}`} className={classes.list} onClick={() => navigateToMenu(title)}>
        <ListItemText primary={title} className={classes.innerList} />
      </ListItem>
      )
    })}
    </List>
 
  );
}

export default ListAos
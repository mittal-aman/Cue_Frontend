import React from 'react';
import  { useState,useEffect } from 'react'
import { List, ListItem, ListItemText } from '@mui/material';
import axios from "axios";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(()=>({
  mainList:{
    overflow: 'auto',height:'83vh',
    fontFamily: 'gotham-italics'
  },
  list:{
    textAlign:'center',

  }
}))

const ListAos = () => {

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

  return (
  
    <List className={classes.mainList}>
      <h1 style={{textAlign:'center'}}>  Please select the Research Group</h1>
      {mydata?.map((movies) => {
            const {id,title} = movies;
      return(     
       
      
          <ListItem button component={Link} key={id} to={`/cue/areaofstudy/${id}`} className={classes.list}>
            <h4>{id}</h4> &nbsp; &nbsp; &nbsp;
            <ListItemText primary={title} />
          </ListItem>
        
     
      )
    })}
    </List>
 
  );
}

export default ListAos
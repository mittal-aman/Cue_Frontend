import React from 'react';
import  { useState,useEffect } from 'react'
import { List, ListItem, ListItemText } from '@mui/material';
import axios from "axios";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(()=>({
  mainList:{
    overflow: 'auto',height:'83vh'
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
      {mydata?.map((movies) => {
            const {id,title} = movies;
      return(      
      <ListItem button component={Link} key={id} to={`/cue/aos/${id}`} className={classes.list}>
        <ListItemText primary={title} />
      </ListItem>
      )
    })}
    </List>
 
  );
}

export default ListAos
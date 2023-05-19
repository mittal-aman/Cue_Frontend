import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import LeftArrow from '../../images/LeftArrow.png';
import RightArrow from '../../images/RightArrow.png';


const useStyles = makeStyles(()=>({

  slider:{
    width: '90%',
    margin: 'auto',
          
  },
  div_box:{
    height: '30vh',
    width: '10vw',
    background: '#eee6f3',
    margin: '40px 0px',
    border: '1px solid #ab82c5',
  },
  mainGrid:{
    height: "83vh",
    width:'100%',
    // background: 'black',

  },

  para:{
    height: '50%',
    // background: 'blue',
  },
  carousel:{
    height: '50%',
    width: '50%',
    zIndex:'1',
    // background: 'white',
  }
  

}))

const AreaofStudy = () => {

  const [mydata,setMydata] = useState();

  const {id} =  useParams();


  const classes = useStyles();

  
  useEffect(()=>{
    axios.get("https://gautamth1254.github.io/Movie-json/db.json").then((response) => {
      console.log(response.data[0].movies[id-1])
      // const users = Object.values(response.data[0].movies);
      // console.log(typeof users);      
      setMydata(response.data[0].movies[id-1])
    }).catch((err) => {
      console.log(err)
    })


  },[id])



  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} style={{height:'50px',width:"40px",zIndex:'2',left: '-50px'}}/>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} style={{height:'50px',width:"40px",zIndex:'2',right: '-50px'}}/>
  );

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/')
  //   }, 5000)
  // }, [])

  const settings = {  
    centerMode: true,
    centerPadding: "0px",
    speed: 500,
    rows: 1,
    slidesToShow: 4,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,    
  };

  console.log(id);

  return (
    <div>
      <Grid container className={classes.mainGrid}>
          <Grid item xs={12} className={classes.para}>  
              <p>hello gautam</p>
              
              <h1>{mydata?.title}</h1>
                
          </Grid>


          <Grid item xs={12} className={classes.carousel}>
    
          {/* </Slider> */}
          
            <Slider {...settings} className={classes.slider}>
            
            {mydata?.Images?.map((image,index) => {
              
              
              
              return(
                
                <div className={classes.div_box} key={id}>
                    <img src={image} id={index} alt='teacher1' style={{height: '30vh',width: '16.8vw',}} />
                    <h1 style={{textAlign: 'center',margin: 'auto',fontSize:'1.2vw',paddingTop:'1vh',}}>{mydata?.title}</h1>
                </div>
              )
            })}
              
            
            </Slider>
                        
            
          </Grid>
      </Grid>
    </div>
  )
}

export default AreaofStudy
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import RightArrow from '../images/RightArrow.png';
import LeftArrow from '../images/LeftArrow.png';
import  { useState,useEffect } from 'react'
import axios from "axios";
import api from '../Api/apiWrapper';





const useStyle = makeStyles(() =>({


    slider:{
      width: '90%',
      margin: 'auto',
            
    },

    div_box:{
      height: '30vh',
      // paddingBottom: '3vh',
      width: '10vw',
      background: '#eee6f3',
      margin: '40px 0px',
      border: '1px solid #ab82c5',
    //   offset: '10px 30px',

    },
}))

const Carousel=()=> {

  const [mydata, setMydata] = useState();
  // const [isError, setIsError] = useState("");
  
  // const getteacherdata = async () => {
  //   try {
  //     const res = await axios.get("https://gautamth1254.github.io/Movie-json/db.json");
  //     console.log(res.data.movies);
  //     setMydata(res.data.movies)
  //   }
  //   catch(error){
  //     console.log(error.message);
  //   }
  // }
  const getteacherdata = async () => {

    await axios.get("http://128.122.136.144:8080/CUE/F").then((response) => {
      console.log(response.data)
      // console.log(typeof response.data[0].movies);
      // setMydata(response.data[0].movies)
      // console.log(typeof response.data[0].movies);
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(()=>{
    getteacherdata();
  },[])

  const classes = useStyle();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} style={{height:'50px',width:"40px",left: '-2.7vw',}}/>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} style={{height:'50px',width:"40px",right: '-2.7vw',}}/>
  );



  const settings = {
      
    centerMode: true,
    centerPadding: "0px",
    speed: 500,
    rows: 2,
    slidesToShow: 4,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    
  };

  return (
    <div>
       
        <Slider {...settings} className={classes.slider}>
       
          {mydata?.map((movies) => {
            
            const {id,posterUrl,title} = movies;
            
            return(
              
              <div className={classes.div_box} key={id}>
                  <img src={posterUrl} alt='teacher1' style={{height: '30vh',width: '16.8vw',}} />
                  <h1 style={{textAlign: 'center',margin: 'auto',fontSize:'1.2vw',paddingTop:'1vh',}}>{title}</h1>
              </div>
            )
          })}
           
          
        </Slider>
      </div>
  )
}

export default Carousel;
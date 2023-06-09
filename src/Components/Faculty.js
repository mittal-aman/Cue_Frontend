import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import RightArrow from '../images/RightArrow.png';
import LeftArrow from '../images/LeftArrow.png';
import  { useState,useEffect } from 'react'
import { API }  from '../Api/apiWrapper';





const useStyle = makeStyles(() =>({


    slider:{
      width: '90%',
      height: '79vh',
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

const Faculty=()=> {

  const [mydata, setMydata] = useState();
 
  const getteacherdata = () => {

    // console.log(api);
    API.getFaculty().then((data) => {
      console.log(data);
      // console.log(typeof response.data[0].movies);
      setMydata(data.personnels)
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
    <img src={LeftArrow} alt="prevArrow" {...props} style={{height:'40px',width:"30px",left: '-2.7vw',}}/>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} style={{height:'40px',width:"30px",right: '-2.7vw',}}/>
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
       
          {mydata?.map((personnels) => {
            
            const {netId,firstName,lastName,imageUrl,personalUrl} = personnels;
            
            return(
              
              <div className={classes.div_box} key={netId}>
                <a href={personalUrl} target="_self" rel="noopener noreferrer" style={{color: '#FFFFFF',textDecoration: 'none'}}>
                  <img src={imageUrl} alt='teacher1' style={{height: '30vh',width: '16.8vw',}} />
                  <h1 style={{textAlign: 'center',margin: 'auto',fontSize:'1.2vw',paddingTop:'1vh',}}>{firstName} {lastName}</h1>
                </a>
              </div>
            )
          })}
           
          
        </Slider>
      </div>
  )
}

export default Faculty;
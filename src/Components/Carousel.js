import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import RightArrow from '../images/RightArrow.png';
import LeftArrow from '../images/LeftArrow.png';



const useStyle = makeStyles(() =>({


    slider:{
      width: '90%',
      margin: 'auto',
            
    },

    div_box:{
      height: '30vh',
      width: '10 vw',
      background: '#eee6f3',
      margin: '40px 0px',
      border: '1px solid #ab82c5',
    //   offset: '10px 30px',

    },
}))

const Carousel=()=> {

  const classes = useStyle();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} style={{height:'50px',width:"40px"}}/>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} style={{height:'50px',width:"40px"}}/>
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
          <div className={classes.div_box}>
            <h3>1</h3>
          </div>
          <div className={classes.div_box}>
            <h3>2</h3>
          </div>
          <div className={classes.div_box}>
            <h3>3</h3>
          </div>
          <div className={classes.div_box}>
            <h3>4</h3>
          </div>
          <div className={classes.div_box}>
            <h3>5</h3>
          </div>
          <div className={classes.div_box}>
            <h3>6</h3>
          </div>
          <div className={classes.div_box}>
            <h3>7</h3>
          </div>
          <div className={classes.div_box}>
            <h3>8</h3>
          </div>
          <div className={classes.div_box}>
            <h3>9</h3>
          </div>
          <div className={classes.div_box}>
            <h3>10</h3>
          </div>
          <div className={classes.div_box}>
            <h3>11</h3>
          </div>
          <div className={classes.div_box}>
            <h3>12</h3>
          </div>
          <div className={classes.div_box}>
            <h3>13</h3>
          </div>
          <div className={classes.div_box}>
            <h3>14</h3>
          </div>
          <div className={classes.div_box}>
            <h3>15</h3>
          </div>
          <div className={classes.div_box}>
            <h3>16</h3>
          </div>
          
          
        </Slider>
      </div>
  )
}

export default Carousel;
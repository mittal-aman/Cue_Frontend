import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../images/RightArrow.png";
import LeftArrow from "../images/LeftArrow.png";
import { API } from "../Api/apiWrapper";
import noImageAvailable from "../images/no-image.jpg";
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  slider: {
    width: "82%",
    margin: "auto", 
    alignContent: "center",
    alignItems: "center",
    "& .slick-track":{
      height: '81vh'
    }
  },
  divBox: {
    height: "auto",
    marginTop: "36px",
    display: "flex",
    justifyContent: "center",
    "& img": {
      height: "100%",
      width: "100%",
      display: "block",
      objectFit: "cover",
      objectPosition: "center",
    },
  },
  arrow: {
    position: "absolute",
    top: "calc(38% - 20px)",
    margin: "auto",
    height: "200px",
    width: "50px",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  leftArrow: {
    left: "-5.0vw",
  },
  rightArrow: {
    right: "-5.0vw",
  },
}));

const FacultyByFacultyType = () => {
  const [teacherData, setTeacherData] = useState([]);
  const { facultyType } = useParams();
  const classes = useStyles();

  const getTeacherData = async () => {
    try {
      const { personnels } = await API.getFacultyByFacultyType(facultyType);
      setTeacherData(personnels);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeacherData();
  }, []);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img
      src={LeftArrow}
      alt="previous arrow"
      {...props}
      className={`${classes.arrow} ${classes.leftArrow}`}
    />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img
      src={RightArrow}
      alt="next arrow"
      {...props}
      className={`${classes.arrow} ${classes.rightArrow}`}
    />
  );

  const sliderSettings = {
    swipeToSlide: true,
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: Math.min(5, teacherData.length),
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    dotsClass: "slick-dots slick-thumb",
    rows: 2, // Adjust the number of rows based on the number of items
  };

  return (
    (teacherData.length) &&
    <>
    <div style={{ height: "100%", width: "100%",overflowY:"auto" }}>
    <div>
      <Slider {...sliderSettings} className={classes.slider}>
        {teacherData.map(
          ({ netId, firstName, lastName, imageUrl, personalUrl,officeNum, title }) => (
            <div className={classes.divBox} key={netId}>
              <a
                href={personalUrl}
                target="_self"
                rel="noopener noreferrer"
                style={{ color: "#FFFFFF", textDecoration: "none" }}
              >
                {imageUrl &&
                /\.(jpe?g|png|gif)(?:[\?\#].*)?$/i.test(imageUrl) ? (
                  <img
                    src={imageUrl}
                    alt={`${firstName} ${lastName}`}
                    style={{ height: '27vh'}}
                  />
                ) : (
                  <img
                    src={noImageAvailable}
                    alt="No Image Available"
                    style={{ height: '27vh' }}
                  />
                )}
                <div style={{height:'7vh',
                                      background: `linear-gradient(90deg, rgba(199,199,199,1) 1%, rgba(255,255,255,1) 7%,rgba(255,255,255,1) 97%, rgba(199,199,199,1) 99%)`,
                                      overflowY:'auto'
                           }}>
                <h1
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    fontSize: "0.82vw",
                    fontFamily:'gotham-medium',
                    paddingTop: "1.4vh",
                    color: "Black",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  {firstName} {lastName} <br />
                  </h1>
                  <h1
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    fontSize: "0.76vw",
                    paddingTop: "0.2vh",
                    color: "Black",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  {title.length ? title : ''}{title.length && officeNum.length ? ' , ' : ''}{officeNum.length ? officeNum : ''}
                </h1>
                </div>
              </a>
            </div>
          )
        )}
      </Slider>
    </div>
    </div>
    </>
  );
};

export default FacultyByFacultyType;

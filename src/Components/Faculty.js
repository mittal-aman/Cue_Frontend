import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "../images/RightArrow.png";
import LeftArrow from "../images/LeftArrow.png";
import { API } from "../Api/apiWrapper";
import noImageAvailable from "../images/no-image.jpg";

const useStyles = makeStyles(() => ({
  slider: {
    width: "85%",
    height: "85%",
    margin: "auto", 
    alignContent: "center",
    alignItems: "center",
  },
  divBox: {
    alignContent: "center",
    alignItems: "center",
    height: "30vh",
    width: "30vh",
    margin: "43px auto",
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
    top: "calc(50% - 40px)",
    margin: "auto",
    height: "90px",
    width: "50px",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  leftArrow: {
    left: "-3.7vw",
  },
  rightArrow: {
    right: "-3.7vw",
  },
}));

const Faculty = () => {
  const [teacherData, setTeacherData] = useState([]);
  const classes = useStyles();

  const getTeacherData = async () => {
    try {
      const { personnels } = await API.getFaculty();
      console.log(personnels);
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
    slidesToShow: Math.min(4, teacherData.length),
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    dotsClass: "slick-dots slick-thumb",
    rows: 2, // Adjust the number of rows based on the number of items
  };

  return (
    <div>
      <Slider {...sliderSettings} className={classes.slider}>
        {teacherData.map(
          ({ netId, firstName, lastName, imageUrl, personalUrl }) => (
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
                    style={{ }}
                  />
                ) : (
                  <img
                    src={noImageAvailable}
                    alt="No Image Available"
                    style={{  }}
                  />
                )}
                <h1
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    fontSize: "1.2vw",
                    paddingTop: "1vh",
                    color: "Black",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)"
                  }}
                >
                  {lastName} {firstName}
                </h1>
              </a>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default Faculty;

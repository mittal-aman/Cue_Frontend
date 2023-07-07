import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { API } from '../../Api/apiWrapper';
import LeftArrow from '../../images/LeftArrow.png';
import noImageAvailable from "../../images/no-image.jpg";
import RightArrow from '../../images/RightArrow.png';

const useStyles = makeStyles(() => ({
  slider: {
    width: '85%',
    margin: 'auto',
    alignContent: "center",
    alignItems: "center"
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
      objectFit: "contain",
      objectPosition: "center",
    },
  },
  arrow: {
    position: "absolute",
    top: "calc(22%)",
    margin: "auto",
    height: "200px",
    width: "50px",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  mainGrid: {
    height: "100%",
    width: '100%'
  },
  para: {
    height: '50%',
    margin: '-30px 30px 0 85px',
    alignItems: "center",
    display: "flex"
  },
  carousel: {
    height: '50%',
    overflowY: 'auto'
  },
  centeredSlider: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}));

const AreaofStudy = () => {
  const [teacherData, setTeacherData] = useState(null);
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const classes = useStyles();

  const getAos = useCallback(async () => {
    try {
      const response = await API.getAreaOfStudy(decodedTitle);
      setTeacherData(response);
    } catch (error) {
      console.log(error);
    }
  }, [decodedTitle]);

  useEffect(() => {
    getAos();
  }, [getAos]);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} className={classes.arrow} style={{ left: '-5.0vw' }} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} className={classes.arrow} style={{  right: '-5.0vw'}} />
  );

  const itemCount = teacherData?.personnels?.length || 0;

  const sliderSettings = {
    swipeToSlide: true,
    dots: true,
    speed: 500,
    slidesToShow: Math.min(5, itemCount),
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    dotsClass: "slick-dots slick-thumb",
    rows: 1,
    infinite: false
  };

  if (itemCount > 0 && itemCount < 5) {
    sliderSettings.variableWidth = true;
  }

  return (
    <Grid container className={classes.mainGrid}>
      <Grid item xs={12} className={classes.para}>
        <h2>{teacherData?.description}</h2>
      </Grid>
      <Grid item xs={12} className={classes.carousel}>
        <Slider {...sliderSettings} className={classes.slider}>
          {teacherData?.personnels?.map(({ netId, firstName, lastName, imageUrl, personalUrl, officeNum, title }) => (
            <div className={`${classes.divBox} ${itemCount < 5 ? classes.centeredSlider : ''}`} key={netId}>
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
                      style={{ width:'100%',height: '27vh' }}
                    />
                  ) : (
                    <img
                      src={noImageAvailable}
                      alt="No Image Available"
                      style={{ width:'100%',height: '27vh' }}
                    />
                  )}
                <div
                  style={{
                    height: '7vh',
                    background: `linear-gradient(90deg, rgba(199,199,199,1) 1%, rgba(255,255,255,1) 7%,rgba(255,255,255,1) 97%, rgba(199,199,199,1) 99%)`,
                    overflowY: 'auto'
                  }}
                >
                  <h1
                    style={{
                      margin: "auto",
                      textAlign: "center",
                      fontSize: "0.82vw",
                      fontFamily: 'gotham-medium',
                      paddingTop: "1.4vh",
                      color: "black",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)"
                    }}
                  >
                    {firstName} {lastName}
                    <br />
                  </h1>
                  <h1
                    style={{
                      margin: "auto",
                      textAlign: "center",
                      fontSize: "0.76vw",
                      paddingTop: "0.2vh",
                      color: "black",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)"
                    }}
                  >
                    {title.length ? title : 'TITLE'}, {officeNum.length ? officeNum : 'ROOM #'}
                  </h1>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
};

export default AreaofStudy;

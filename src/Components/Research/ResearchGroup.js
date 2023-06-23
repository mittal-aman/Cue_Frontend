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
    width: '90%',
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
      height: "27vh",
      width:"100%",
      display: "block",
      objectFit: "contain",
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
  mainGrid: {
    height: "100%",
    width: '100%'
  },
  para: {
    height: '50%',  
    margin: '-30px 30px 0 30px',
    alignItems: "center",
    display: "flex"
  },
  carousel: {
    height: '50%',
    overflowY:'auto'
  }
}));

const AreaofStudy = () => {
  const [teacherData, setTeacherData] = useState(null);
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const classes = useStyles();

  const getAos = useCallback(async () => {
    try {
      const response = await API.getResearchGroup(decodedTitle);
      console.log(response)
      setTeacherData(response);
    } catch (error) {
      console.log(error);
    }
  }, [decodedTitle]);

  useEffect(() => {
    getAos();
  }, [getAos]);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} style={{ height: '50px', width: "40px", zIndex: '2', left: '-50px' }} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} style={{ height: '50px', width: "40px", zIndex: '2', right: '-50px' }} />
  );

  const sliderSettings = {
    swipeToSlide: true,
    infinite: false,
    dots: true,
    speed: 500,
    slidesToShow: Math.min(5, teacherData?.personnels?.length|| 0 ),
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    dotsClass: "slick-dots slick-thumb",
    rows: 1
  };

  if (teacherData?.personnels?.length < 5) {
    // If true, add the variableWidth property
    sliderSettings.variableWidth = true;
  }
    return (
      <Grid container className={classes.mainGrid}>
        <Grid item xs={12} className={classes.para}>
          <h2>{teacherData?.description}</h2>
        </Grid>
        <Grid item xs={12} className={classes.carousel}>
          <Slider {...sliderSettings} className={classes.slider}>
          {teacherData?.personnels?.map(({ netId, firstName, lastName, imageUrl, personalUrl, officeNum, title }) => {
            console.log(imageUrl); // Add this line to log the imageUrl
            return (
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
                        style={{ height: '27vh' }}
                      />
                    ) : (
                      <img
                        src={noImageAvailable}
                        alt="No Image Available"
                        style={{ height: '27vh' }}
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
          );
        })}
          </Slider>
        </Grid>
      </Grid>
  );
};

export default AreaofStudy;
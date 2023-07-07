import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { NavState } from "../Contextapi";
import { API } from "../Api/apiWrapper";
import React, { useState, useEffect } from "react";

const useStyle = makeStyles(() => ({
  grid_main: {
    paddingLeft: "1em",
    paddingRight: "1em",
    marginTop: "36px",
  },
  grid: {
    display: "flex",
    alignItems: "center",
    height: "7vh",
    boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
    padding: "0 10px",
    boxSizing: "border-box",
  },
  navLink: {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.4vw",
    color: "white",
  },
}));

const List = () => {
  const navigate = useNavigate();
  const { navvalue, setNavvalue } = NavState();
  

  const location = useLocation();

  const reverseData = () => {
    navvalue.pop();
    setNavvalue(navvalue);
  };

  const [facultyItems, setFacultyItems] = useState([]);

  useEffect(() => {
    const fetchFacultyItems = async () => {
      try {
        const response = await API.getFacultyItems();
        setFacultyItems(response);
      } catch (error) {
        console.error("Error fetching faculty items:", error);
      }
    };
    fetchFacultyItems();
  }, []);
  
  const navigateToMenu = async (navigationName) => {
    if (navigationName === "Student Club") {
      navvalue.push(navigationName);
      setNavvalue(navvalue);
      try {
        const response = await API.getStudentClub();
        const url = response;
        window.open(url, "_self"); 
      } catch (error) {
        console.error("Error opening URL:", error);
      }
    } else {
      navvalue.push(navigationName);
      setNavvalue(navvalue);
    }
  };

  const menuItems = [
    { title: "Area of Study", path: "/cue/areaofstudy", gradient: "to left" },
    {
      title: "Research Group",
      path: "/cue/researchgroup",
      gradient: "to right",
    },
    {
      title: "Faculty Directory",
      path: "/cue/facultydirectory",
      gradient: "to left",
    },
    { title: "Staff Directory", path: "/cue/staff", gradient: "to right" },
    { title: "Student Club", gradient: "to left" },
    {
      title: "Department Map",
      path: "/cue/departmentmap",
      gradient: "to right",
    },
    { title: "Events", path: "/cue/event", gradient: "to left" }
  ];

  const renderMenuItem = (item, index) => (
    <Grid
      key={index}
      item
      className={classes.grid}
      xs={12}
      style={{
        background: `linear-gradient(0deg,rgba(173,136,200,1) 7%, rgba(73,18,111,1) 18%,rgba(73,18,111,1) 82%, rgba(173,136,200,1) 93%)`,
        marginBottom: "9px", // Add margin bottom here
        justifyContent: "center",
        color: "#330662",
      }}
    >
      <Button onClick={() => navigateToMenu(item.title)}>
        <NavLink
          className={classes.navLink}
          style={{ color: "white" }}
          to={item.path}
        >
          {item.title}
        </NavLink>
      </Button>
    </Grid>
  );

  const classes = useStyle();

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.grid_main}
      >
        {location.pathname !== "/cue/facultydirectory"
          ? menuItems.map(renderMenuItem)
          : facultyItems.map((item, index) => (
              <Grid
                key={index}
                item
                className={classes.grid}
                xs={12}
                style={{
                  background: `linear-gradient(0deg,rgba(173,136,200,1) 7%, rgba(73,18,111,1) 18%,rgba(73,18,111,1) 82%, rgba(173,136,200,1) 93%)`,
                  justifyContent: "center",
                  color: "#330662",
                  marginBottom: "15px", // Add margin bottom here
                }}
              >
                <Button onClick={() => navigateToMenu(item)}>
                  <NavLink
                    className={classes.navLink}
                    style={{ color: "white" }}
                    to={`/cue/facultydirectory/${item}`}
                  >
                    {item}
                  </NavLink>
                </Button>
              </Grid>
            ))}
        {location.pathname !== "/" && (
          <Grid
            item
            className={classes.grid}
            xs={12}
            style={{
              background: `linear-gradient(0deg,rgba(173,136,200,1) 7%, rgba(73,18,111,1) 18%,rgba(73,18,111,1) 82%, rgba(173,136,200,1) 93%)`,
              justifyContent: "center",
              color: "#330662",
              marginBottom: "15px", // Add margin bottom here
            }}
          >
            <Button onClick={() => navigateToMenu("Faculty")}>
              <NavLink
                className={classes.navLink}
                style={{ color: "white" }}
                to="/"
              >
                Main Menu
              </NavLink>
            </Button>
          </Grid>
        )}
        {location.pathname !== "/" ? (
          <Grid
            item
            className={classes.grid}
            xs={12}
            style={{
              background: `linear-gradient(0deg,rgba(173,136,200,1) 7%, rgba(73,18,111,1) 18%,rgba(73,18,111,1) 82%, rgba(173,136,200,1) 93%)`,
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => {
                navigate(-1);
                reverseData();
              }}
            >
              <div
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.4vw",
                }}
              >
                Prev.Page
              </div>
            </Button>
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default List;
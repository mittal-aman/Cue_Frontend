import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { NavState } from "../Contextapi";

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
    padding: "0 20px",
    boxSizing: "border-box",
  },
  prevButton: {
    backgroundColor: "#3f0d60",
    borderRadius: "20px",
    padding: "17px 30px",
    cursor: "pointer",
    borderColor: "#d8b1f3",
    color: "white",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1.4vw",
  },
  navLink: {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.4vw",
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

  const navigateToMenu = (navigationName) => {
    navvalue.push(navigationName);
    setNavvalue(navvalue);
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
    { title: "Student Club", path: "/cue/studentclub", gradient: "to left" },
    {
      title: "Department Map",
      path: "/cue/departmentmap",
      gradient: "to right",
    },
    { title: "Events", path: "/cue/event", gradient: "to left" },
  ];

  const renderMenuItem = (item, index) => (
    <Grid
      key={index}
      item
      className={classes.grid}
      xs={12}
      style={{
        // background: `rgb(255,255,255)`,
        // background: `radial-gradient(circle, rgba(255,255,255,1) 64%, rgba(84,84,84,1) 77%)`,
        background: `rgb(84,84,84)`,
        background: `linear-gradient(90deg, rgba(56,56,56,1) 10%, rgba(255,255,255,1) 25%,rgba(255,255,255,1) 75%, rgba(56,56,56,1) 90%)`,

        // backgroundImage: `linear-gradient(${item.gradient}, #ab82c5, #4A126F)`,
        marginBottom: "15px", // Add margin bottom here
        justifyContent: "center",
        color: "#330662",
      }}
    >
      <Button onClick={() => navigateToMenu(item.title)}>
        <NavLink
          className={classes.navLink}
          style={{ color: "#49126f" }}
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
        {menuItems.map(renderMenuItem)}
        {location.pathname !== "/" && (
          <Grid
            item
            className={classes.grid}
            xs={12}
            style={{
              background: `rgb(255,255,255)`,
              background: `radial-gradient(circle, rgba(255,255,255,1) 64%, rgba(84,84,84,1) 77%)`,

              // backgroundImage: `linear-gradient(${item.gradient}, #ab82c5, #4A126F)`,
              justifyContent: "center",
            }}
          >
            <Button onClick={() => navigateToMenu("Faculty")}>
              <NavLink
                className={classes.navLink}
                style={{ color: "#49126f" }}
                to="/"
              >
                Main Menu
              </NavLink>
            </Button>
          </Grid>
        )}
      </Grid>
      <br />
      {location.pathname !== "/" && (
        <Grid item className={classes.prev} xs={12}>
          <button
            onClick={() => {
              navigate(-1);
              reverseData();
            }}
            className={classes.prevButton}
          >
            Prev.Page
          </button>
        </Grid>
      )}
    </div>
  );
};

export default List;

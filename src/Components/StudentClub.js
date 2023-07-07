import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  studentClub: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    margin: '20px'
  },
  clubTitle: {
    color: '#333',
    textAlign: 'center',
  },
  clubDescription: {
    color: '#333',
    textAlign: 'center',
  },
  eventsTitle: {
    color: '#333',
    marginBottom: '10px',
  },
  eventsList: {
    listStyleType: 'none',
    padding: '0',
  },
  eventLink: {
    marginBottom: '5px',
  },
  eventLinkAnchor: {
    color: '#007bff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const StudentClub = () => {
  const classes = useStyles();

  return (
    <div className={classes.studentClub}>
      <h1 className={classes.clubTitle}>Welcome to the Student Club</h1>
      <div className={classes.clubEvents}>
        <h2 className={classes.eventsTitle}>Upcoming Events</h2>
        <ul className={classes.eventsList}>
          <li className={classes.eventLink}>
            <a
              className={classes.eventLinkAnchor}
              href="https://engineering.nyu.edu/academics/departments/civil-and-urban-engineering/undergraduate-programs/student-clubs"
            >
              Event 1
            </a>
          </li>
          {/* Add more event links as needed */}
        </ul>
      </div>
    </div>
  );
}

export default StudentClub;

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavState } from '../../Contextapi';
import { API } from '../../Api/apiWrapper';

const useStyles = makeStyles((theme) => ({
  mainList: {
    overflow: 'auto',
    height: '79vh',
    color: 'black'
  },
  centerText: {
    textAlign: 'center',
    fontFamily: 'gotham-medium',
    color: 'black'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    color: 'black'
  },
  listItemText: {
    marginLeft: theme.spacing(1),
    fontFamily: 'gotham-mediumitalic',
    color: 'black'
  }
}));

const ListAos = () => {
  const { navvalue, setNavvalue } = NavState();
  const [mydata, setMydata] = useState([]);
  const classes = useStyles();

  const navigateToMenu = (navigationName) => {
    setNavvalue([...navvalue, navigationName]);
  };

  const getListAos = async () => {
    try {
      const response = await API.getAreaOfStudyList();
      setMydata(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListAos();
  }, []);

  return (
    <List className={classes.mainList}>
      <h1 className={classes.centerText}>Please select the Department</h1>
      {mydata.map((infoList) => {
        const { id, title } = infoList;
        return (
          <ListItem
            button
            component={Link}
            key={title}
            to={`/cue/areaofstudy/${title}`}
            className={classes.listItem}
            onClick={() => navigateToMenu(title)}
          >
            <h4>{id}.</h4>&nbsp; &nbsp; &nbsp;
            <ListItemText primary={title} className={classes.listItemText} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListAos;
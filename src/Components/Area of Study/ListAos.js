import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../Api/apiWrapper';
import { NavState } from '../../Contextapi';

const useStyles = makeStyles((theme) => ({
  mainList: {
    overflow: 'auto',
    height: '79vh',
    color: 'black'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '30px',
    color: 'black',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent:'center'
  },
  listItemText: {
    marginLeft: theme.spacing(1),
    color: '#49126f',
    display:'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent:'center',
    "& span": {
      fontSize:'30px',
      fontFamily: 'gotham-bold',
      padding: "20px 20px"
    }
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
      const unTrimmedData = response.map((info) => ({
        ...info,
        title: info.title
      }));
      setMydata(unTrimmedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListAos();
  }, []);

  return (
    <List className={classes.mainList}>
      {mydata.map((infoList) => {
        const { id, title } = infoList;
        const encodedTitle = encodeURIComponent(title);
        return (
          <ListItem
            button
            component={Link}
            key={title}
            to={`/cue/areaofstudy/${encodedTitle}`}
            className={classes.listItem}
            onClick={() => navigateToMenu(title)}
          >
            <ListItemText primary={title} className={classes.listItemText} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ListAos;
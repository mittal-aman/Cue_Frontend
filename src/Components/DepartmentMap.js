import React, { useContext } from 'react';
import { NavItem } from '../Contextapi';
import noImageAvailable from "../images/CUE.jpg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const DepartmentMap = () => {
  const { setNavvalue } = useContext(NavItem);

  const handleClick = () => {
    setNavvalue('Department');
  };

  return (
    <div style={styles.container}>
      <TransformWrapper>
        <TransformComponent>
          <div style={styles.imageWrapper}>
            <img src={noImageAvailable} alt="DepartmentMap" style={styles.image} />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    height:'100%'
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

export default DepartmentMap;


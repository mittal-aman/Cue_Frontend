import React, { createContext,useState ,useContext } from 'react'

export const NavItem = createContext();

const Contextapi = (props) => {

    const [navvalue, setNavvalue] = useState(['Faculty']);
    // const [deptName, setdeptName] = useState('Department of civil & urban Engineering');
  return (
    <NavItem.Provider value={{ navvalue, setNavvalue}}>
      {props.children}
    </NavItem.Provider>
  )
}

export default Contextapi

export const NavState = () => {
    return useContext(NavItem);
};
  
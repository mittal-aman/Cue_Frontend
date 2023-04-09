import React, { createContext,useState ,useContext } from 'react'

const NavItem = createContext();

const Contextapi = ({children}) => {

    const [navvalue, setNavvalue] = useState("Faculty");
  return (
    <NavItem.Provider value={{ navvalue, setNavvalue}}>
      {children}
    </NavItem.Provider>
  )
}

export default Contextapi

export const NavState = () => {
    return useContext(NavItem);
  };
  
import React from 'react'
import  { useState,useEffect } from 'react'
import { useContext } from 'react';
import {NavItem} from '../Contextapi';


import {useNavigate} from 'react-router-dom'

const DepartmentMap = () => {

  const { setNavvalue } = useContext(NavItem);

  const handleClick = () => {
    setNavvalue('Department');
  };
  
  return (

    <div>
      hello
    </div>

  )
}

export default DepartmentMap












//  const navigate = useNavigate()

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/')
  //   }, 100)
  // }, [])



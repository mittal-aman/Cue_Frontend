import React from 'react'
import  { useState,useEffect } from 'react'

  import {useNavigate} from 'react-router-dom'

const DepartmentMap = () => {

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 10000)
  }, [])
  return (

    <div>DepartmentMap</div>

  )
}

export default DepartmentMap
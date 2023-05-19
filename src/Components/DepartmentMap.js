import React, { useContext } from 'react';
import { NavItem } from '../Contextapi';



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



import React from 'react'
// import { Outlet } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import { setIsAuthenticated,setUserRole,setUserId,setLoginTime } from '../../store/loginSlice';
import { useEffect } from 'react';
function UserRoutes({children}) {
  const dispatch=useDispatch();
  const isAuthenticated=useSelector(state=>state.loginSlice.isAuthenticated);
  const role=useSelector(state=>state.loginSlice.role);
  const loginTime=useSelector(state=>state.loginSlice.loginTime);

  useEffect(() => {
    console.log("time left in session expiring: ",3000000-(Date.now()-loginTime))
  if(Date.now()-loginTime>3000000 ){
      console.log("Session Expired")
      dispatch(setIsAuthenticated(false));
      dispatch(setUserRole(""));
      dispatch(setUserId(""));
      dispatch(setLoginTime(null));  
      // setIsUserAuthenticated(false);
  }
  }, []);

  function checkUserAuth() {
    if (isAuthenticated && role==="user") {
      return true;
    } else {
      return false;
    }
  }
 

  return (checkUserAuth() ? children : window.location.href = "/admin/login");
}

export default UserRoutes
import React, { useEffect } from "react";
// import IsAuthenticated from "../../services/IsAuthenticated";
import {useSelector,useDispatch} from 'react-redux';
import { setIsAuthenticated,setUserRole,setUserId,setLoginTime } from '../../store/loginSlice';


function AdminRoutes({ children }) {
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
  function checkAdminAuth() {
    if (isAuthenticated && role==="admin") {
      return true;
    } else {
      return false;
    }
  }
 

  return (checkAdminAuth() ? children : window.location.href = "/login");

}

export default AdminRoutes;

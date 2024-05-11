import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setIsAuthenticated, setUserRole, setUserId, setLoginTime, setToken } from '../store/loginSlice'

function LogoutService() {
    const dispatch = useDispatch()
    const role=useSelector(state=>state.loginSlice.role);
    dispatch(setIsAuthenticated(false));
    dispatch(setUserRole(""));
    dispatch(setUserId(""));
    dispatch(setLoginTime(null));
    dispatch(setToken(""));

  return (
    role==="user" ? window.location.href = "/login" : window.location.href = "/login"
  )
}

export default LogoutService
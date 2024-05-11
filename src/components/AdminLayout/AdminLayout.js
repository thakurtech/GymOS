import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from "../../Sidebar"
import Header from "./Header"
function AdminLayout() {
  return (
    <div>
      <Header/>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default AdminLayout
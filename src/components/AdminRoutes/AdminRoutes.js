import React from "react";
import { Outlet } from "react-router-dom";
function AdminRoutes({ children}) {
  return (
    <>
      {children}
    </>
  );
}

export default AdminRoutes;

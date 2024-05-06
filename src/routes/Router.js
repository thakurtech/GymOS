import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRoutes from "../components/UserRoutes/UserRoutes";
import AdminRoutes from "../components/AdminRoutes/AdminRoutes";
import CaloriesTracker from "../pages/CaloriesTracker/CaloriesTracker";
import AdminLoginForm from "../pages/AdminLoginForm/AdminLoginForm";
import AdminLayout from "../components/AdminLayout/AdminLayout";
import UserLayout from "../components/UserLayout/UserLayout";
import Dashboard from "../pages/AdminDashboard/Dashboard";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ------------Normal Routes------------------ */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<AdminLoginForm />} />
          </Route>
          {/* ---------- User Routes------------------ */}
          <Route path="/user" element={<UserLayout />}>
            <Route
              path="calorie-tracker"
              element={
                <UserRoutes>
                  <CaloriesTracker />
                </UserRoutes>
              }
            />
          </Route>
          {/* ---------------Admin Routes-------------- */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="login" element={<AdminLoginForm />} />
            <Route path="dashboard"
            element={
              <AdminRoutes>
                <Dashboard />
              </AdminRoutes>
            }
          />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;

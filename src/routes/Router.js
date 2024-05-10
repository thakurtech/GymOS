import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserRoutes from "../components/UserRoutes/UserRoutes";
import AdminRoutes from "../components/AdminRoutes/AdminRoutes";
import CaloriesTracker from "../pages/CaloriesTracker/CaloriesTracker";
import AdminLoginForm from "../pages/AdminLoginForm/AdminLoginForm";
import AdminLayout from "../components/AdminLayout/AdminLayout";
import UserLayout from "../components/UserLayout/UserLayout";
import Dashboard from "../pages/AdminDashboard/Dashboard";
import LogoutService from "../services/LogoutService";
import DietRecommendation from "../pages/DietRecommendation/DietRecommendationPage";
import DietTracker from "../pages/DietTracker/DietTracker";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import UserDashboard from "../pages/UserDashBoard/UserDashBoard";
import BMICalculator from "../pages/CalculateBmi/CalculateBmi";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ------------Normal Routes------------------ */}
          <Route path="/login" element={<AdminLoginForm />} />


          {/* ---------- User Routes------------------ */}
          <Route path="/user" element={<UserLayout />}>
            <Route
              
              path="calculate-bmi"
              element={
                <UserRoutes>
                  <BMICalculator />
                </UserRoutes>
              }
            />  
            <Route
              index
              path="dashboard"
              element={
                <UserRoutes>
                  <UserDashboard />
                </UserRoutes>
              }
            />
            <Route
              path="calorie-tracker"
              element={
                <UserRoutes>
                  <CaloriesTracker />
                </UserRoutes>
              }
            />
            <Route
              path="diet-recommendation"
              element={
                <UserRoutes>
                  <DietRecommendation />
                </UserRoutes>
              }
            />
            <Route
              path="your-diet"
              element={
                <UserRoutes>
                  <DietTracker />
                </UserRoutes>
              }
            />
            <Route
              path="payment"
              element={
                <UserRoutes>
                  <PaymentPage/>
                </UserRoutes>
              }
            />
            
            <Route
              path="logout"
              element={
                <UserRoutes>
                  <LogoutService />
                </UserRoutes>
              }
            />
          </Route>
          {/* ---------------Admin Routes-------------- */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route
              path="dashboard"
              element={
                <AdminRoutes>
                  <Dashboard />
                </AdminRoutes>
              }
            />
            <Route
              path="logout"
              element={
                <AdminRoutes>
                  <LogoutService />
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

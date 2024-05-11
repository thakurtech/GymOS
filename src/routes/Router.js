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
import Main from "../pages/Main";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Schedule from "../pages/Schedule/Schedule";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home";
import Signup from "../pages/Signup/Signup";
import Product from "../product/Product.jsx";
import GymMembershipDashboard from "../Membership DashBoard/GymMembershipDashboard.jsx";
import AdminHome from "../Home.jsx";
function Router() {
  const data = [
    {
      id: "New",
      label: "New Members",
      value: 231,
      color: "hsl(93, 100%, 51%)",
    },
    {
      id: "Expiring",
      label: "Expiring Subscriptions",
      value: 505,
      color: "hsl(358, 100%, 63%)",
    },
  ];

  const MemberGrowth = [
    {
      id: "Growth",
      data: [
        { x: "Jan", y: 54 },
        { x: "Feb", y: 77 },
        { x: "Mar", y: 82 },
      ],
    },
  ];

  const Expences = [
    {
      id: "Growth",
      data: [
        { x: "Jan", y: 544 },
        { x: "Feb", y: 773 },
        { x: "Mar", y: 824 },
      ],
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ------------Normal Routes------------------ */}
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<AdminLoginForm />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          {/* ---------- User Routes------------------ */}
          <Route path="/user" element={<UserLayout />}>
            <Route
              path="dashboard"
              element={
                <UserRoutes>
                  <UserDashboard />
                </UserRoutes>
              }
            />
            <Route
              path="calculate-bmi"
              element={
                <UserRoutes>
                  <BMICalculator />
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
                  <PaymentPage />
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
            {/* <Route
              path="dashboard"
              element={
                <AdminRoutes>
                  <Dashboard />
                </AdminRoutes>
              }
            /> */}
            <Route
              path="dashboard"
              element={
                <AdminRoutes>
                <AdminHome
                  MemberGrowth={MemberGrowth}
                  Expences={Expences}
                  data={data}
                />
                </AdminRoutes>
              }
            />
            <Route path="products" element={<AdminRoutes><Product /></AdminRoutes>} />
            <Route path="analytics" element={<AdminRoutes><GymMembershipDashboard /></AdminRoutes>} />
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

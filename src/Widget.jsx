import React from "react";
import Home from "./Home"
import Sidebar from "./Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import Product from "./product/Product"
import GymMembershipDashboard from "./Membership DashBoard/GymMembershipDashboard"
const Widget = () => {
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
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home MemberGrowth={MemberGrowth} Expences={Expences} data={data} />} />
          <Route path="/products" element={<Product/>} />
          <Route path="/analytics" element={<GymMembershipDashboard/>} />
        </Routes>
      </div>
    </>
  );
};

export default Widget;

import React from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Login from "../pages/LogIn";
import DashboardContent from "../pages/dashboard/Dashboard";

function NestedRouteWrapper() {
  return (
    <>
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="/" element={<DashboardContent />} />
      </Routes>
    </>
  );
}

export default NestedRouteWrapper;

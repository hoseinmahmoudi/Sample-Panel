import React from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Login from "../pages/LogIn";
import Dashboard from "../pages/dashboard/Dashboard";

function NestedRouteWrapper() {
  return (
    <>
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default NestedRouteWrapper;

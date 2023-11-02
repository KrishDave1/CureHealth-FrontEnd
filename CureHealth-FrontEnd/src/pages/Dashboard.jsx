import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex ">
      <Outlet />
    </div>
  );
};

export default Dashboard;

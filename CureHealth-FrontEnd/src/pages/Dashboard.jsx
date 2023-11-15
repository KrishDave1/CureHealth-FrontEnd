import React from "react";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import Sidebar from "../components/sidebar";
import DashboardMain from "../components/DashboardMain";

const Dashboard = () => {
  const { userId } = useGlobalContext();

  let Userdata = async() => {
    let response = await fetch(`http://127.0.0.1:8000/data/patients/?id=${userId}`);
    let data = await response.json();
    console.log(data);
  };
  Userdata();
  return (
    <>
    </>
    // <div className="flex justify-center ml-32 ">
    // </div>
  );
};

export default Dashboard;

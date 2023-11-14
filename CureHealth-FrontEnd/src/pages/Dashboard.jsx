import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Account from "../pages/Account";
{/* <Route path='myaccount' element={<Account />} />
<Route path='messages' element={<Messages />} />
<Route path='appointments' element={<Appointments />} />
<Route path='fileupload' element={<FileUpload />} /> */}

const Dashboard = () => {
  return (
    <div className='flex '>
      {/* <Outlet /> */}
      <div className="">
        <Account />
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;

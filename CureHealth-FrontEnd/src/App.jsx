/** @format */
import Footer from "./components/Footer";
import CureHealthSection from "./components/CureHealthSection";
import { Navbar } from "./components/Navbar";
import { useGlobalContext } from "./context";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Primary from "./pages/Primary";
import Mental from "./pages/Mental";
import Contact from "./pages/Contact";
import Chatroom from "./pages/Chatroom";
import Dermatology from "./pages/Dermatology";
import Urgent from "./pages/Urgent";
import RegisterPage from "./pages/RegisterPage";
import RegisterDoc from "./pages/RegisterDoc";
import Sidebar from "./components/sidebar";
import FileUpload from "./pages/FileUpload";
import Account from "./pages/Account";
import Appointments from "./pages/Appointments";
import Messages from "./pages/Messages";
import Vidjoin from "./pages/Vidjoin.jsx";
import Video from "./pages/Video.jsx";
import Chatlogin from "./pages/Chatlogin.jsx";
import DashboardMain from "./components/DashboardMain";
import { Outlet } from "react-router-dom";

const App = () => {
  const { userId } = useGlobalContext();
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route path='/register' element={<RegisterPage />} />
        <Route
          path='/primarycare'
          element={
            <>
              <Navbar />
              <Primary />
              <Footer />
            </>
          }
        />
        <Route
          path='/urgentcare'
          element={
            <>
              <Navbar />
              <Urgent />
              <Footer />
            </>
          }
        />
        <Route
          path='/mentalhealth'
          element={
            <>
              <Navbar />
              <Mental />
              <Footer />
            </>
          }
        />
        <Route path='/registerdoc' element={<RegisterDoc />} />
        <Route
          path='/dermatology'
          element={
            <>
              <Navbar />
              <Dermatology />
              <Footer />
            </>
          }
        />

        <Route
          path='/contact-us'
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path='*'
          element={
            <>
              <PrivateRoute>
                {/* <Sidebar /> */}
                <Route
                  path='/dashboard'
                  element={
                    <div className='flex'>
                      <div>
                        <Sidebar />
                      </div>
                      <div className='w-full flex justify-center'>
                        <DashboardMain />
                      </div>
                      <Outlet />
                    </div>
                    // <Dashboard className="" />
                    // <Chatlogin />
                  }
                />
                <Route
                  path='/myaccount'
                  element={
                    <div className='flex'>
                      <div>
                        <Sidebar />
                      </div>
                      <div className='w-full flex justify-center'>
                        <Account />
                      </div>
                    </div>
                  }
                />
                <Route
                  path='/messages'
                  element={
                    <div className='flex'>
                      <div>
                        <Sidebar />
                      </div>
                      <div className='w-full flex justify-center'>
                        <Messages />
                      </div>
                    </div>
                  }
                />
                <Route
                  path='/appointments'
                  element={
                    <div className='flex'>
                      <div>
                        <Sidebar />
                      </div>
                      <div className='w-full flex justify-center'>
                        <Appointments />
                      </div>
                    </div>
                  }
                />
                <Route
                  path='/fileupload'
                  element={
                    <div className='flex'>
                      <div>
                        <Sidebar />
                      </div>
                      <div className='w-full flex justify-center'>
                        <FileUpload />
                      </div>
                    </div>
                  }
                />
                <Route
                  path='video'
                  element={
                    <div className='flex'>
                      <div>
                        <Sidebar />
                      </div>
                      <div className='w-full flex justify-center'>
                        <Vidjoin />
                      </div>
                    </div>
                  }
                />
                <Route
                  path='/video/:roomId'
                  element={
                    <div className='flex'>
                      <div>
                        <Sidebar />
                      </div>
                      <div className='w-full flex justify-center'>
                        <Video />
                      </div>
                    </div>
                  }
                />
                <Route
                  path='/chatroom'
                  element={
                    <div className='flex'>
                      <div>
                        <Sidebar />
                      </div>
                      <div className='w-full flex justify-center'>
                        <Chatroom />
                      </div>
                    </div>
                  }
                />
              </PrivateRoute>
            </>
          }
        />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      {/* <CureHealthSection /> */}
    </>
  );
};

export default App;

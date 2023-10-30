/** @format */
import React from "react";
import Footer from "./components/Footer";
import CureHealthSection from "./components/CureHealthSection";
import { Navbar } from "./components/Navbar";
import { useGlobalContext } from "./context";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import VideoCalling from "./components/VideoCalling.jsx";
import VideoCallingForm from "./components/VideoCallingForm";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Primary from "./pages/Primary";
import Mental from "./pages/Mental";
import Contact from "./pages/Contact";
import Chatroom from "./pages/Chatroom";
import Dermatology from "./pages/Dermatology";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/primarycare"
          element={
            <>
              <Navbar />
              <Primary />
              <Footer />
            </>
          }
        />
        <Route
          path="/mentalhealth"
          element={
            <>
              <Navbar />
              <Mental />
              <Footer />
            </>
          }
        />
        <Route
          path="/dermatology"
          element={
            <>
              <Navbar />
              <Dermatology />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact-us"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          index
          element={
            <PrivateRoute>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/video" element={<VideoCalling />} />
              <Route path="/videoform" element={<VideoCallingForm />} />
              <Route path="/chat" element={<Chatroom />} />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* <CureHealthSection /> */}
    </>
  );
};

export default App;

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
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./pages/home";
import Primary from "./pages/Primary";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/primarycare" element={<Primary />} />
        <Route
          path="/"
          index
          element={
            <PrivateRoute>
              <Route element={<HomePage />} />
            </PrivateRoute>
          }
        />
        <Route path="/video" element={<VideoCalling />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/cart"
          element={
            <div>
              <h1>Cart</h1>
            </div>
          }
        />
      </Routes>
      {/* <CureHealthSection /> */}
      <Footer />
    </>
  );
};

export default App;

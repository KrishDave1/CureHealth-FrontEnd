/** @format */
import React from "react";
import Footer from "./components/Footer";
import CureHealthSection from "./components/CureHealthSection";
import { Navbar } from "./components/Navbar";
import { useGlobalContext } from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoCalling from "./components/VideoCalling.jsx";
import Home from "./pages/home";
import Primary from "./pages/primary";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/primarycare" element={<Primary />} />
        <Route
          path="/"
          index
          element={
            <div>
              <Home />
            </div>
          }
        />
        <Route path="video" element={<VideoCalling />} />
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
    </BrowserRouter>
  );
};

export default App;

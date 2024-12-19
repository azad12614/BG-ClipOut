import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Result from "./pages/Result.jsx";
import BuyCredits from "./pages/BuyCredits.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/result" element={<Result></Result>} />
        <Route path="/buy" element={<BuyCredits></BuyCredits>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;

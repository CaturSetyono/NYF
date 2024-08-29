import React, { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Blog from "./Pages/Blog";
import ERR from "./Pages/ERR";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/NYF" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/eror" element={<ERR />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

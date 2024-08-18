import React, { useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Blog from './Pages/Blog';

const App = () =>{
  

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/NYF" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;

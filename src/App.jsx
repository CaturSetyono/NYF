import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from "react";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import Contact from './pages/Contact';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

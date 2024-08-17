import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Sosmed from './Pages/Sosmed';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/NYF" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sosmed" element={<Sosmed />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;

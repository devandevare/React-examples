import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
// import Error from './components/pages/Error'

function App() {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

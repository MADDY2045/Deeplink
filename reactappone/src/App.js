import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 id="App-Header">REACT APP ONE</h1>
      <Router>
        <div className="list" style={{ display: 'block' }}>
          <ul>
            <li>
              <Link to="home">HOME</Link>
            </li>
            <li>
              <Link to="about">ABOUT</Link>
            </li>
            <li>
              <Link to="shop">SHOP</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<h1>HOME PAGE</h1>} />
          <Route exact path="home" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

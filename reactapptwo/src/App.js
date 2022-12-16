import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Payment from './components/Payment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const showWidget = () => {
    console.log('clicked');
    window.showWidget();
  };

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/pay" element={<Payment />} />
        </Routes>
        <div id="root"></div>
      </Router>
      <button onClick={showWidget} className="btn btn-primary">
        SHOW WIDGET
      </button>
    </div>
  );
};

export default App;

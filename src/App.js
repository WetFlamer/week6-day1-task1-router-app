import React, { useState } from "react";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Contacts from "./pages/Contacts";

function App() {

  const [styles, setStyles] = useState('button-text')
  const [styles2, setStyles2] = useState('button-text-m')
  const [styles3, setStyles3] = useState('button-text')

const handleStyles = () => {
setStyles('button-text-m')
setStyles2('button-text')
setStyles3('button-text')

}

const handleStyles2 = () => {
  setStyles2('button-text-m')
  setStyles('button-text')
setStyles3('button-text')
  }
  const handleStyles3 = () => {
    setStyles3('button-text-m')
    setStyles('button-text')
  setStyles2('button-text')
    }
  return (
    <div className="main">
      <div className="head">
      <p className="logo-text">Cover</p>
      <div className="menu-buttons">
        <Link onClick={handleStyles2} className={styles2} to="/">
          Home
        </Link>
        <Link onClick={handleStyles} className={styles} to="/features">
          Features
        </Link>
        <Link onClick={handleStyles3} className={styles3} to="/contacts">
          Contacts
        </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </div>
  );
}

export default App;

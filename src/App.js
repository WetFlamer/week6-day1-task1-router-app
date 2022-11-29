import React from "react";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="main">
      <div className="head">
      <p className="logo-text">Cover</p>
      <div className="menu-buttons">
        <Link className="button-text-m" to="/">
          Home
        </Link>
        <Link className="button-text" to="/features">
          Features
        </Link>
        <Link className="button-text" to="/contacts">
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

import React from 'react';

import { Routes, Route, Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/players">Players</Link>
        <Link to="/players/data">Players Data</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div><h1>HOME</h1></div>} />
        <Route path="/search" element={<div><h1>Search</h1></div>} />
        <Route path="/players" element={<div><h1>Player</h1></div>} />
        <Route path="/players/data" element={<div><h1>Player Data</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/profil" element={<Signin />} />

        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

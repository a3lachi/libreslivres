import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Libres Livres</title>
        <meta name="libreslivres" content="echange de livres online" />
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Profil from './pages/Profil';
import CategoriesPage from './pages/CategoriesPage';
import { useSelector  } from "react-redux";
import { store } from './redux/store'
import {   setJwt } from './redux/userSlice'




function App() {

  const jwt = useSelector((state) =>  state.user.jwt)
  if (jwt?.length === 0 && localStorage.getItem('jwt')?.length > 0   )
  {
    store.dispatch(setJwt(localStorage.getItem('jwt')))
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/profil" element={ jwt.length>0 ? <Profil /> : <Home /> } />

        <Route exact path="/signin" element={ <Signin /> } />

        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/cart" element={<Cart />} />
        
        <Route exact path="/categories" element={<CategoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

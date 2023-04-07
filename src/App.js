import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import NoteFound from './pages/NoteFound';
import Cart from './pages/Cart';
import CartEmty from './pages/CartEmty';

import './scss/app.scss';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/note-found" element={<NoteFound/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/cart-emty" element={<CartEmty/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

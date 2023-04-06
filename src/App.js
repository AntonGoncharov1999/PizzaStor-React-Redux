import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import NoteFound from './pages/NoteFound';

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
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

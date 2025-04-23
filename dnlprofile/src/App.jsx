import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Mynavbar from './components/mynavbar';
import Home from './pages/Home';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <Mynavbar />
      <div className="p-4  bg-slate-300 mt-2">
      <HashRouter>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/DigsProfile" element={<DigsProfile />} />
          </HashRouter>
      </div>
    </>
  );
}

export default App;

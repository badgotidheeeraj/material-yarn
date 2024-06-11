import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ant from './Component/Ant';
import Sing from './Component/Sing';
import Nav from './Component/Nav';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Ant />} />
      <Route path="/Sing-up" element={<Sing/>} />
      <Route path="/Nav" element={<Nav/>} />
    </Routes>
  </Router>
);

export default App;
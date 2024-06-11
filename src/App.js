import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ant from './Component/Ant';
import Sing from './Component/Sing';
import Navigation from './Component/Navigation';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Ant />} />
      <Route path="/Sing-up" element={<Sing />} />
      <Route path="/Navigation" element={<Navigation />} />
    </Routes>
  </Router>
);

export default App;
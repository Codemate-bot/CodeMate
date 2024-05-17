import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GeneralMode from './pages/GeneralMode';
import IndividualMode from './pages/IndividualMode';
import TeamMode from './pages/TeamMode';
import About from './pages/About'; // Create About component
import Home from './pages/Home'; // Create Home component
import NewMessage from './pages/NewMessage'; // Create NewMessage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GeneralMode />} />
        <Route path="/individual-mode" element={<IndividualMode />} />
        <Route path="/team-mode" element={<TeamMode />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-message" element={<NewMessage />} />
      </Routes>
    </Router>
  );
};

export default App;

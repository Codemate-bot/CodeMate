import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GeneralMode from './pages/GeneralMode';
import IndividualMode from './pages/IndividualMode';
import TeamMode from './pages/TeamMode';
import About from './pages/About';
import Home from './pages/Home';
import NewMessage from './pages/NewMessage';
import Login from './pages/Login'; // Import the Login component
import { ThemeProvider } from './pages/ThemeContext';
import Apps from '../../codeeditor/src/Apps';
import Appss from '../../Ai Bot/src/Appss';

const App = () => {
  // Define a state to keep track of whether the user is authenticated for team mode
  const [isTeamModeAuthenticated, setIsTeamModeAuthenticated] = React.useState(false);

  // Define a function to handle login
  const handleLogin = () => {
    setIsTeamModeAuthenticated(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<GeneralMode />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/individual-mode" element={<IndividualMode />} />
          <Route path="/team-mode" element={isTeamModeAuthenticated ? <TeamMode /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new-message" element={<NewMessage />} />
          <Route path="/message" element={<Appss />} />
          <Route path="/indi-message" element={<Apps />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

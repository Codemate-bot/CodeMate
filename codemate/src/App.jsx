import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GeneralMode from './pages/GeneralMode';
import IndividualMode from './pages/IndividualMode';
import TeamMode from './pages/TeamMode';
import About from './pages/About';
import Home from './pages/Home';
import NewMessage from './pages/NewMessage';
import Login from './pages/Login'; // Import the Login component
import NormalUserPage from './pages/NormalUser';
import AdminUserPage from './pages/AdminUser';
import { ThemeProvider } from './pages/ThemeContext';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<GeneralMode />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/individual-mode" element={isAuthenticated ? <IndividualMode /> : <Navigate to="/login" />} />
          <Route path="/team-mode" element={isAuthenticated ? <TeamMode /> : <Navigate to="/login" />} />
          <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/new-message" element={isAuthenticated ? <NewMessage /> : <Navigate to="/login" />} />
          <Route path="/normal-user-page" element={<NormalUserPage />} />
          <Route path="/admin-user-page" element={<AdminUserPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

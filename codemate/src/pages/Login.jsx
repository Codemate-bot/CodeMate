import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to manage login error message
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your authentication logic here
    if (username === 'user' && password === 'password') {
      onLogin(); // Call onLogin to update the authentication state
      navigate('/team-mode'); // Navigate to the team mode page
    } else {
      setError('Invalid username or password'); // Set error message for invalid login
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-[#FAF1E4] text-black'}`}>
      {/* Login Header */}
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <div className="relative flex flex-col items-center w-full max-w-md p-6 bg-white rounded shadow-md">
        <div className="absolute inset-0 w-full h-full bg-cover bg-no-repeat rounded-lg" style={{ backgroundImage: "url('path_to_ellipse_image')" }}></div>
        <div className="relative z-10 flex flex-col items-center w-full p-6">
          {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message if exists */}
          <form onSubmit={handleLogin} className="flex flex-col items-center w-full">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-4 p-2 w-full border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4 p-2 w-full border rounded"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">Login</button>
          </form>
          <button onClick={toggleTheme} className="mt-4 p-2 bg-gray-500 text-white rounded">
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

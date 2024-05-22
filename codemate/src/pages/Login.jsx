import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to manage login error message
  const [selectedRole, setSelectedRole] = useState(""); // State to manage selected role
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const handleLogOut = () => {
    // Implement logout logic here
  };

  const handleBackToDiscord = () => {
    // Implement back to Discord logic here
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your authentication logic here
    if (username === "user" && password === "password") {
      onLogin(); // Call onLogin to update the authentication state
      navigate("/team-mode"); // Navigate to the team mode page
    } else {
      setError("Invalid username or password"); // Set error message for invalid login
    }
  };

  const handleProceed = () => {
    if (selectedRole === "Normal User") {
      navigate("/normal-user-page");
    } else if (selectedRole === "Admin User") {
      navigate("/admin-user-page");
    }
  };

  const handleLinkSubmit = (e) => {
    e.preventDefault();
    if (link) {
      window.open(link, "_blank");
      setLinkOpened(true);
    }
  };

  return (
    <div
      className={`flex flex-col lg:flex-row w-full h-full min-h-screen box-sizing-border ${
        theme === "light" ? "bg-[#FAF1E4]" : "bg-black text-white"
      }`}
    >
      <div
        className={`flex flex-col p-6 w-full lg:w-[330px] box-sizing-border ${
          theme === "light" ? "bg-[#8579B2]" : "bg-[#333]"
        }`}
      >
        <div className="relative m-0 lg:m-0 lg:self-center flex justify-between items-center box-sizing-border">
          <span className="font-bold text-2xl text-white">CodeMate</span>
          <button className="lg:hidden text-white">
            <span className="material-icons">menu</span>
          </button>
        </div>
        <div className="relative mt-10 mb-10 w-full h-[1px] box-sizing-border">
          <div
            className={`w-full h-[1px] ${
              theme === "light" ? "bg-[#414084]" : "bg-gray-500"
            }`}
          />
        </div>
        <div className="flex flex-col">
          <div
            className="rounded-full bg-[#414084] mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555]"
            onClick={() => navigate("/about")}
          >
            <span className="text-white">About</span>
          </div>
          <div
            className="rounded-full bg-[#414084] mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555]"
            onClick={() => navigate("/home")}
          >
            <span className="text-white">Home</span>
          </div>
          <div className="flex-grow" />
          <div
            className="rounded-full bg-[#49625b] mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555]"
            onClick={handleBackToDiscord}
          >
            <span className="font-semibold text-white">Back to Discord</span>
          </div>
          <div
            className="rounded-full bg-[#cbffbe] mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555]"
            onClick={handleLogOut}
          >
            <span className="font-semibold text-[#3a2e2e]">Log Out</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-1 lg:p-1 box-sizing-border">
        <div
          className={`flex flex-row justify-between p-3 mb-6 rounded-lg ${
            theme === "light" ? "bg-[#414084]" : "bg-[#444]"
          }`}
        >
          <div className="flex items-end end-0">
            <button
              className="bg-white p-1 rounded-full shadow-md"
              onClick={toggleTheme}
            >
              <div
                className={`rounded-full ${
                  theme === "light" ? "bg-[#25293F]" : "bg-[#FFFFFF]"
                } w-5 h-5 transition duration-300`}
              />
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center min-h-0-screen ${
            theme === "dark" ? "bg-black text-white" : "bg-[#FAF1E4] text-black"
          }`}
        >
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <div className="relative flex flex-col items-center w-full max-w-md p-6 bg-white rounded shadow-md">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-no-repeat rounded-lg"
              style={{ backgroundImage: "url('path_to_ellipse_image')" }}
            ></div>
            <div className="relative z-10 flex flex-col items-center w-full p-6">
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <form
                onSubmit={handleLogin}
                className="flex flex-col items-center w-full"
              >
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
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white rounded"
                >
                  Login
                </button>
              </form>
              <div className="flex flex-row mt-4">
                <button className="p-2 bg-slate-300 text-white rounded mr-2">
                  <img
                    src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                    className="rounded-full w-6 h-6"
                  />
                </button>
                <button className="p-2 bg-green-100 text-white rounded mr-2">
                  <img
                    src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                    className="rounded-full w-6 h-6"
                  />
                </button>
                <button className="p-2 bg-yellow-200 text-white rounded mr-2">
                  <img
                    src="https://img.icons8.com/?size=100&id=2mIgusGquJFz&format=png&color=000000"
                    className="rounded-full w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

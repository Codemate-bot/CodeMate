import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import Login from './Login';

export default function GeneralMode() {
  const [currentMode, setCurrentMode] = useState('General Mode');
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleModeChange = (mode) => {
    setCurrentMode(mode);
    if (mode === 'Individual Mode') {
      navigate("/indi-message");
    } else if (mode === 'Team Mode') {
     navigate("/new-message");
    } else {
      navigate('/');
    }
  };

  const handleNewChat = () => {
    // Implement new chat initiation logic here
  };

  const handleLogOut = () => {
    // Implement logout logic here
  };

  const handleBackToDiscord = () => {
    // Implement back to Discord logic here
  };

  const toggleLogin = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const handleLogin = () => {
    setIsLoginVisible(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`flex flex-col lg:flex-row w-full h-full min-h-screen box-sizing-border ${
        theme === "light" ? "bg-[#FAF1E4]" : "bg-black text-white"
      }`}
    >
      {isLoginVisible && <Login onLogin={handleLogin} />}
      <div
        className={`flex flex-col p-6 w-full lg:w-[330px] box-sizing-border ${
          theme === "light" ? "bg-[#8579B2]" : "bg-[#333]"
        }`}
      >
        <div className="relative m-0 lg:m-0 lg:self-center flex justify-between items-center box-sizing-border">
          <span className="font-['Poppins'] font-bold text-[26px] leading-[1] text-[#FFFFFF]">
            CodeMate
          </span>
          <button className="lg:hidden text-white" onClick={toggleMenu}>
            <span className="material-icons">menu</span>
          </button>
        </div>
        <div
          className={`relative mt-10 mb-10 lg:mt-10 lg:mb-10 w-full h-[1px] box-sizing-border ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <div
            className={`w-full h-[1px] ${
              theme === "light" ? "bg-[#414084]" : "bg-gray-500"
            }`}
          />
        </div>
        <div
          className={`lg:flex lg:flex-col ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <div
            className="rounded-[50px] bg-[#414084] relative mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555]"
            onClick={() => navigate("/about")}
          >
            <span className="font-['Poppins'] font-normal text-[15px] text-[#FFFFFF]">
              About
            </span>
          </div>
          <div
            className="rounded-[50px] bg-[#414084] relative mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555]"
            onClick={() => navigate("/home")}
          >
            <span className="font-['Poppins'] font-normal text-[15px] text-[#FFFFFF]">
              Home
            </span>
          </div>
          <div className="flex-grow" />
          <div
            className="rounded-[50px] bg-[#49625b] relative mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555]"
            onClick={handleBackToDiscord}
          >
            <span
              className="font-['Poppins'] font-semibold  text-[15px] text-[#FFFFFF]"
              onClick={() =>
                (window.location.href =
                  "https://discord.com/channels/1113434190541750284/1210132991876276254")
              }
            >
              Back to Discord
            </span>
          </div>
          <div
            className="rounded-[50px] bg-[#cbffbe] relative mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555]"
            onClick={handleLogOut}
          >
            <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#3a2e2e]">
              Log Out
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-1 lg:p-1 box-sizing-border">
        <div
          className={`flex flex-row justify-between p-1 w-full mb-1 box-sizing-border rounded-lg ${
            theme === "light" ? "bg-[#414084]" : "bg-[#444]"
          }`}
        >
          <div
            className="rounded-[40px] border-[1px_solid_#CEDEBD] flex p- w-full max-w-[495px] box-sizing-border"
            style={{ borderColor: theme === "light" ? "#CEDEBD" : "#555" }}
          >
            <div className="flex flex-row">
              <div
                className={`ml-4 p-4 cursor-pointer ${
                  currentMode === "General Mode"
                    ? "text-[#ffffff]"
                    : "text-[#FFFFFF]"
                }`}
                onClick={() => handleModeChange("General Mode")}
              >
                <span className="rounded-[50px] bg-[#c578d2] relative mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555] font-['Poppins'] font-medium text-[13px]">
                  General Mode
                </span>
              </div>
              <div
                className={`ml-4 p-4 cursor-pointer ${
                  currentMode === "Individual Mode"
                    ? "text-[#CEDEBD]"
                    : "text-[#FFFFFF]"
                }`}
                onClick={() => handleModeChange("Individual Mode")}
              >
                <span className=" rounded-[50px] bg-[#c578d2] relative mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555] font-['Poppins'] font-medium text-[13px]">
                  Individual Mode
                </span>
              </div>
              <div
                className={`ml-4 p-4 cursor-pointer ${
                  currentMode === "Team Mode"
                    ? "text-[#CEDEBD]"
                    : "text-[#FFFFFF]"
                }`}
                onClick={() => handleModeChange("Team Mode")}
              >
                <span className="rounded-[50px] bg-[#c578d2] relative mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555] font-['Poppins'] font-medium text-[13px]">
                  Team Mode
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center box-sizing-border">
            <div
              className="shadow-[0px_0px_14px_0px_rgba(0,0,0,0.15)] rounded-[20px] bg-[#FFFFFF] flex items-center p-1 mr-5 w-[47px] h-[23px] box-sizing-border cursor-pointer transition duration-300 hover:shadow-[0px_0px_14px_0px_rgba(0,0,0,0.3)]"
              onClick={toggleTheme}
            >
              <div
                className={`rounded-[20px] ${
                  theme === "light" ? "bg-[#25293F]" : "bg-[#FFFFFF]"
                } w-[19px] h-[19px] ml-auto mr-1 transition duration-300`}
              />
            </div>
            <div className="rounded-[21px] bg-[url('assets/images/Ellipse139.jpeg')] bg-cover bg-no-repeat w-[42px] h-[42px] transition duration-300" />
          </div>
        </div>
        <div className="flex-grow" />
        <div className="absolute bottom-4 right-4">
          <button
            className="bg-[#414084] text-white p-4 rounded-full shadow-lg transition duration-300 hover:bg-[#555]"
            onClick={() => navigate("/new-message")}
          >
            <span className="material-icons">message</span>
          </button>
        </div>
      </div>
    </div>
  );
}

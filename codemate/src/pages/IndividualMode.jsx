import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GeneralMode() {
  const [currentMode, setCurrentMode] = useState('General Mode');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const navigate = useNavigate();

  const handleModeChange = (mode) => {
    setCurrentMode(mode);
    if (mode === 'Individual Mode') {
      navigate('/individual-mode');
    } else if (mode === 'Team Mode') {
      navigate('/team-mode');
    } else {
      navigate('/');
    }
  };

  const handleNewChat = () => {
    // Implement new chat initiation logic here
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  const handleLogOut = () => {
    // Implement logout logic here
  };

  const handleBackToDiscord = () => {
    // Implement back to Discord logic here
  };

  return (
    <div className="bg-[#FAF1E4] flex flex-col lg:flex-row w-full h-full min-h-screen box-sizing-border">
      <div className="bg-[#8579B2] flex flex-col p-6 w-full lg:w-[330px] box-sizing-border">
        <div className="relative m-0 lg:m-0 lg:self-center flex justify-center box-sizing-border">
          <span className="font-['Poppins'] font-bold text-[26px] leading-[1] text-[#FFFFFF]">
            Code Mate
          </span>
        </div>
        <div className="relative mt-10 mb-10 lg:mt-10 lg:mb-10 w-full h-[1px] box-sizing-border">
          <div className="bg-[#414084] w-full h-[1px]" />
        </div>
        <div
          className="rounded-[40px] bg-[#414084] relative mb-6 p-6 w-full text-center cursor-pointer"
          onClick={handleNewChat}
        >
          <span className="font-['Poppins'] font-normal text-[15px] text-[#FFFFFF]">
            New Chat
          </span>
        </div>
        <div
          className="rounded-[40px] bg-[#414084] relative mb-6 p-6 w-full text-center cursor-pointer"
          onClick={() => navigate('/about')}
        >
          <span className="font-['Poppins'] font-normal text-[15px] text-[#FFFFFF]">
            About
          </span>
        </div>
        <div
          className="rounded-[40px] bg-[#414084] relative mb-6 p-6 w-full text-center cursor-pointer"
          onClick={() => navigate('/home')}
        >
          <span className="font-['Poppins'] font-normal text-[15px] text-[#FFFFFF]">
            Home
          </span>
        </div>
        <div className="flex-grow" />
        <div
          className="rounded-[40px] bg-[#414084] relative mb-6 p-6 w-full text-center cursor-pointer"
          onClick={handleBackToDiscord}
        >
          <span className="font-['Poppins'] font-normal text-[15px] text-[#FFFFFF]">
            Back to Discord
          </span>
        </div>
        <div
          className="rounded-[45px] bg-[#FFEED6] relative p-6 w-full text-center cursor-pointer mt-6"
          onClick={handleLogOut}
        >
          <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#000000]">
            Log Out
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full p-4 lg:p-10 box-sizing-border">
        <div className="bg-[#414084] flex flex-row justify-between p-6 w-full mb-10 box-sizing-border rounded-lg">
          <div className="rounded-[40px] border-[1px_solid_#CEDEBD] bg-[#8579B2] flex p-2 w-full max-w-[495px] box-sizing-border">
            <div className="flex flex-row justify-between w-full h-full box-sizing-border">
              <div className="flex flex-row">
                <div
                  className={`ml-4 p-4 cursor-pointer ${currentMode === 'General Mode' ? 'text-[#CEDEBD]' : 'text-[#FFFFFF]'}`}
                  onClick={() => handleModeChange('General Mode')}
                >
                  <span className="font-['Poppins'] font-medium text-[13px]">
                    General Mode
                  </span>
                </div>
                <div
                  className={`ml-4 p-4 cursor-pointer ${currentMode === 'Individual Mode' ? 'text-[#CEDEBD]' : 'text-[#FFFFFF]'}`}
                  onClick={() => handleModeChange('Individual Mode')}
                >
                  <span className="font-['Poppins'] font-medium text-[13px]">
                    Individual Mode
                  </span>
                </div>
                <div
                  className={`ml-4 p-4 cursor-pointer ${currentMode === 'Team Mode' ? 'text-[#CEDEBD]' : 'text-[#FFFFFF]'}`}
                  onClick={() => handleModeChange('Team Mode')}
                >
                  <span className="font-['Poppins'] font-medium text-[13px]">
                    Team Mode
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center box-sizing-border">
            <div className="shadow-[0px_0px_14px_0px_rgba(0,0,0,0.15)] rounded-[20px] bg-[#FFFFFF] flex items-center p-1 mr-5 w-[47px] h-[23px] box-sizing-border">
              <div className="rounded-[20px] bg-[#25293F] w-[19px] h-[19px] ml-auto mr-1" />
            </div>
            <div className="rounded-[21px] bg-[url('assets/images/Ellipse139.jpeg')] bg-cover bg-no-repeat w-[42px] h-[42px]" />
          </div>
  
        </div>
        <div className="absolute bottom-4 right-4">
          <button
            className="bg-[#414084] text-white p-4 rounded-full shadow-lg"
            onClick={() => navigate('/new-message')}
          >
            <span className="material-icons">message</span>
          </button>
        </div>
      </div>
    </div>
  );
}

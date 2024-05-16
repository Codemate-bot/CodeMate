import React, { useState } from 'react';

export default function TeamMode() {
  const [currentMode, setCurrentMode] = useState('Team Mode');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleModeChange = (mode) => {
    setCurrentMode(mode);
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

  return (
    <div className="bg-[#FAF1E4] flex flex-col lg:flex-row w-full h-full box-sizing-border">
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
          className="rounded-[45px] bg-[#FFEED6] relative p-6 w-full text-center cursor-pointer"
          onClick={handleLogOut}
        >
          <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#000000]">
            Log Out
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full p-4 lg:p-10 box-sizing-border">
        <div className="bg-[#414084] flex flex-row justify-between p-6 w-full mb-10 box-sizing-border rounded-lg">
          <div className="rounded-[40px] border-[1px_solid_#CEDEBD] bg-[#8579B2] flex p-2 w-[495px] box-sizing-border">
            <div className="flex flex-row justify-between w-full h-full box-sizing-border">
              <div className="flex flex-row">
                <div
                  className={`rounded-[40px] p-4 cursor-pointer ${currentMode === 'Individual Mode' ? 'bg-[#8579B2]' : 'bg-[#CEDEBD]'}`}
                  onClick={() => handleModeChange('Individual Mode')}
                >
                  <span className="font-['Poppins'] font-medium text-[13px] text-[#414084]">
                    Team Mode
                  </span>
                </div>
                <div
                  className={`ml-4 p-4 cursor-pointer ${currentMode === 'General Mode' ? 'text-[#FFFFFF]' : 'text-[#CEDEBD]'}`}
                  onClick={() => handleModeChange('General Mode')}
                >
                  <span className="font-['Poppins'] font-medium text-[13px]">
                    General Mode
                  </span>
                </div>
              </div>
              <div
                className={`ml-4 p-4 cursor-pointer ${currentMode === 'Team Mode' ? 'text-[#FFFFFF]' : 'text-[#CEDEBD]'}`}
                onClick={() => handleModeChange('Team Mode')}
              >
                <span className="font-['Poppins'] font-medium text-[13px]">
                  Individual Mode
                </span>
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
        <div className="flex flex-col lg:flex-row w-full box-sizing-border">
          <div className="flex flex-col w-full lg:w-[330px] mb-10 lg:mb-0 box-sizing-border">
            {/* Insert team-specific content here */}
          </div>
          <div className="flex flex-col w-full box-sizing-border">
            <div className="flex flex-col w-full h-[650px] box-sizing-border">
              <div className="bg-[#FFFFFF] flex flex-col w-full h-full box-sizing-border overflow-auto">
                {messages.map((message, index) => (
                  <div key={index} className="p-4 border-b-[1px_solid_#DDD]">
                    {message}
                  </div>
                ))}
              </div>
              <div className="rounded-[30px] bg-[#FFFFFF] border-[1px_solid_#FFFFFF] shadow-[0px_10px_20px_rgba(0,0,0,0.08)] flex flex-col p-6 w-full h-fit box-sizing-border mt-4">
                <textarea
                  className="w-full p-4 border-[1px_solid_#DDD] rounded-[5px]"
                  rows="3"
                  placeholder="Type a message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  className="bg-[#414084] text-white p-4 rounded-[5px] mt-4 self-end"
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

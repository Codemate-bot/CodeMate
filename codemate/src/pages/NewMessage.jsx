import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewMessage = () => {
  const [selectedRole, setSelectedRole] = useState('Normal User');
  const navigate = useNavigate();

  const handleLogOut = () => {
    // Implement logout logic here
  };

  const handleBackToDiscord = () => {
    // Implement back to Discord logic here
  };

  return (
    <div className="flex flex-row w-full h-screen box-sizing-border">
      <div className="bg-[#8579B2] flex flex-col p-6 w-[330px] box-sizing-border">
        <div className="relative m-0 self-center flex justify-center box-sizing-border">
          <span className="font-['Poppins'] font-bold text-[26px] leading-[1] text-[#FFFFFF]">
            Code Mate
          </span>
        </div>
        <div className="relative mt-10 mb-10 w-full h-[1px] box-sizing-border">
          <div className="bg-[#414084] w-full h-[1px]" />
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
      <div className="flex flex-col justify-center items-center flex-grow bg-[#FAF1E4] p-6 box-sizing-border">
        <div className="w-full max-w-md bg-[#8579B2] p-6 rounded-[30px] shadow-[0px_10px_20px_rgba(0,0,0,0.08)]">
          <h3 className="text-xl font-medium text-center text-white mb-4">Select User Type</h3>
          <div className="flex flex-col space-y-4">
            <button
              className={`p-4 rounded-[20px] ${selectedRole === 'Normal User' ? 'bg-[#CEDEBD] text-[#414084]' : 'bg-white text-[#414084]'}`}
              onClick={() => setSelectedRole('Normal User')}
            >
              Normal User
            </button>
            <button
              className={`p-4 rounded-[20px] ${selectedRole === 'Admin User' ? 'bg-[#CEDEBD] text-[#414084]' : 'bg-white text-[#414084]'}`}
              onClick={() => setSelectedRole('Admin User')}
            >
              Admin User
            </button>
          </div>
        </div>
        <button
          className="mt-6 bg-[#414084] text-white p-4 rounded-[20px] shadow-[0px_10px_20px_rgba(0,0,0,0.08)]"
          onClick={() => alert(`Selected role: ${selectedRole}`)}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default NewMessage;

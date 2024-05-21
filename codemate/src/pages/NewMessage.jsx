import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const NewMessage = () => {
  const [selectedRole, setSelectedRole] = useState('Normal User');
  const [link, setLink] = useState('');
  const [linkOpened, setLinkOpened] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogOut = () => {
    // Implement logout logic here
  };

  const handleBackToDiscord = () => {
    // Implement back to Discord logic here
  };

  const handleProceed = () => {
    if (selectedRole === 'Normal User') {
      navigate('/normal-user-page');
    } else if (selectedRole === 'Admin User') {
      navigate('/admin-user-page');
    }
  };

  const handleLinkSubmit = (e) => {
    e.preventDefault();
    if (link) {
      window.open(link, '_blank');
      setLinkOpened(true);
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row w-full h-full min-h-screen box-sizing-border ${theme === 'light' ? 'bg-[#FAF1E4]' : 'bg-black text-white'}`}>
      <div className={`flex flex-col p-6 w-full lg:w-[330px] box-sizing-border ${theme === 'light' ? 'bg-[#8579B2]' : 'bg-[#333]'}`}>
        <div className="relative m-0 lg:m-0 lg:self-center flex justify-between items-center box-sizing-border">
          <span className="font-bold text-2xl text-white">CodeMate</span>
          <button className="lg:hidden text-white">
            <span className="material-icons">menu</span>
          </button>
        </div>
        <div className="relative mt-10 mb-10 w-full h-[1px] box-sizing-border">
          <div className={`w-full h-[1px] ${theme === 'light' ? 'bg-[#414084]' : 'bg-gray-500'}`} />
        </div>
        <div className="flex flex-col">
          <div className="rounded-full bg-[#414084] mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555]" onClick={() => navigate('/about')}>
            <span className="text-white">About</span>
          </div>
          <div className="rounded-full bg-[#414084] mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555]" onClick={() => navigate('/home')}>
            <span className="text-white">Home</span>
          </div>
          <div className="flex-grow" />
          <div className="rounded-full bg-[#49625b] mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555]" onClick={handleBackToDiscord}>
            <span className="font-semibold text-white">Back to Discord</span>
          </div>
          <div className="rounded-full bg-[#cbffbe] mb-4 p-2 w-full text-center cursor-pointer transition duration-300 hover:bg-[#555]" onClick={handleLogOut}>
            <span className="font-semibold text-[#3a2e2e]">Log Out</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-6 box-sizing-border">
        <div className={`flex flex-row justify-between p-4 mb-6 rounded-lg ${theme === 'light' ? 'bg-[#414084]' : 'bg-[#444]'}`}>
          <div className="flex flex-row items-center">
            <button className="bg-white text-[#414084] p-4 rounded-full mr-4" onClick={() => setSelectedRole('Normal User')}>Normal User</button>
            <button className="bg-white text-[#414084] p-4 rounded-full" onClick={() => setSelectedRole('Admin User')}>Admin User</button>
          </div>
          <div className="flex items-center">
            <button className="bg-white p-1 rounded-full shadow-md" onClick={toggleTheme}>
              <div className={`rounded-full ${theme === 'light' ? 'bg-[#25293F]' : 'bg-[#FFFFFF]'} w-5 h-5 transition duration-300`} />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center flex-grow p-6">
          {selectedRole === 'Admin User' ? (
            <div className="w-full max-w-md bg-[#8579B2] p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-medium text-center text-white mb-4">Admin User: Share Link</h3>
              <form onSubmit={handleLinkSubmit}>
                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Enter share link"
                  className="p-4 w-full mb-4 rounded-full"
                />
                <button type="submit" className="w-full bg-[#414084] text-white p-4 rounded-full">Open Link</button>
              </form>
              {linkOpened && <button className="mt-4 w-full bg-[#28a745] text-white p-4 rounded-full" onClick={() => window.open(link, '_blank')}>Join Now</button>}
            </div>
          ) : (
            <div className="w-full max-w-md bg-[#8579B2] p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-medium text-center text-white mb-4">Normal User</h3>
              {linkOpened ? (
                <button className="w-full bg-[#28a745] text-white p-4 rounded-full" onClick={() => window.open(link, '_blank')}>Join Now</button>
              ) : (
                <p className="text-center text-white">Waiting for admin to share the link...</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewMessage;

import React from 'react';
{/*import './user.css';  */}
const NormalUserPage = () => 
 ({ sharedLink }) => {
  return (
    <div className="user-page">
      <div className="message-container">
        {sharedLink ? (
          <button
            className="join-now-button"
            onClick={() => window.open(sharedLink, '_blank')}
          >
            Join Now
          </button>
        ) : (
          <p>No link shared by admin yet.</p>
        )}
      </div>
    </div>
  );
};

export default NormalUserPage;

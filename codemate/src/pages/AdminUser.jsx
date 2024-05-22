import React, { useState } from 'react';
import './admin.css'; // Import the CSS file

const AdminUserPage = () => {
  const [link, setLink] = useState('');
  const [linkOpened, setLinkOpened] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (link) {
      window.open(link, '_blank'); // Opens the link in a new tab
      setLinkOpened(true);
    } else {
      console.error('Please enter a valid link.');
    }
  };

  return (
    <div className="admin-user-page">
      <div className="form-container">
        <h1>Let's Code Together</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter share link"
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">Open Link</button>
        </form>
        {linkOpened && <button className="join-now-button" onClick={() => window.open(link, '_blank')}>Join Now</button>}
      </div>
    </div>
  );
};

export default AdminUserPage;

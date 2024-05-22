import React, { useState } from 'react';
import { Webchat, WebchatProvider, getClient } from '@botpress/webchat';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './style.css';
import { theme } from './theme';

const clientId = '07657133-e358-45ea-b49e-f1eed1f6c698';

const GeneralMode = () => {
  const client = getClient({ clientId });
  return (
    <WebchatProvider client={client} theme={theme}>
      <Webchat mode="general" />
    </WebchatProvider>
  );
};

export default function Appss() {
  const [mode, setMode] = useState('general'); // State to manage the mode

  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/codemate/src/pages/GeneralMode">
            <button onClick={() => navigate('/codemate/src/pages/GeneralMode')}
            >Back to General Mode</button>
          </Link>
        </nav>
        
            
        <Route
          path="/"
          render={() => (
            <WebchatProvider client={getClient({ clientId })} theme={theme}>
              <Webchat mode={mode} />
            </WebchatProvider>
          )}
        />
      </div>
    </BrowserRouter>
  );
}
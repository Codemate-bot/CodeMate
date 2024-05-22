import React from 'react';
import { Webchat, WebchatProvider, getClient } from '@botpress/webchat';
import './style.css';
import { theme } from './theme';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GeneralMode from '../../codemate/src/pages/GeneralMode';


const clientId = '07657133-e358-45ea-b49e-f1eed1f6c698';

export default function Appss() {
  const client = getClient({ clientId });

  const handleBackToGeneralMode = () => {
    window.location.href = '/';
  };
  return (
    
    <div>
      <nav>
        <button onClick={handleBackToGeneralMode}>Back to General Mode</button>
      </nav>
      <WebchatProvider client={client} theme={theme}>
        <Webchat />
      </WebchatProvider>
    </div>
  );
}

import React from 'react';
import { Webchat, WebchatProvider, getClient } from '@botpress/webchat';
import './style.css';
import { theme } from './theme';

const clientId = '07657133-e358-45ea-b49e-f1eed1f6c698';

export default function Appss() {
  const client = getClient({ clientId });

  const handleBackToGeneralMode = () => {
    // Logic to switch back to general mode
    // This might involve setting some state or calling a method on the client
    console.log('Switched to general mode');
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

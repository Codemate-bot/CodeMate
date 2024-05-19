import React from 'react';
import { Webchat, WebchatProvider, getClient } from '@botpress/webchat';
import GeneralMode from '../../codemate/src/pages/GeneralMode';
import App from '../../codemate/src/App';
import './style.css';
import { theme } from './theme';

const clientId = '07657133-e358-45ea-b49e-f1eed1f6c698';

export default function Appss() {
  const client = getClient({ clientId });

  return (
    <WebchatProvider client={client} theme={theme}>
      <Webchat />
    </WebchatProvider>
  );
}

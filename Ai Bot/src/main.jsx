import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Webchat, WebchatProvider, getClient } from '@botpress/webchat';
import { Box, Flex, Button } from "@chakra-ui/react";
import './style.css';
import { theme } from './theme';
import GeneralMode from '../../codemate/src/pages/GeneralMode';

const clientId = '07657133-e358-45ea-b49e-f1eed1f6c698';

const GeneralMode = () => {
  const client = getClient({ clientId });
  return (
    <WebchatProvider client={client} theme={theme}>
      <Webchat mode="general" />
    </WebchatProvider>
  );
};

const Appss = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSwitchMode = () => {
    navigate('/'); // Navigate to the general mode page
  };

  return (
    <Box w="100%" h="100%" position="relative">
      <Flex
        p="4"
        bg="blue.500"
        color="white"
        justify="space-between"
        alignItems="center"
        boxShadow="md"
        borderRadius="lg"
      >
        <Box>
          <Button 
            colorScheme="white" 
            size="lg" 
            fontWeight="bold" 
            onClick={handleSwitchMode}
          >
            Switch to General Mode
          </Button>
        </Box>
        {/* You can add additional navbar items here if needed */}
      </Flex>
      
      <Routes>
        <Route
          path="/"
          element={
            <WebchatProvider client={getClient({ clientId })} theme={theme}>
              <Webchat mode="general" />
            </WebchatProvider>
          }
        />
        <Route path="/general" element={<GeneralMode />} />
      </Routes>
    </Box>
  );
};

export default function App() {
  return (
    <Router>
      <Appss />
    </Router>
  );
}

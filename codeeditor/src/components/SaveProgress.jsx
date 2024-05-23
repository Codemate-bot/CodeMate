// SaveProgress.jsx
import React from 'react';
import { Button } from '@chakra-ui/react';

const SaveProgress = ({ onSave }) => {
  return (
    <Button
      onClick={onSave}
      colorScheme="blackAlpha"
      size="sm"
      position="absolute"
      bottom="20px"
      right="10px"
      color="white"
      bg="black"
      _hover={{ bg: "gray.700" }}
      _focus={{ color: "yellow", bg: "black", boxShadow: "outline" }} // Retain background and text color on focus
      _active={{ color: "white", bg: "black" }} // Retain background and text color on active
    >
      Save Progress
    </Button>
  );
};

export default SaveProgress;

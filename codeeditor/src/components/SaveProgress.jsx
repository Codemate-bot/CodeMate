import React from 'react';
import { Button } from '@chakra-ui/react';
import { saveAs } from 'file-saver';

const SaveProgress = ({ onSave }) => {
  const saveFile = () => {
    const currentCode = localStorage.getItem("codeEditorContent");
    if (currentCode) {
      const { language, code } = JSON.parse(currentCode);
      const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
      const date = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `code-${language}-${date}.txt`;
      saveAs(blob, filename);
      alert("Code saved successfully!");
    } else {
      alert("No code to save!");
    }
  };

  return (
    <Button
      onClick={saveFile}
      colorScheme="blackAlpha"
      size="sm"
      position="initial"
      bottom="20px"
      right="10px"
      color="green"
      _hover={{ bg: "gray.700" }}
      _focus={{ color: "yellow", bg: "black", boxShadow: "outline" }}
      _active={{ color: "green", bg: "black" }}
    >
      Save Progress
    </Button>
  );
};

export default SaveProgress;

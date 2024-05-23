// CodeEditor.jsx
import React, { useRef, useState } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useNavigate } from 'react-router-dom';
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import SaveProgress from "./saveprogress";
import { CODE_SNIPPETS } from "../constants";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const navigate = useNavigate(); // Initialize useNavigate

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const handleSwitchMode = () => {
    navigate('/'); // Navigate to the general mode page
  };

  const saveProgress = () => {
    const currentCode = editorRef.current.getValue();
    // Save the current code to local storage or any other storage solution
    localStorage.setItem("codeEditorContent", JSON.stringify({ language, code: currentCode }));
    alert("Progress saved!");
  };

  return (
    <Box w="100%" h="100%" position="relative">
      <Flex align="center" justify="space-between" p={4} bg="blue.500" color="yellow">
        <Heading size="md">Code Editor</Heading>
        <Button
          onClick={handleSwitchMode}
          colorScheme="teal"
          size="sm"
          _focus={{ color: "white", bg: "teal.500", boxShadow: "outline" }} // Retain background and text color on focus
          _active={{ color: "white", bg: "teal.600" }} // Retain background and text color on active
        >
          Switch to General Mode
        </Button>
      </Flex>
      <Box w="100%" h="50%">
        <Flex>
          <Box flex="1" maxW="50%" zIndex="0">
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="100%"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>
          <Box flex="1" maxW="50%" h="100%" position="relative">
            <Output editorRef={editorRef} language={language} />
            <SaveProgress onSave={saveProgress} /> {/* Add SaveProgress component */}
          </Box>
        </Flex>
      </Box>
      <LanguageSelector language={language} onSelect={onSelect} zIndex="1" />
    </Box>
  );
};

export default CodeEditor;

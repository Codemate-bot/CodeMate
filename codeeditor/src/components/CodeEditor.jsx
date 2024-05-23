import React, { useRef, useState, useEffect } from "react";
import { Box, Flex, Heading, Button } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import SaveProgress from "./SaveProgress";
import { CODE_SNIPPETS } from "../constants";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const navigate = useNavigate();

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const handleSwitchMode = () => {
    navigate("/");
  };

  useEffect(() => {
    const currentCode = localStorage.getItem("codeEditorContent");
    if (currentCode) {
      const { code } = JSON.parse(currentCode);
      setValue(code);
    }
  }, []);

  const saveProgress = () => {
    const currentCode = editorRef.current.getValue();
    localStorage.setItem(
      "codeEditorContent",
      JSON.stringify({ language, code: currentCode })
    );
    alert("Progress saved!");
  };

  const startCollaboration = () => {
    // starting real-time collaboration

    alert("Collaboration started!");
  };

  const openChat = () => {
    // opening chat functionality
    alert("Chat opened!");
  };

  return (
    <Box w="100%" h="100%" position="relative" overflow="hidden">
      <Heading size="md" textColor="red" textAlign={"center"}>
        CodeMate
      </Heading>
      <Flex
        align="center"
        justify="space-evenly"
        p={4}
        bg="blue.500"
        color="yellow"
      >
        <Button
          onClick={handleSwitchMode}
          colorScheme="teal"
          size="sm"
          _focus={{ color: "green", bg: "teal.500", boxShadow: "outline" }}
          _active={{ color: "green", bg: "teal.600" }}
        >
          General Mode
        </Button>
        <SaveProgress onSave={saveProgress} />
        <Button
          onClick={handleSwitchMode}
          colorScheme="teal"
          size="sm"
          _focus={{ color: "green", bg: "teal.500", boxShadow: "outline" }}
          _active={{ color: "green", bg: "teal.600" }}
        >
          Chat
        </Button>
        <Button
          onClick={openChat}
          colorScheme="teal"
          size="sm"
          _focus={{ color: "green", bg: "teal.500", boxShadow: "outline" }}
          _active={{ color: "green", bg: "teal.600" }}
        >
          Collaboration
        </Button>
        <LanguageSelector language={language} onSelect={onSelect} zIndex="5" />
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
          <Box flex="1" maxW="50%" h="100%" position="inherit">
            <Output editorRef={editorRef} language={language} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CodeEditor;

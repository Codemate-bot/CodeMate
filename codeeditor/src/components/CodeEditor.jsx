import React, { useRef, useState } from "react";
import { Box, VStack, Flex, Heading } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import { CODE_SNIPPETS } from "../constants";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box w="100%" h="100%">
      <Flex align="center" justify="space-between" p={4} bg="blue.500" color="white">
        <Heading size="md">Code Editor</Heading>
        {/* Add your navbar items here */}
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
          <Box flex="1" maxW="50%" h="100%">
            <Output editorRef={editorRef} language={language} />
          </Box>
        </Flex>
      </Box>
      <LanguageSelector language={language} onSelect={onSelect} zIndex="1" />
    </Box>
  );
};

export default CodeEditor;

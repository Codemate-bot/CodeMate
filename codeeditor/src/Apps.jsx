import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import GeneralMode from "../../codemate/src/pages/GeneralMode";
import App from "../../codemate/src/App";
import IndividualMode from "../../codemate/src/pages/IndividualMode";
import LanguageSelector from "./components/LanguageSelector";
import Output from "./components/Output";


function Apps() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <CodeEditor />
      </Box>
  );
}

export default Apps;

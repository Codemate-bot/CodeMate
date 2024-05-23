import React from "react";
import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize={{ base: "md", md: "lg" }} color="pink">
        Language:
      </Text>
      <Menu isLazy>
        <MenuButton
          as={Button}
          colorScheme="whiteAlpha"
          variant="outline"
          color="white"
          _hover={{ bg: "gray.800" }}
          _expanded={{ bg: "gray.800" }}
          _focus={{ color: "yellow", bg: "gray.800", boxShadow: "outline" }} // Ensure background and text color on focus
          _active={{ color: "pink", bg: "gray.800" }} // Ensure background and text color on active
          fontSize={{ base: "sm", md: "md" }}
          textAlign="left"
        >
          {language}
        </MenuButton>
        <MenuList bg="#110c1b" color="blue" borderColor="gray.700">
          {languages.map(([lang, version]) => (
            <MenuItem
              key={lang}
              color={lang === language ? ACTIVE_COLOR : "pink"}
              bg={lang === language ? "gray.900" : "transparent"}
              _hover={{
                color: ACTIVE_COLOR,
                bg: "gray.900",
              }}
              _focus={{ color: ACTIVE_COLOR, bg: "gray.900" }} // Ensure text color and background on focus
              _active={{ color: ACTIVE_COLOR, bg: "gray.900" }} // Ensure text color and background on active
              fontSize={{ base: "sm", md: "md" }}
              onClick={() => onSelect(lang)}
            >
              <Text>
                {lang} <Text as="span" color="gray.600" fontSize="sm">({version})</Text>
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;

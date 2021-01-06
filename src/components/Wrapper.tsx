import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ToggleColorMode } from "./ToggleColorMode";

export const Wrapper: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Flex justifyContent="center">
        <Box w="50%" pt="0.625rem">
          {children}
        </Box>
      </Flex>
      <ToggleColorMode position="fixed" bottom="0.625rem" right="0.625rem" />
      <Footer />
    </>
  );
};

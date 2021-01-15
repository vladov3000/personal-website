import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Chakra } from "./Chakra";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { ToggleColorMode } from "./ToggleColorMode";

export const Wrapper: React.FC<{}> = ({ children }) => {
  return (
    <Chakra>
      <Navbar />
      <Flex justifyContent="center" px={["0.5rem", "5rem", "5rem"]}>
        <Box w={["20rem", "40rem", "50rem"]} pt="0.625rem">
          {children}
          <Footer />
        </Box>
      </Flex>
      {/* enable when they figure out how to fix color mode flashing
      <ToggleColorMode position="fixed" bottom="0.625rem" right="0.625rem" /> 
      */}
      <ToggleColorMode position="fixed" bottom="0.625rem" right="0.625rem" />
    </Chakra>
  );
};

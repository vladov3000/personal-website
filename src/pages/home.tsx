import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const homePage: React.FC<{}> = () => {
  return (
    <Box>
      <Heading> Welcome! </Heading>
      <Text fontSize="xl" mt="0.625rem">
        My name is Vladimir Ovechkin - an undergraduate in the University of
        Washington's CS Department graduating in June 2023. I have a deep
        interest in computer science and this website can give you a better
        understanding of my current knowledge and experience.
      </Text>
      <Text fontSize="xl" mt="1.875rem">
        You can reach out to me at vladov@uw.edu
      </Text>
    </Box>
  );
};

export default homePage;

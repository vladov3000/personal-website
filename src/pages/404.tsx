import { Box, Center, Divider, Heading } from "@chakra-ui/react";
import React from "react";
import { Wrapper } from "../components/Wrapper";

const FourOFour: React.FC<{}> = ({}) => {
  return (
    <Wrapper>
      <Center h="10rem">
        <Heading>404</Heading>
        <Box h="3rem">
          <Divider orientation="vertical" mx="1rem" />
        </Box>
        <Heading>Page Not Found</Heading>
      </Center>
    </Wrapper>
  );
};

export default FourOFour;

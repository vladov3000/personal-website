import { Box, Center, Divider, Heading } from "@chakra-ui/react";
import { NextApiResponse } from "next";
import React from "react";

const _errorPage: React.FC<{ res: NextApiResponse }> = ({ res }) => {
  return (
    <Center h="10rem">
      <Heading>{res ? res.statusCode : 404}</Heading>
      <Box h="3rem">
        <Divider orientation="vertical" mx="1rem" />
      </Box>
      <Heading>{res ? res.statusMessage : "Page Not Found"}</Heading>
    </Center>
  );
};

export default _errorPage;

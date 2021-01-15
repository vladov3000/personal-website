import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Footer: React.FC<{}> = () => {
  return (
    <Flex justifyContent="center" my="0.625rem">
      <Flex w="100%" flexDir="column" alignItems="center">
        <Divider />
        <Text color="GrayText">
          Computer icon made by
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
          >
            {" "}
            Smashicons{" "}
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </Text>
      </Flex>
    </Flex>
  );
};

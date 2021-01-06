import { BoxProps, Flex, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

export const ToggleColorMode: React.FC<BoxProps> = ({ ...props }) => {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      {...props}
      justifyContent="center"
      alignItems="center"
      flexDir={["column", "column", "row"]}
    >
      <Text> Dark Mode </Text>
      <Switch onChange={toggleColorMode} size="lg" ml="2px" />
    </Flex>
  );
};

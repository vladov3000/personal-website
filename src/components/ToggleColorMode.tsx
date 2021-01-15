import { BoxProps, Flex, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

export const ToggleColorMode: React.FC<BoxProps> = ({ ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      {...props}
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Text hidden={false}>Dark Mode</Text>
      <Switch
        onChange={toggleColorMode}
        size="lg"
        isChecked={colorMode === "dark"}
      />
    </Flex>
  );
};

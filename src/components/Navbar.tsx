import { Box, Flex, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const NavItem: React.FC<{ href: string }> = ({ children, ...props }) => {
  return (
    <Box
      display="inline-block"
      borderBottom={["2px solid black", "2px solid black", "none"]}
      w={["100%", "100%", "auto"]}
      ml={["3.125rem", "3.125rem", 0]}
      mr={[0, 0, "3.125rem"]}
    >
      <NavLink href={props.href}>
        <Text fontSize="3xl" fontWeight="medium">
          {children}
        </Text>
      </NavLink>
    </Box>
  );
};

const NavLink: React.FC<{ href: string }> = ({ children, ...props }) => {
  return (
    <NextLink href={props.href}>
      <a> {children} </a>
    </NextLink>
  );
};

export const Navbar: React.FC<{}> = () => {
  // h={["14.0625rem", "4.6875rem", "5.6875rem"]}
  return (
    <Flex
      bgGradient="linear(to-l, yellow.400, pink.500)"
      w="100%"
      py="1rem"
      alignItems="center"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      <Box>
        <NavLink href="/">
          <Flex alignItems="center" justify="center" ml={[0, 0, "1.875rem"]}>
            <Text fontSize="3xl" fontWeight="bold">
              Vladimir Ovechkin
            </Text>
            <Image src="/laptop.svg" w="4rem" h="4rem" ml="0.4375rem" />
          </Flex>
        </NavLink>
      </Box>

      <Box ml="auto" />
      <NavItem href="/blog"> Blog </NavItem>
      <NavItem href="/skills"> Skills </NavItem>
      <NavItem href="/courses"> Courses </NavItem>
    </Flex>
  );
};

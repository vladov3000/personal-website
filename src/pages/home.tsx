import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Wrapper } from "../components/Wrapper";

const homePage: React.FC<{}> = ({ cookies }: any) => {
  return (
    <Wrapper>
      <Heading> Welcome! </Heading>
      <Text fontSize="2xl" mt="0.625rem">
        My name is Vladimir Ovechkin - an undergraduate in the University of
        Washington's CS Department graduating June 2023. I have a deep interest
        in computer science and this website can give you a better understanding
        of my current knowledge and experience.
      </Text>
      <Text fontSize="2xl" mt="1.875rem">
        You can reach out to me at vladov@uw.edu
      </Text>
    </Wrapper>
  );
};

export default homePage;

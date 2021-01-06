import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import React from "react";
import { Wrapper } from "../components/Wrapper";
import theme from "../theme";

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ChakraProvider>
  );
}

export default MyApp;

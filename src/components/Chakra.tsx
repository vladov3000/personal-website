import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

export const Chakra: React.FC<{}> = ({ children }) => {
  return (
    <ChakraProvider theme={theme} colorModeManager={undefined}>
      {children}
    </ChakraProvider>
  );
};

import { extendTheme } from "@chakra-ui/react";

const config = {
  styles: {
    global: {
      "html, body": {
        minWidth: "360px",
      } as React.CSSProperties,
    },
  },
};

const theme = extendTheme(config);

export default theme;

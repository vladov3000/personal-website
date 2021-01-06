import { theme as chakraTheme } from "@chakra-ui/react";

const theme = {
  ...chakraTheme,
  styles: {
    global: {
      "html, body": {
        minWidth: "360px",
      } as React.CSSProperties,
    },
  },
};

export default theme;

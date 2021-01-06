import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const myTheme = {
  ...chakraTheme,
  styles: {
    global: {
      "html, body": {
        minWidth: "360px",
      } as React.CSSProperties,
    },
  },
} as typeof chakraTheme;

const theme = extendTheme(myTheme);

export default theme;

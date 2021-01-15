import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

type Theme = typeof chakraTheme;

const myTheme = {
  ...chakraTheme,
  config: {
    initialColorMode: "dark",
  },
  styles: {
    global: {
      "html, body": {
        minWidth: "360px",
      } as React.CSSProperties,
    },
  },
} as Theme;

const theme = extendTheme(myTheme) as Theme;

export default theme;

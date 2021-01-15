import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              // This is a modified copy of Chakra UI's Color Mode Script
              var mql = window.matchMedia("(prefers-color-scheme: dark)");
              var systemPreference = mql.matches ? "dark" : "light";
              var persistedPreference;

              try {
                persistedPreference = localStorage.getItem("chakra-ui-color-mode");
              } catch (error) {
                console.log("Chakra UI: localStorage is not available. Color mode persistence might not work as expected");
              }

              var isInStorage = typeof persistedPreference === "string";
              var colorMode;

              if (isInStorage) {
                colorMode = persistedPreference;
              } else {
                colorMode = initialValue === "system" ? systemPreference : initialValue;
              }

              if (colorMode === "dark") {
                document.body.style.backgroundColor = "#1A202C";
                window.addEventListener("load", () => {
                  document.body.style.backgroundColor = "";
                });
              }

              if (colorMode) {
                var root = document.documentElement;
                root.style.setProperty("--chakra-ui-color-mode", colorMode);
              }
            `,
            }}
          ></script>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;

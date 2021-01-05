import React from "react";
import { styles } from "../styles/webpage-style";
import { Nav } from "./Nav";

interface WebpageTemplateProps {
  children: JSX.Element | JSX.Element[] | null;
}

export const WebpageTemplate: React.FC<WebpageTemplateProps> = ({
  children,
}) => {
  return (
    <div style={styles.webpage}>
      <Nav />
      <> {children} </>
      <h1> Footer </h1>
    </div>
  );
};

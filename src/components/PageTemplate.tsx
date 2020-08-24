import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PageTemplateProps {
  children: JSX.Element | null;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <>
      <h1> Header </h1>
      <> {children} </>
      <h1> Footer </h1>
    </>
  );
};

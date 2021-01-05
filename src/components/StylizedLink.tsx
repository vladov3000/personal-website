import Link from "next/link";
import React, { useState } from "react";

interface LinkProps {
  href: string;
  normalStyle: React.CSSProperties;
  hoverStyle: React.CSSProperties;
  children: JSX.Element | null;
}

export const StylizedLink: React.FC<LinkProps> = ({
  href,
  normalStyle,
  hoverStyle,
  children,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={(): void => {
        setHover(true);
      }}
      onMouseLeave={(): void => {
        setHover(false);
      }}
    >
      <Link href={href}>
        <a
          style={{
            ...(hover ? hoverStyle : normalStyle),
          }}
        >
          {children}
        </a>
      </Link>
    </div>
  );
};

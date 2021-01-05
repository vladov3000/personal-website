import React from "react";
import { styles } from "../styles/nav-style";
import { StylizedLink } from "./StylizedLink";

const DEFAULT_TABS = ["home", "projects", "cheatsheets", "blog"];
const TAB_GRID_PADDING = 3;

interface NavProps {
  tabs?: string[];
}

export const Nav: React.FC<NavProps> = ({ tabs }) => {
  if (!tabs) tabs = DEFAULT_TABS;
  if (!styles.navList.gridTemplateColumns) {
    styles.navList.gridTemplateColumns =
      (TAB_GRID_PADDING ? ` repeat(${TAB_GRID_PADDING}, 10%) ` : "") +
      `repeat(${tabs.length}, 1fr)`;
  }

  return (
    <div style={styles.navList}>
      {tabs.map((tabName, idx) => (
        <div
          key={idx}
          style={{
            ...styles.navItem,
            gridColumnStart: Math.max(TAB_GRID_PADDING, 1) + idx + 1,
            gridColumnEnd: Math.max(TAB_GRID_PADDING, 1) + idx + 2,
          }}
        >
          <StylizedLink
            href={`/${tabName}`}
            normalStyle={styles.linkNormal}
            hoverStyle={styles.linkHover}
          >
            <> {tabName.toUpperCase()} </>
          </StylizedLink>
        </div>
      ))}
    </div>
  );
};

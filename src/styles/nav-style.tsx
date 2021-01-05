import { pallete } from "./colors";

export const styles = {
  navList: {
    width: "100%",
    height: "90px",
    backgroundColor: pallete[0],
    display: "grid",
    gridTemplateColumns: "", // if empty auto set to number of tabs
    gridTemplateRows: "1",
  },
  navItem: {
    // border: "2px solid red",
    padding: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridColumnStart: "x", // values will be set by nav
    gridColumnEnd: "x+1",
  },
  linkNormal: {
    color: pallete[3],
    textDecoration: "initial",
  },
  linkHover: {
    color: pallete[3],
    textDecoration: "underline",
  },
} as { [key: string]: React.CSSProperties };

import { GetStaticProps } from "next";
import React from "react";
import homePage from "../home";

const indexPage: React.FC<{ mode: string }> = ({ mode }) => {
  console.log(mode);
  return homePage({});
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: { mode: ctx.params?.mode ?? "light" },
  };
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { mode: "light" } }, { params: { mode: "dark" } }],
    fallback: false,
  };
}

export default indexPage;

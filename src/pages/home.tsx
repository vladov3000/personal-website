import Link from "next/link";
import React from "react";
import { WebpageTemplate } from "../components/WebpageTemplate";
import { githubLink } from "../utils";

const Home: React.FC<null> = () => {
  return (
    <WebpageTemplate>
      <h1> Welcome </h1>
      <p>
        I am Vladimir Ovechkin - an undergraduate student majoring in Computer
        Science at University of Washington expecting to graduate June 2023.
      </p>
      <p>
        While you are here, check out my{" "}
        <Link href="/projects">
          <a>projects</a>
        </Link>{" "}
        since I often cannot fit them all into my one page resume. The
        cheatsheets display the frequent code snippets and features from
        different tools I use. Lastly, browse my blog for in-depth tutorials,
        project ideas, and other interesting thoughts.
      </p>
      <p> Enjoy!</p>
      <h1> What I am Working On</h1>
      <p> From my {githubLink}: </p>
    </WebpageTemplate>
  );
};

export default Home;

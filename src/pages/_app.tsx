import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // return (
  //   <ChakraProvider theme={theme}>
  //     <CSSReset />
  //     <Wrapper>
  //       <Component {...pageProps} />
  //     </Wrapper>
  //   </ChakraProvider>
  // );
  return <Component {...pageProps} />;
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   console.log(context);
//   return {
//     props: {
//       hello: "world",
//       cookies: context.req.cookies ?? {},
//     },
//   };
// };

export default MyApp;

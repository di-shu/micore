import React from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "../src/Components";
import StoreProvider from "../redux/StoreProvider";

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <StoreProvider>
          <Header />
          <Component key={router.route} {...pageProps} />
        </StoreProvider>
      </AnimatePresence>
    </>
  );
};

export default App;

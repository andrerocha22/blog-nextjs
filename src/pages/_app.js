import React from "react";
import NextApp from "next/app";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import "../styles/styles.css";
import MainLayout from "../components/Layouts/Main";

const theme = {
  primary: "green",
};

export default class App extends NextApp {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <MainLayout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MainLayout>
      </ThemeProvider>
    );
  }
}

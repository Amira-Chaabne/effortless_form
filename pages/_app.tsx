import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import { Notifications } from "@mantine/notifications";
import { AppContextProvider } from "@/contexts/AppContext";
import { appWithTranslation } from "next-i18next";

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Effortless Form</title>
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <Notifications />
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </MantineProvider>
    </>
  );
}

export default appWithTranslation(App);

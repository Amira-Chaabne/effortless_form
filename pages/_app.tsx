import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import { Notifications } from "@mantine/notifications";
import { AppContextProvider } from "@/contexts/AppContext";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Sign Form page</title>
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

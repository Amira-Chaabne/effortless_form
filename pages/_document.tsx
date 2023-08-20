import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";
import i18nextConfig from "../next-i18next.config";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    const queryLocale = this.props.__NEXT_DATA__.query.locale;
    const defaultLocale = i18nextConfig.i18n.defaultLocale;
    const currentLocale =
      typeof queryLocale === "string" ? queryLocale : defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,400;10..48,500;10..48,600;10..48,700;10..48,800&family=Inter:wght@300;400;500;600;700;800&family=Noto+Serif+Vithkuqi:wght@400;500&family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

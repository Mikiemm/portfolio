import Head from "next/head"
import { Header } from "layouts/Header"
import { ThemeProvider } from "emotion-theming"
import { css } from "@emotion/core"

const THEME = {
  color: {
    gray100: "#f5f9ff",
    gray200: "#eaeff7",
    gray500: "#8a96a8",
    gray600: "#667386",
    gray700: "#485a74",
    gray800: "#343c47",
    gray900: "#0c0c0c",
  },
  width: {
    container: () => css`
      width: calc(100% - 40px * 2);
      max-width: 1040px;
    `,
  },
  font: {
    h1: () => css`
      font-family: "urbane", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 40px;
      line-height: 130%;
      letter-spacing: 0.01em;
    `,
    h2: ({ medium }) => css`
      font-family: "urbane", sans-serif;
      font-style: normal;
      font-weight: ${medium ? 500 : 300};
      font-size: 28px;
      line-height: 150%;
    `,
    h3: () => css`
      font-family: "freight-sans-pro", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;

      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-feature-settings: "pnum" on, "lnum" on;
    `,
    p: ({ bold }) => css`
      font-family: "freight-sans-pro", sans-serif;
      font-style: normal;
      font-weight: ${bold ? 600 : 500};
      font-size: 20px;
      line-height: 160%;
      font-feature-settings: "pnum" on, "lnum" on;
    `,
    secondary: () => css`
      font-family: "freight-sans-pro", sans-serif;
      font-style: italic;
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
    `,
    menu: () => css`
      font-family: "urbane", sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: 0.02em;
    `,
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Markéta Švidrnochová</title>
        <link href="https://use.typekit.net/gyg6nue.css" rel="stylesheet" />
      </Head>
      <style jsx global>{`
        body {
          --f-heading: "urbane", sans-serif;
          --f-text: "freight-sans-pro", sans-serif;
          --w-container: 1040px;

          --c-gray100: #f5f9ff;
          --c-gray200: #eaeff7;
          --c-gray500: #8a96a8;
          --c-gray600: #667386;
          --c-gray700: #485a74;
          --c-gray800: #343c47;
          --c-gray900: #0c0c0c;

          margin: 0;
          padding: 0;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
      `}</style>
      <ThemeProvider theme={THEME}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

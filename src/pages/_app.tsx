import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../../shared/global.css";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://e7efb7d772e945aabcf5aa58e6655f87@o576316.ingest.sentry.io/5733290",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
  release: "hulu-clone@" + process.env.npm_package_version,
  environment: "production",
});

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width initial-scale=1" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#fff" />
      <title>Hulu clone</title>
      <meta name="description" content="Clone of Hulu streaming platform made in Next.js" />
      <link rel="icon" href="/static/favicon.png" />
      <link rel="apple-touch-icon" href="/static/apple-touch-icon.png"></link>
      <link rel="apple-touch-icon" sizes="57x57" href="/static/touch-icon-iphone.png"></link>
      <link rel="apple-touch-icon" sizes="76x76" href="/static/touch-icon-ipad.png"></link>
      <link rel="apple-touch-icon" sizes="120x120" href="/static/touch-icon-iphone-retina.png"></link>
      <link rel="apple-touch-icon" sizes="152x152" href="/static/touch-icon-ipad-retina.png"></link>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/touch-icon-iphone-6-plus.png"></link>
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hulu-clone.vercel.app" />
      <meta property="og:title" content="Hulu clone" />
      <meta property="og:description" content="Clone of Hulu streaming platform made in Next.js" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://hulu-clone.vercel.app" />
      <meta property="twitter:title" content="Hulu clone" />
      <meta property="twitter:description" content="Clone of Hulu streaming platform made in Next.js" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;

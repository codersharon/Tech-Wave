import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Navbar from "./comps/Navbar";
import LoadingBar from "react-top-loading-bar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });

    router.events.on("routeChangeComplete", () => {
      setProgress(400);
    });
  });

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;

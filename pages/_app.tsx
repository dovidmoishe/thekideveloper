import Layout from "@/components/Shared/Layout";
import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/next";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="David Baiye Ayomide"
        description="Portfolio website of the young software engineer "
      />
      <Layout>
        <Analytics />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

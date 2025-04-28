import Layout from "@/components/Shared/Layout";
import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/next";
import { DefaultSeo } from "next-seo";
import SEO from "@/data/seo";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <meta name="description" content="David Baiye AI & Web3 developer building scalable dApps, smart contracts, and intelligent learning platforms. Explore my projects, and services at itsdave.tech." />
    <meta name="keywords" content="web3 developer, AI engineer, solidity, nextjs developer, blockchain developer, smart contract auditor, david baiye"/>
    </Head>
      <DefaultSeo {...SEO} />
      <Layout>
        <Analytics />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

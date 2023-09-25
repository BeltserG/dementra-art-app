import MainLayout from "@/components/Layout/MainLayout";
import Head from "next/head";
import { getFullPageTitle } from "@/helpers/strings/getFullPageTitle";
import "@/styles/Global.scss";

export default function App({ Component, pageProps }) {
  const fullPageTitle = getFullPageTitle("Dementra Art");
  return (
    <MainLayout pageProps={pageProps}>
      <Head>
        <title>{fullPageTitle}</title>
        <meta
          name="description"
          content="Welcome to Dementra Art Gallery! 2D Art & Environmental Design, Oil Painting, Glass Art"
        />
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
}
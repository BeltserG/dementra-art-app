import MainLayout from "@/components/Layout/MainLayout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Head>
        <title>Dementra Art</title>
        <meta
          name="description"
          content="Welcome to Dementra Art Gallery! 2D Art and Environmental Design, Oil Painting, Glass Art"
        />
        <meta httpEquiv="Content-Type" content="text/html" charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  );
}
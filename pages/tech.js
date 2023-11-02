import { NextSeo } from "next-seo";
import Head from "next/head";
import Section from "./comps/Section";

const TechNews = (props) => {
  return (
    <>
      <NextSeo
        title={"TechWave"}
        description="Online Tech guid, news, tech tricks and tips"
        canonical="https://tech-vave.vercel.app/"
      />

      <Head>
        <title>TechWave</title>
        <meta
          name="description"
          content="Online Tech guid, news, tech tricks and tips"
        />
        <meta
          property="og:image"
          content="https://tech-vave.vercel.app/favicon.ico"
        />
        <meta
          property="og:url"
          content="https://tech-vave.vercel.app/tech-news"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center flex-col">
        <Section />
      </div>
    </>
  );
};

export default TechNews;

import { NextSeo } from "next-seo";
import Head from "next/head";
import Posts from "./comps/Posts";

const Home = () => {
  return <>
  <Posts />
  </>
}

export default Home;

// let r = await axios('https://newsapi.org/v2/top-headlines?country=in&category=technology&language=en&apiKey=' + mySecret2 +`&page=1&pageSize=3`);

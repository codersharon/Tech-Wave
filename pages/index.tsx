const mySecret = process.env["api"];
const mySecret2 = process.env["api2"];
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import Navbar from "./comps/navbar";
import Post from "./comps/post";
import Footer from "./comps/footer";

const Home: NextPage = (props: any) => {
  const [posts, setPosts] = useState(props.data.posts);
  const [news, setNews] = useState(props.news.articles);
  const router = useRouter();
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
        <meta property="og:url" content="https://tech-vave.vercel.app/" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <Box
        sx={{
          width: "100vw",
          height: { xs: "fit-content", md: "fit-content" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          // justifyContent: "",
        }}
      >
        {news.map((newsitem: any) => {
          return (
            <Card
              key={newsitem.title}
              sx={{ width: "100%" }} //height: { xs: "fit-content", md: "100%" } }}
            >
              <a
                style={{ textDecoration: "none" }}
                href={newsitem.url}
                target="_blank"
                rel="noreferrer"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={
                      newsitem.urlToImage	? newsitem.urlToImage : "https://tech-vave.vercel.app/no.webp"
                    }
                    alt="No image available"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ fontSize: { xs: 20, lg: 20 } }}
                    >
                      {newsitem.title
                        ? newsitem.title.slice(0, 45)
                        : "not title available"}
                      ...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </a>
            </Card>
          );
        })}
      </Box>

      <Typography
        variant="h4"
        sx={{ m: 2.5, textAlign: { xs: "center", md: "start" } }}
      >
        Latest Posts
      </Typography>
      <Box>
        {posts.map((post: any) => {
          return (
            <Post
              key={post._id}
              id={post._id}
              title={post.title}
              desc={post.content ? post.content : "no description available"}
              image={post.image ? post.image : "/no.webp"}
              date={post.date}
            />
          );
        })}
      </Box>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const a = await fetch("https://tech-vave.vercel.app/api/post", {
    method: "GET",
  });
  const data = await a.json();
  let r = await axios(
    "https://newsapi.org/v2/top-headlines?country=in&category=technology&language=en&apiKey=" +
      mySecret2 +
      `&page=1&pageSize=3`
  );
  let news = await r.data;
  return {
    props: { data, news },
  };
}

export default Home;

// let r = await axios('https://newsapi.org/v2/top-headlines?country=in&category=technology&language=en&apiKey=' + mySecret2 +`&page=1&pageSize=3`);

import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import Sidecard from "./Sidecard";
import NewsItem from "./NewsItem";

const Section = (props) => {
  const [articles, setArticles] = useState(props ? props.data.articles : []);
  const [page, setPage] = useState(1);

  const getMore = async () => {
    let r = await fetch(`/api/news?page=${page + 1}`, { method: "POST" });
    let a = await r.json();
    setPage(page + 1);
    setArticles(articles.concat(a.articles));
  };
  return (
    <div className="flex items-center justify-center md:items-start md:justify-between flex-col md:flex-row">
      <InfiniteScroll
        dataLength={page * 10}
        next={getMore}
        hasMore={articles.length !== props.data.totalResults}
        loader={<h1>loading...</h1>}
        endMessage={<h1>News finished</h1>}
      >
        {articles.map((newsitem) => {
          return (
            <NewsItem
              key={newsitem.title}
              title={newsitem.title ? newsitem.title : "not title available"}
              img={newsitem.urlToImage ? newsitem.urlToImage : `/no.webp`}
              desc={
                newsitem.description
                  ? newsitem.description
                  : "no description available"
              }
              url={newsitem.url}
              date={newsitem.publishedAt}
              auth={newsitem.author ? newsitem.author : "author not available"}
              source={
                newsitem.source.name ? newsitem.source.name : newsitem.source.id
              }
            />
          );
        })}
      </InfiniteScroll>
      <Sidecard id={"entertainment"} />
      <Sidecard id={"business"} />
      <Sidecard id={"science"} />
      <Sidecard id={"technology"} />
      <Sidecard id={"smartPhone"} />
      <Sidecard id={"laptops"} />
      <Sidecard id={"gaming"} />
      <Sidecard id={"accessories"} />
      <Sidecard id={"gadgets"} />
      <Sidecard id={"technology"} />
    </div>
  );
};

export async function getServerSideProps(context) {
  let r = await fetch(`https://tech-vave.vercel.app/api/news?page=1`, {
    method: "POST",
    body: '{"category": "tech"}',
  });
  let data = await r.json();
  return {
    props: { data },
  };
}

export default Section;

import { useState } from "react";
import { NextSeo } from "next-seo";
// import Image from "next/image"
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const Slug = (props) => {
  const [title, setTitle] = useState(props.data.title);
  const [date, setDate] = useState(props.data.date);
  const [content, setContent] = useState(
    props.data.content ? props.data.content : ""
  );
  const [image, setImage] = useState(props.data.image);
  const [links, setLinks] = useState(
    props.data.links ? props.data.links.split(" ") : []
  );
  const [tags, setTags] = useState(
    props.data.tags ? props.data.tags.split("#").slice(1, 6) : []
  );
  const [likes, setLikes] = useState(props.data.likes);
  const [liked, setLiked] = useState(false);
  const handleLike = async () => {
    if (liked == false) {
      const request = await fetch(`/api/posts/liked?id=${props.i}`, {
        method: "PUT",
      });
      const response = await request.json();
      setLiked(true);
      setLikes(likes + 1);
    } else if (liked == true) {
      const request = await fetch(`/api/posts/unliked?id=${props.i}`, {
        method: "PUT",
      });
      const response = await request.json();
      setLiked(false);
      setLikes(likes - 1);
    }
    setLiked(true);
  };
  return (
    <>
      <NextSeo
        title={title ? title : "title || TechWave"}
        description={content.slice(0, 60)}
        canonical={`https://tech-vave.vercel.app/`}
        openGraph={{
          url: `https://tech-vave.vercel.app/blogpost/posts/${props.i}`,
          title: title,
          description: content.slice(0, 60),
          images: {
            url: "/favicon.ico",
          },
        }}
      />

      <Head>
        <meta property="og:image" content={image ? image : "/no.webp"} />
      </Head>

      <div className="min-h-[100vh]" style={{ margin: "0% 12px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={image ? image : "/no.webp"}
            width={"720px"}
            height={"720px"}
            alt="image"
            className="rounded-xl mx-2 my-2"
          />
          <Typography variant="h3">{title ? title : "title"}</Typography>
        </Box>
        <hr></hr>
        {/* <p className="text-2xl my-2">{content ? content : "content"}</p> */}
        <Typography component={"p"} variant="h5">
          {content ? content : "content"}
        </Typography>
        <p styles={{ fontSize: "large" }}>{date ? date : "date"}</p>
        <span className="border-t-2 border-white flex flex-col justify-center items-start">
          {links.map((link) => {
            return (
              <Typography
                variant="h6"
                component={"a"}
                key={link}
                target="_blank"
                rel="noreferrer"
                href={link}
              >
                {link}
              </Typography>
            );
          })}
        </span>
        <span className="border-t-2 border-white flex flex-col justify-center items-start">
          {tags.map((tag) => {
            return (
              <Typography
                variant="h6"
                component={"a"}
                key={tag}
                target="_blank"
                rel="noreferrer"
                href={"https://www.google.com/search?q=" + tag}
              >
                #{tag}
              </Typography>
            );
          })}
        </span>
        <p className="font-semibold mr-[32px] flex items-center justify-start">
          <ThumbUpOffAltIcon sx={{ cursor: "pointer" }} onClick={handleLike} />
          {likes}
        </p>
      </div>
    </>
  );
};

// export async function getStaticPaths() {
// 	const ab = await fetch('https://tech-vave.vercel.app/api/post')
// 	const posts = await ab.json();
//   const paths = posts.posts.map((post) => {
// 		return { params: { slug: post._id } }
// 	})

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const a = await fetch(`https://tech-vave.vercel.app/api/getpost?id=${slug}`, {
    method: "GET",
  });
  const data = await a.json();

  return {
    props: { data, i: slug },
  };
}

export default Slug;

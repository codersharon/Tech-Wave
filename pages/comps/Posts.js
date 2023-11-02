import React from "react";
import Post from "./Post";
import { useState } from "react";

function Posts(props) {
  const [post, setPost] = useState(props.data.posts ? props.data.props : {});

  return (
    <div className="text-white w-full flex items-center justify-between">
      <div className="flex flex-col items-start justify-center">
        <Post
          key={post._id}
          id={post._id}
          title={post.title}
          desc={post.content ? post.content : "no description available"}
          image={post.image ? post.image : "/no.webp"}
          date={post.date}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const a = await fetch("https://tech-vave.vercel.app/api/post", {
    method: "GET",
  });
  const data = await a.json();
  return {
    props: { data },
  };
}

export default Posts;

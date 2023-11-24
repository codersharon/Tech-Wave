import React from "react";
import Post from "./Post";
import { useState, useEffect } from "react";

const Posts = (props) => {
		console.log(props) 
  // const [posts, setPosts] = useState(props? props.data.posts : []);
	// useEffect(() => {
	// if (props !== undefined) {
	// }
	// 	setPosts({props? props.posts : []})
	// }, [0])
  return (
    <div className="text-white w-full flex items-center justify-between">
      <div className="flex flex-col items-start justify-center">
        {/* {posts.map((post) => {
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
        })} */}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
	const url = 'https://techvave.sharonsandeep.repl.co/api/post';

	const response = await fetch(url);

	const data = await response.text();

	console.log(data);
  return {
    props: data,
  };
}

export default Posts;

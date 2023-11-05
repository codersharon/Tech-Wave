import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

function Sidecard(props) {
  const [genre, setGenre] = useState(props ? props.id : "entertainment");
  const [news, setNews] = useState({});
  const getTheNews = async () => {
    let r = await fetch(`https://tech-vave.vercel.app/api/news?page=1`, {
      method: "POST",
      body: JSON.stringify({
        category: genre,
      }),
    });
    let data = await r.json();
    setNews(data);
  };
  useEffect(() => {
    getTheNews();
  }, [0]);

  return (
    <div className="bg-[#AE574B] p-4 text-black w-full md:w-[36%] mx-0 my-10 md:mx-10 lg:w-[30%]">
      <Link href={"/"}>
        <h2 className="font-inria text-[20px] font-medium -tracking-widest">
          {genre}
        </h2>
        <img src="/GPixel-8pro.jpeg" alt="" className="w-full" />
        <h2 className="font-im-fell-great-primer font-bold text-[24px] mt-[-18px] text-[#272727]">
          {data.title}
        </h2>
      </Link>
    </div>
  );
}
export default Sidecard;

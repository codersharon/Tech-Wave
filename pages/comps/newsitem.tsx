import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";

const NewsItem = (props: any) => {
  const [img, setImg] = useState(props.img);
  const [desc, setDesc] = useState(props.desc);
  const [title, setTitle] = useState(props.title);
  const [url, setUrl] = useState(props.url);
  const [date, setDate] = useState(props.date);
  const [auth, setAuth] = useState(props.auth);
  const [source, setSource] = useState(props.source);

  return (
    <>
      {/* <div className='bg-black text-white border-2 border-black lg:w-[724px] py-2 rounded-lg'>
			<img src={img?.search(/https:/)==0? img : `/no.webp`}  className='lg:w-[720px] lg:h-[480px] sm:px-5 blur-none rounded' />
			<h1 className='blur-none font-bolder text-2xl border-b-2 border-white'>{title? title.slice(0, 45) + "...": "not available"}</h1>
			<p className='blur-none text-lg border-b-2 border-white'>{desc? desc.slice(0, 85) + "...": "not available"}</p>
			<p>publised at: {date}</p>
			<p>author: {auth}</p>
			<p>source: {source}</p>
			<p className='font-bold text-lg'>News by <a className='hover:underline' target='_blank' rel="noreferrer" href='https://newsapi.org'>NewsAPI</a></p>
			<button className='ml-[66%]'><a href={url} target='_blank' rel="noreferrer" className='bg-white text-black hover:text-white border-2 hover:border-white hover:bg-black p-2 mx-2 mt-5 rounded-lg'>Read More</a></button>
		</div> */}

      <Card sx={{}}>
        <CardActionArea
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            width: "fit-content",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <CardMedia
            component="img"
            sx={{
              maxWidth: "320px",
              maxHeight: "240px",
              m: "15px",
              borderRadius: "12px",
            }}
            image={img ? img : "/no.webp"}
          />
          <CardContent component={'a'} href={url} target='_blank' rel="noreferrer">
            <Typography variant="h4">
              {title ? title : "no title available!"}
            </Typography>
            <Typography variant="h6" component={"p"}>
              {desc ? desc : "no description available!"}
            </Typography>
            <Typography variant="h6" component={"li"}>
              {date ? date : "no date and time available!"}
            </Typography>
            <Typography variant="h6" component={"li"}>
              {auth ? auth : "author info not available!"}
            </Typography>
            <Typography variant="h6" component={"li"}>
              {source ? source : "source info not available!"}
            </Typography>
            <Typography variant="h6" component={"a"} href="https://newsapi.org/" target="_blank" rel="noreferrer">
              News by NewsAPI
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <hr />
    </>
  );
};

export default NewsItem;

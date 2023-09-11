import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useState } from "react";
import Link from "next/link";
const Post = (props: any) => {
  const [liked, setLiked] = useState(false);
  const handleLike = async () => {
    if (liked == false) {
      const request = await fetch(`/api/posts/liked?id=${props.id}`, {
        method: "PUT",
      });
      const response = await request.json();
      console.log(response);
      setLiked(true);
    } else if (liked == true) {
      const request = await fetch(`/api/posts/unliked?id=${props.id}`, {
        method: "PUT",
      });
      const response = await request.json();
      console.log(response);
      setLiked(false);
    }
  };
  return (
    <>
      <Card key={props.id}>
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
            image={props.image}
          />
          {props.desc ? (
            <Link href={`/blogpost/posts/${props.id}`}>
              <CardContent>
                <Typography variant="h4">{props.title}</Typography>
                <Typography variant="h6">
                  {props.desc.slice(0, 180)}....
                </Typography>
                <Typography>{props.date}</Typography>
                <ThumbUpOffAltIcon onClick={handleLike} />
              </CardContent>
            </Link>
          ) : (
            <CardContent>
              <Typography variant="h4">{props.title}</Typography>
              <Typography>{props.date}</Typography>
              <ThumbUpOffAltIcon onClick={handleLike} />
            </CardContent>
          )}
        </CardActionArea>
      </Card>
      <hr />
    </>
  );
};

export default Post;

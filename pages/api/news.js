import axios from "axios";
const mySecret = process.env["api"];
const mySecret2 = process.env["api2"];

import NextCors from "nextjs-cors";

async function TechNews(req, res) {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  if (req.method == "POST") {
    let page = req.query.page;
    let category = req.body.category;
    let r = await axios(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&language=en&apiKey=` +
        mySecret +
        `&page=${page}&pageSize=10`
    );
    let a = await r.data;
    res.status(200).json(a);
  } else {
    res.status(404);
  }
}

export default TechNews;

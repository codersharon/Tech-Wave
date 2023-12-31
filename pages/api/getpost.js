import connectToDB from './mongodb/db'
import Post from './mongodb/models/post'
import NextCors from 'nextjs-cors';

async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: ['http://localhost:3000/', 'https://tech-vave.vercel.app/'],
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });
	if (req.method == "GET") {
		let posts = await Post.findById(req.query.id);
		res.status(200).json(posts);
	}
}

export default connectToDB(handler)

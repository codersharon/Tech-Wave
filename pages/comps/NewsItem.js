const NewsItem = (props) => {
  const [img, setImg] = useState(props.img);
  const [desc, setDesc] = useState(props.desc);
  const [title, setTitle] = useState(props.title);
  const [url, setUrl] = useState(props.url);
  const [date, setDate] = useState(props.date);
  const [auth, setAuth] = useState(props.auth);
  const [source, setSource] = useState(props.source);

  return (
    <>
      <div className="bg-black text-white my-8 border-white border-solid border-l-2 ml-5 px-2 w-full md:w-[40%] lg:w-[28%]">
        <div className="flex items-center mb-2 justify-between">
          <div className="flex flex-col items-start justify-center text-[12px] ">
            <li>{date}</li>
            <li>{auth}</li>
            <li>{source}</li>
          </div>
          <a href="https://newsapi.org/" target="_blank" rel="noreferrer">
            <li className="text[14px] font-bold list-none">FROME NEWS API</li>
          </a>
        </div>
        <img className="w-full" src={img} alt="image" />
        <a href={url} target="_blank" rel="noreferrer">
          <h2 className="text-start text-[24px] font-semibold w-full mt-[-18px] text-gray-400">
            {title}
          </h2>
        </a>

        <p className="text-start text-[18px]">{desc}</p>
      </div>
    </>
  );
};

export default NewsItem;

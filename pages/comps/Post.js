const Post = (props) => {
  return (
    <>
      <div
        className="cursor-pointer flex items-start justify-start w-full md:w-fit my-8 border-white border-solid border-l-2 ml-5"
        key={props.id}
      >
        <div className="flex items-start flex-col justify-center ml-5">
          <img
            src={props.image}
            alt="post-image"
            className="w-[193.85px] h-[131.68px]"
          />
          <h1 className="drop-shadow-sm md:drop-shadow-none md:hidden inline-block text-start font-impact space-x-[1%] md:mt-0 text-[28px] md:text-[32px] w-[75%] md:w-[36%] mt-[-18px] mx-4">
            {props.title}
          </h1>
          <li className="my-1">By Sharon</li>
          <li className="my-1">{props.date}</li>
        </div>
        <h1 className="hidden md:inline-block text-start font-impact space-x-[1%] text-[32px] w-[36%] mt-0 mx-4">
          {props.title}
        </h1>
      </div>
    </>
  );
};

export default Post;

import React from "react";

export default function Dailyquote() {
  return (
    <div className="overflow-x-hidden flex flex-col md:flex-row-reverse items-center md:justify-center text-white p-8">
      <img
        src="/stevejobs.jpeg"
        alt="quote-image"
        className="w-full lg:w-[40%]"
      />
      <div className="flex flex-col items-center">
        <p className="m-0 md:mx-2 font-im-fell-great-primer w-[100%] text-[36px] lg:text-[48px] text-center md:text-start mt-[-5%] md:mt-0">
          “The Great things in Business are done by person”
        </p>
        <p className="font-inter text-[24px] md:text-[32px] w-full text-end mr-4 my-[12px]">
          -Steve Jobs
        </p>
      </div>
    </div>
  );
}

/* eslint-disable */
import Link from "next/link";
import GitHub from "@mui/icons-material/GitHub";
import AdbIcon from "@mui/icons-material/Adb";
import { Instagram } from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <footer className="sm:w-full text-gray-400 bg-balck body-font w-full">
        <div className="container px-5 py-2 mx-auto flex items-center justify-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <AdbIcon />
            <span className="font-bold ml-3 text-xl sm:text-lg cursor-default">
              T e c h W a v e
            </span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            <a
              href="https://github.com/codersharon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
          </p>
          <span className="sm:mx-2 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://www.instagram.com/sharon4.6.5"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

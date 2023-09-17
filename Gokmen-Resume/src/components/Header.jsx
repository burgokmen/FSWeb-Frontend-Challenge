import gokmen from "../assets/gokmen2.png";
import githubSvg from "../assets/github.svg";
import linkedinSvg from "../assets/LinkedIn.svg";
import data from "../data";
import { SettingsContext } from "../contexts/SettingsProvider";
import { useContext } from "react";

function Header() {
  const { language } = useContext(SettingsContext);
  return (
    <header className="flex flex-wrap p-5 justify-center flex-col sm:flex-row ">
      <div>
        <h1 className="font-interbold font-bold sm:text-mygreen-1 text-[#333232] text-[3.5rem] ">
          {data[language].header.title}
          <br /> {data[language].header.titleSecond}
        </h1>

        <p className="font-interreg font-normal text-white text-[1.5rem] ">
          {data[language].header.description}
          <br /> {data[language].header.description2}
        </p>
        <div className="flex">
          <a
            href="https://github.com/burgokmen"
            target="_blank"
            className="bg-white dark:bg-[#252128] flex hover:bg-indigo-300 text-indigo-800 dark:text-[#FFFFFF] font-intermed font-medium text-[18px] py-2 px-4 border border-blue-700 dark:border-[#FFFFFF] rounded"
            rel="noreferrer"
          >
            <img
              className="mr-2 w-[1.3rem] h-[1.3rem]  "
              src={githubSvg}
              alt="Github"
            />
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/bgokmen/"
            target="_blank"
            className="ml-[1rem] dark:bg-[#252128] flex bg-white hover:bg-indigo-300 text-indigo-800 dark:text-[#FFFFFF] font-intermed font-medium text-[18px] py-2 px-4 border border-blue-700 dark:border-[#FFFFFF] rounded"
            rel="noreferrer"
          >
            <img
              className="mr-2 w-[1.3rem] h-[1.3rem] dark:fill-[#FFFFFF] "
              src={linkedinSvg}
              alt="LinkedIn"
            />
            Linkedin
          </a>
        </div>
      </div>
      <img src={gokmen} className="w-[14rem] h-[18rem] ml-[10rem] rounded-lg" />
    </header>
  );
}

export default Header;

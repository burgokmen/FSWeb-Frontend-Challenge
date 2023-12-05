import { useContext } from "react";
import data from "../data";
import { MapContext } from "../contexts/MapProvider";
import { SettingsContext } from "../contexts/SettingsProvider";

export default function Projects() {
  const { buttonFunc } = useContext(MapContext);
  const { language } = useContext(SettingsContext);

  return (
    <div className="projects bg-mygreen-1 dark:bg-mydark-2 ">
      <h2 className="px-[16.66%] py-[3rem] text-mypurp-1 dark:text-mygreen-1 text-[3rem] font-interbold font-bold">
        {data[language].projects?.title}
      </h2>
      {data[language].projects?.projectsArray.map((pr, i) => {
        return (
          <div
            key={i}
            className="flex-col pb-10 w-160 md:w-320 lg:w-480 ml-2  "
          >
            <div className="flex flex-wrap justify-center  ">
              <img className="w-[32rem] h-[20rem]  " src={pr.img} alt="Proce" />
              <div className="w-[32rem] lg:h-[20rem] p-6  bg-white flex flex-col dark:bg-mydark-3 ">
                <h3 className="font-bold text-[1.6rem] pb-[1.3rem] dark:text-[#C1BAED] ">
                  {pr.title}
                </h3>
                <p className="font-normal text-[0.8rem] pb-[1.3rem] dark:text-[#FFFFFF] ">
                  {pr.description}
                </p>
                <div className="pb-[1.3rem]">
                  {buttonFunc(data[language].projects.buttonArr)}
                </div>
                <div className="flex">
                  <a
                    className="pr-8 underline dark:text-[#CBF281]"
                    href={pr.url}
                  >
                    {pr.visit}
                  </a>
                  <a className="underline dark:text-[#CBF281]" href={pr.github}>
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

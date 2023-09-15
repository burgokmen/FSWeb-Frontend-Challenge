import { useContext } from "react";
import heroPhoto from "../assets/project-photo.png";
import data, { buttonArr, projectsData } from "../data";
import { MapContext } from "../contexts/MapProvider";
import { SettingsContext } from "../contexts/SettingsProvider";

//TODO real project photos and links need to be added

export default function Projects() {
  const { buttonFunc } = useContext(MapContext);
  const { language } = useContext(SettingsContext);

  return (
    <div className="projects bg-mygreen-1 dark:bg-mydark-2 ">
      <h2 className="px-[16.66%] py-[3rem] text-mypurp-1 dark:text-mygreen-1 text-[3rem] font-interbold font-bold">
        {data[language].projects?.title}
      </h2>
      {projectsData.map((pr, i) => {
        return (
          <div
            key={i}
            className="flex-col pb-10 max-[500px]:max-w-[300px] ml-2  "
          >
            <div className="flex justify-center  ">
              <img
                className="w-[20rem] h-[20rem] rounded-l-xl "
                src={heroPhoto}
              />
              <div className="w-[22rem] h-[20rem] p-6 rounded-r-xl bg-white flex-col dark:bg-mydark-3 ">
                <h3 className="font-bold text-[1.6rem] pb-[1.3rem] dark:text-[#C1BAED] ">
                  {pr.h3}
                </h3>
                <p className="font-normal text-[0.8rem] pb-[1.3rem] dark:text-[#FFFFFF] ">
                  {pr.p}
                </p>
                <div className="pb-[1.3rem]">{buttonFunc(buttonArr)}</div>
                <div className="flex">
                  <a
                    className="pr-8 underline dark:text-[#CBF281]"
                    href="https://www.w3schools.com/"
                  >
                    View Site
                  </a>
                  <a
                    className="underline dark:text-[#CBF281]"
                    href="https://www.w3schools.com/"
                  >
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

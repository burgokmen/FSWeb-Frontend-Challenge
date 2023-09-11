import { useContext } from "react";
import heroPhoto from "../assets/project-photo.png";
import { buttonArr, projectsData } from "../data";
import { MapContext } from "../contexts/MapProvider";
//TODO border radius need to added + shadow can be added lin18
//TODO real project photos and links need to be added

export default function Projects() {
  const { buttonFunc } = useContext(MapContext);

  return (
    <div className="projects bg-mygreen-1 h-[60rem]">
      <h2 className="px-[7.5rem] py-[3rem] text-mypurp-1 text-[3rem] font-interbold font-bold">
        Projects
      </h2>
      {projectsData.map((pr, i) => {
        return (
          <div key={i} className="flex-col pb-10">
            <div className="flex justify-center ">
              <img className="w-[20rem] h-[20rem] " src={heroPhoto} />
              <div className="w-[22rem] h-[20rem] p-6 bg-white flex-col ">
                <h3 className="font-bold text-[1.6rem] pb-[1.3rem]">{pr.h3}</h3>
                <p className="font-normal text-[0.8rem] pb-[1.3rem]">{pr.p}</p>
                <div className="pb-[1.3rem]">{buttonFunc(buttonArr)}</div>
                <div className="flex">
                  <a
                    className="pr-2 underline"
                    href="https://www.w3schools.com/"
                  >
                    View Site
                  </a>
                  <a className="underline" href="https://www.w3schools.com/">
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

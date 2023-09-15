import { useContext } from "react";
import data from "../data";
import { MapContext } from "../contexts/MapProvider";

import { SettingsContext } from "../contexts/SettingsProvider";

export default function Skills() {
  const { mapFunc, mapSkill } = useContext(MapContext);
  const { language } = useContext(SettingsContext);

  return (
    <div className="dark:bg-mydark-3">
      <h2 className="font-interreg dark:text-mygreen-1 font-bold text-mypurp-1 text-[3rem] px-[16.66%] py-[3rem]  ">
        {data[language].skills.skills}
      </h2>
      <div className="flex justify-evenly py-10 items-baseline dark:text-white">
        <div className="flex">
          {mapSkill(data[language].skills.skillsPng)}
          {mapFunc(data[language].skills.skillsArr)}
        </div>
        <div className="flex">
          {mapSkill(data[language].skills.skillsPng2)}
          {mapFunc(data[language].skills.skillsArr2)}
        </div>
      </div>
    </div>
  );
}

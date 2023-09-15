import { useContext } from "react";
import data from "../data";
import { MapContext } from "../contexts/MapProvider";
import JAVASCRIPTPng from "../assets/JAVASCRIPT.png";
import NODEPng from "../assets/NODE.png";
import REACTPng from "../assets/REACT.png";
import VS_CODEPng from "../assets/VS CODE.png";
import REDUXPng from "../assets/REDUX.png";
import FIGMAPng from "../assets/FIGMA.png";
import { SettingsContext } from "../contexts/SettingsProvider";
//TODO png imports and
export default function Skills() {
  const { mapFunc } = useContext(MapContext);
  const { language } = useContext(SettingsContext);
  /*   <img
  className="mr-2 w-[1.3rem] h-[1.3rem]"
  src={`${skill}Png`}
  alt={`${skill}`}
/> */
  //TODO map cagirdiktan sonra img leri ayri olarak maple yada tek tek yaz
  //   <img
  //   className="mr-2 w-[1.3rem] h-[1.3rem]"
  //   src={`${skill}Png`}
  //   alt={`${skill}`}
  // />
  return (
    <div className="dark:bg-mydark-3">
      <h2 className="font-interreg dark:text-mygreen-1 font-bold text-mypurp-1 text-[3rem] px-[16.66%] py-[3rem]  ">
        {data[language].skills.skils}
      </h2>
      <div className="flex justify-evenly py-10 items-baseline dark:text-white">
        {mapFunc(data[language].skills.skillsArr)}
        {mapFunc(data[language].skills.skillsArr2)}
      </div>
    </div>
  );
}

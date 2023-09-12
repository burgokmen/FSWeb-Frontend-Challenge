import { useContext } from "react";
import { skillsArr } from "../data";
import { MapContext } from "../contexts/MapProvider";
import JAVASCRIPTPng from "../assets/JAVASCRIPT.png";
import NODEPng from "../assets/NODE.png";
import REACTPng from "../assets/REACT.png";
import VS_CODEPng from "../assets/VS CODE.png";
import REDUXPng from "../assets/REDUX.png";
import FIGMAPng from "../assets/FIGMA.png";
//TODO png imports and
export default function Skills() {
  const { mapFunc } = useContext(MapContext);

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
    <div className="flex justify-evenly py-10 items-baseline">
      <h2 className="font-interreg font-bold text-mypurp-1 text-[3rem]">
        Skills
      </h2>
      {mapFunc(skillsArr)}
      {/* {mapFunc(skillsArr2)} */}
    </div>
  );
}

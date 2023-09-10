import { skillsArr, skillsArr2 } from "../data";
import JAVASCRIPTPng from "../assets/JAVASCRIPT.png";
import NODEPng from "../assets/NODE.png";
import REACTPng from "../assets/REACT.png";
import VS_CODEPng from "../assets/VS CODE.png";
import REDUXPng from "../assets/REDUX.png";
import FIGMAPng from "../assets/FIGMA.png";
//TODO png imports and
export default function Skills() {
  function mapSkill(arr) {
    return (
      <ul>
        {arr.map((skill, i) => (
          <li className="flex font-interreg p-2" key={i}>
            <img
              className="mr-2 w-[1.3rem] h-[1.3rem]"
              src={`${skill}Png`}
              alt={`${skill}`}
            />
            {skill}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="flex justify-evenly py-10 items-baseline">
      <div className="font-interreg font-bold text-mypurp-1 text-[3rem]">
        Skills
      </div>
      {mapSkill(skillsArr)}
      {mapSkill(skillsArr2)}
    </div>
  );
}

import { useContext } from "react";
import { MapContext } from "../contexts/MapProvider";
import { profileArr2en, profileArrEn } from "../data";
import heroPhoto from "../assets/project-photo.png";

export default function Profile() {
  const { mapFunc } = useContext(MapContext);
  return (
    <div
      className="profile w-[90rem];
   bg-mypurp-1  dark:bg-mydark-1"
    >
      <h2 className="px-[16.66%] py-[3rem] text-mygreen-1 text-[3rem] font-interbold font-bold">
        Profile
      </h2>
      <div className="flex flex-col flex-wrap sm:flex-row justify-evenly px-[11%]">
        <div>
          <h3 className="font-medium  text-[#FFF] px-2 py-2">
            Basic Information
          </h3>
          <div className="flex">
            <div className="text-mygreen-1 font-semibold w-[101px] h-[222px]">
              {mapFunc(profileArrEn)}
            </div>
            <div className="text-[#FFF] font-normal w-[189px] h-[222px]">
              {mapFunc(profileArr2en)}
            </div>
          </div>
        </div>
        <img src={heroPhoto} className="w-[12rem] h-[12rem]  rounded-lg" />
        <div>
          <h3 className="font-medium text-[#FFF] pb-2 text-[1.300rem]">
            About Me
          </h3>
          <p className=" w-[300px] h-[243px] text-[#FFF] font-normal text-[1rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
            <br /> Mnima accusamus ratione soluta aperiam sit voluptate? Dicta
            quod deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
}

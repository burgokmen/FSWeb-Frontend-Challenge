import { useContext } from "react";
import { MapContext } from "../contexts/MapProvider";
import { profileArr2en, profileArrEn } from "../data";
import heroPhoto from "../assets/project-photo.png";

export default function Profile() {
  const { mapFunc } = useContext(MapContext);
  return (
    <div
      className="profile w-[90rem];
  h-[28rem] bg-mypurp-1  dark:bg-mydark-1"
    >
      <h2 className="px-[7.5rem] py-[3rem] text-mygreen-1 text-[3rem] font-interbold font-bold">
        Profile
      </h2>
      <div className="flex justify-center">
        <div>
          <h3 className="font-medium text-[#FFF] pb-2">Basic Information</h3>
          <div className="flex">
            <div className="text-mygreen-1 font-semibold">
              {mapFunc(profileArrEn)}
            </div>
            <div className="text-[#FFF] font-normal">
              {mapFunc(profileArr2en)}
            </div>
          </div>
        </div>
        <img
          src={heroPhoto}
          className="w-[12rem] h-[12rem] ml-[2rem] rounded-lg"
        />
        <div>
          <h3 className="font-medium text-[#FFF] pb-2 text-[1.875rem]">
            About Me
          </h3>
          <p className="w-[18.75rem] h-[15] text-[#FFF] font-normal text-[1.125rem]">
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

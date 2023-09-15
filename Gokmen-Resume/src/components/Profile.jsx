import { useContext } from "react";
import { MapContext } from "../contexts/MapProvider";
import data, { profileArr2en, profileArrEn } from "../data";
import heroPhoto from "../assets/project-photo.png";
import { SettingsContext } from "../contexts/SettingsProvider";

export default function Profile() {
  const { mapFunc } = useContext(MapContext);
  const { language } = useContext(SettingsContext);
  return (
    <div
      className="profile w-[90rem];
   bg-mypurp-1  dark:bg-mydark-1"
    >
      <h2 className="px-[16.66%] py-[3rem] text-mygreen-1 text-[3rem] font-interbold font-bold">
        {data[language].profile.profile}
      </h2>
      <div className="flex flex-col flex-wrap sm:flex-row justify-evenly px-[11%]">
        <div>
          <h3 className="font-medium  text-[#FFF] px-2 py-2">
            {data[language].profile.title}
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
            {data[language].profile.aboutMe}
          </h3>
          <p className=" w-[300px] h-[243px] text-[#FFF] font-normal text-[1rem]">
            {data[language].profile.aboutMeFirstP}
            <br /> {data[language].profile.aboutMeSecondP}
          </p>
        </div>
      </div>
    </div>
  );
}

import { useContext } from "react";
import { MapContext } from "../contexts/MapProvider";
import { profileArr2en, profileArrEn } from "../data";
import heroPhoto from "../assets/project-photo.png";

export default function Profile() {
  const { mapFunc } = useContext(MapContext);
  return (
    <div
      className="profile w-[90rem];
  h-[34.5rem] bg-mypurp-1"
    >
      <h2 className="px-[7.5rem] py-[3rem] text-mygreen-1 text-[3rem] font-interbold font-bold">
        Profile
      </h2>
      <div className="flex">
        <div>
          <h3 className="font-medium">Basic Information</h3>
          <div className="flex">
            {mapFunc(profileArrEn)}

            {mapFunc(profileArr2en)}
          </div>
        </div>
        <img
          src={heroPhoto}
          className="w-[12rem] h-[12rem] ml-[2rem] rounded-lg"
        />
        <div>
          <h3 className="font-medium">About Me</h3>
          <p>
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

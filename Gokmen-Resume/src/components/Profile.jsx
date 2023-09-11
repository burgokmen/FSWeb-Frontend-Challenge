import { useContext } from "react";
import { MapContext } from "../contexts/MapProvider";
import { profileArr2en, profileArrEn } from "../data";

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
            <ul>{mapFunc(profileArrEn)}</ul>
            <ul>{mapFunc(profileArr2en)}</ul>
          </div>
        </div>
        <img></img>
        <div></div>
      </div>
    </div>
  );
}

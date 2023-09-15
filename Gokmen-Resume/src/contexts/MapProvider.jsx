import { createContext } from "react";
export const MapContext = createContext();

const MapProvider = ({ children }) => {
  function mapFunc(arr) {
    return (
      <ul className="max-w-[11rem]">
        {arr.map((a, i) => (
          <li className="flex font-interreg font-medium p-2" key={i}>
            {a}
          </li>
        ))}
      </ul>
    );
  }

  function mapSkill(arr) {
    return (
      <div className="flex flex-col ">
        {arr.map((a, i) => (
          <div key={i}>
            <img className=" mr-2 w-[2.5rem] h-[2.5rem]" src={a} alt="SKILLS" />
          </div>
        ))}
      </div>
    );
  }

  const buttonFunc = (arr) => {
    return arr.map((a, i) => (
      <span
        key={i}
        className="bg-mypurp-1 dark:bg-[#8173DA] mr-2 text-white text-[0.7rem] font-bold py-2 px-4 rounded-full"
      >
        {a}
      </span>
    ));
  };

  return (
    <MapContext.Provider value={{ mapFunc, buttonFunc, mapSkill }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;

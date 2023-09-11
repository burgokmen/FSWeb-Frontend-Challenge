import { createContext } from "react";

export const MapContext = createContext();

const MapProvider = ({ children }) => {
  function mapFunc(arr) {
    return (
      <ul>
        {arr.map((a, i) => (
          <li className="flex font-interreg font-medium p-2" key={i}>
            {a}
          </li>
        ))}
      </ul>
    );
  }

  const buttonFunc = (arr) => {
    return arr.map((a, i) => (
      <span
        key={i}
        className="bg-mypurp-1 mr-2 text-white text-[0.7rem] font-bold py-2 px-4 rounded-full"
      >
        {a}
      </span>
    ));
  };

  return (
    <MapContext.Provider value={{ mapFunc, buttonFunc }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;

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
  return (
    <MapContext.Provider value={{ mapFunc }}>{children}</MapContext.Provider>
  );
};

export default MapProvider;

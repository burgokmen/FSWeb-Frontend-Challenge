import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsProvider";

export default function Options() {
  const { language, setLanguage, darkModeHandler, darkMode } =
    useContext(SettingsContext);
  return (
    <div className="flex justify-end py-[2rem]  ">
      <p className="font-interbold font-bold text-transparent text-[0.9375rem]   ">
        <span className="text-mygreen-2 dark:text-[#BAB2E7]">TÜRKÇE</span>
        <span className="text-[#d9d9d9] dark:text-[#777777] p-2 mr-2">
          ’YE GEÇ
        </span>
      </p>
      <div className="header-right bg-green  min-w-[30%] ">
        <div className="bg-green ">
          {darkMode ? (
            <div
              className="flex flex-row gap-2 items-center cursor-pointer"
              id="DarkModeRoot"
            >
              <div
                onClick={darkModeHandler}
                className="bg-[#3a3a3a] self-start relative  mt-0.5 flex flex-col w-12 shrink-0 items-start px-3 py-1 rounded-[100px]"
              >
                <img
                  src="https://file.rendit.io/n/845kQBcmiFZ1MEjEXABS.svg"
                  className="w-4 h-4 absolute top-1 left-1"
                  id="Ellipse"
                />
                <img
                  src="https://file.rendit.io/n/9pIHWKatvVFeZNYtNluM.svg"
                  className="relative w-4 h-4 right-0.5"
                  id="Ellipse1"
                />
              </div>
              <div
                onClick={darkModeHandler}
                className=" font-intermed font-bold tracking-[1.5] text-[#d9d9d9]"
              >
                LIGHT MODE
              </div>
            </div>
          ) : (
            <div
              className="flex flex-row gap-2 items-center cursor-pointer"
              id="NightModeRoot"
            >
              <div
                onClick={darkModeHandler}
                className="bg-[#8f88ff] dark:bg-[#3A3A3A]  mt-0.5 self-start flex flex-row justify-end dark:justify-start w-12 shrink-0 h-6 items-center px-1 rounded-[100px]"
              >
                <div
                  className="bg-[#ffe86e] w-4 shrink-0 h-4 rounded-[50%]"
                  id="Ellipse"
                />
                <div
                  className="bg-[#e92577] w-px shrink-0 h-px rounded-[50%]"
                  id="Ellipse1"
                />
              </div>
              <div
                onClick={darkModeHandler}
                className="font-intermed font-bold tracking-[1.5] text-[#4731d3]  "
              >
                DARK MODE
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

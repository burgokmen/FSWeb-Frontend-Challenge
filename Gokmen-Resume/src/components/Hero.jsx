import Options from "./Options";
import Header from "./Header";
import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsProvider";

export default function Hero() {
  const { darkMode } = useContext(SettingsContext);
  return (
    <div className={`${darkMode ? "top-level-dark" : "top-level"}`}>
      <Options />
      <Header />
    </div>
  );
}

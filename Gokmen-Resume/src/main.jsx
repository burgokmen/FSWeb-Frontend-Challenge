import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "normalize.css";
import "./index.css";
import MapProvider from "./contexts/MapProvider.jsx";
import SettingsProvider from "./contexts/SettingsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SettingsProvider>
    <MapProvider>
      <App />
    </MapProvider>
  </SettingsProvider>
);

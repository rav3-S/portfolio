import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GridBackground from "./components/GridBackground.jsx";

const isV2 = window.location.pathname.includes("v2");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {isV2 ? (
      <GridBackground>
        <App />
      </GridBackground>
    ) : (
      <App />
    )}
  </StrictMode>
);

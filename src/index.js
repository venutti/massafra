import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const createHeightVar = () => {
  document
    .querySelector(":root")
    .style.setProperty("--vh", window.innerHeight / 100 + "px");
};

createHeightVar();

window.addEventListener("resize", () => {
  createHeightVar();
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

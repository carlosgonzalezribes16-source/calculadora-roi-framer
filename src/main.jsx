
import React from "react";
import { createRoot } from "react-dom/client";
import CalculadoraROI from "./CalculadoraROI.jsx";
import "./styles.css";

const rootElem = document.getElementById("root");

// Theme via URL: ?bg=lavender or ?bg=none (default none)
const params = new URLSearchParams(window.location.search);
const bg = params.get("bg");
if (bg === "lavender") {
  document.body.classList.add("bg-lavender");
} else {
  document.body.style.background = "transparent";
}

const root = createRoot(rootElem);
root.render(<CalculadoraROI />);

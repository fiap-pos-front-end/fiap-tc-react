import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReactPage from "./ReactPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactPage />
  </StrictMode>
);

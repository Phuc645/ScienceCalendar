import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Calendar from "./pages/Calendar/Calendar.tsx";
import "./main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Calendar />
  </StrictMode>
);

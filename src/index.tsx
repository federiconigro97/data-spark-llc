import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ElementDefault } from "./screens/ElementDefault";
import { ElementFounders } from "./screens/ElementFounders";
import { PrivacyPolicy } from "./screens/PrivacyPolicy/PrivacyPolicy";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElementDefault />} />
        <Route path="/founders" element={<ElementFounders />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

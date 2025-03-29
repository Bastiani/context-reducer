import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CounterProvider } from "./context/Counter/CounterProvider.tsx";
import { CustumerProvider } from "./context/Custumer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterProvider>
      <CustumerProvider>
        <App />
      </CustumerProvider>
    </CounterProvider>
  </StrictMode>
);

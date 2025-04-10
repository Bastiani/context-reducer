import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CounterProvider } from "./context/Counter/CounterProvider.tsx";
import { CustomerProvider } from "./context/Customer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterProvider>
      <CustomerProvider>
        <App />
      </CustomerProvider>
    </CounterProvider>
  </StrictMode>
);

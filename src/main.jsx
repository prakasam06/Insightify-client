import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import JWTAuthenticationProvider from "./context/JWTAuthContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <JWTAuthenticationProvider>
        <App />
      </JWTAuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

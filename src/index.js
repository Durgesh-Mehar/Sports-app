import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//import "../node_modules/react-bootstrap/dist/react-bootstrap";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

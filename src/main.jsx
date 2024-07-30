import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  body{
    font-family: "Inter", sans-serif;
    width: 100vw;
    height: 100vh;
    background-color: #323334;
    color:white;
    overflow: hidden;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

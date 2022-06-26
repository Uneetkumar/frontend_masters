import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {Route,Router} from "react-router-dom"
import "./index.css";
// import App from "./App";
// import SearchParameters from "./SearchParamaters";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Details from "./Details";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
  <h1>hello world</h1>
  <Router>
    <Route path="Details" element={<Details/>}/>
  </Router>

  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

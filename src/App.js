// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Pets from "./Pets";

const App = () => {
  return (
  <React.Fragment>
    <h1>This is new react-basic</h1>
    <Pets wish="hello " name="world " symbol="!"/>
    <Pets wish="hello " name="world " symbol="!"/>
    <Pets wish="hello " name="world " symbol="!"/>
  </React.Fragment>
  );
};
export default App;

import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main/main.jsx";

const list = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`
];

const clickHandler = () => {

};

ReactDOM.render(<Main list={list} clickHandler={clickHandler}/>, document.getElementById(`root`));

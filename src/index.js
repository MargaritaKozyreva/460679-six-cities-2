import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main/main.jsx";
import {cards} from "./components/mocks/offers.js";

ReactDOM.render(<Main cards={cards}/>, document.getElementById(`root`));

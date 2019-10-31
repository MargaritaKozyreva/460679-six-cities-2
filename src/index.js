import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

import {cards, staticProps} from "./components/mocks/offers.js";

ReactDOM.render(<App props = {cards} staticProps = {staticProps}/>, document.getElementById(`root`));

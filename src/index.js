import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

import {cards} from "./components/mocks/offers.js";

ReactDOM.render(<App props = {cards} />, document.getElementById(`root`));

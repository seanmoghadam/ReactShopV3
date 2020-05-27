import "./index.scss";
// ES6
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {App} from "./App/App";

// ES5
//const React = require("react");

ReactDOM.render(
        <App title={"Das ist mein Titel"}/>,
        document.getElementById("root")
);

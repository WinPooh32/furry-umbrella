import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";

const rootElement = document.getElementById("application");

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(
        <Hello compiler="TypeScript" framework="React" />,
        rootElement,
    )
}else{
    ReactDOM.render(
        <Hello compiler="TypeScript" framework="React" />,
        rootElement,
    )
}
import "./bootstrap.css";
import React, {StrictMode} from "react";
import ReactDom from "react-dom/client";
import {App} from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

// https://github.com/Geze29/movie_adviser_react
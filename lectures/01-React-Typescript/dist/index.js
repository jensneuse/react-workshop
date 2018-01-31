"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const Hello_1 = require("./components/Hello");
const App = (React.createElement(Hello_1.default, null));
react_dom_1.hydrate(App, document.getElementById('react-root'));

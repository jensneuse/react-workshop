"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
class Hello2 extends react_1.Component {
    shouldComponentUpdate() {
        return true;
    }
    render() {
        return React.createElement("h1", null, "HI");
    }
}
exports.default = Hello2;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
exports.run = function (command) {
    return child_process_1.exec(command);
};

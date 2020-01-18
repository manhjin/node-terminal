"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
exports.get = function (command, callback) {
    return child_process_1.exec(command, function (err, stdout, stderr) {
        if (!callback)
            return;
        callback(err, stdout, stderr);
    });
};

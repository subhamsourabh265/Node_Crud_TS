"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var todo_1 = __importDefault(require("./routes/todo"));
var app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use('/todos', todo_1.default);
app.use(function (err, req, res, next) {
    res.status(500).json({ message: err.message });
});
var PORT = 3000;
app.listen(PORT, function () { return console.log("listening on port ".concat(PORT)); });

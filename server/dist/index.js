"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 4000;
const app = (0, express_1.default)();
app.get('/', (_req, res) => {
    res.end('Hello World!');
});
app.listen(port, () => {
    //if (err) throw err;
    console.log(`Ready on port ${port}`);
});

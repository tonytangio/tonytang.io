"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const server = express_1.default();
const port = 8000;
server.use(express_1.default.static(path_1.default.join(__dirname, '../../client/build')));
server.get('/', (req, res) => res.sendFile(path_1.default.join(__dirname, '../client/build', 'index.html')));
server.listen(port, () => console.log(`tonytang.io listening on port ${port}`));

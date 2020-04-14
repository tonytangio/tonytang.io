"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = __importDefault(require("./config"));
const connections_1 = __importDefault(require("./secret/connections"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const signup_1 = __importDefault(require("./api/signup"));
const login_1 = __importDefault(require("./api/login"));
const authJwt_1 = require("./authJwt");
const secret_1 = __importDefault(require("./api/secret"));
const getBlog_1 = __importDefault(require("./api/getBlog"));
const makeBlog_1 = __importDefault(require("./api/makeBlog"));
const { port } = config_1.default;
const server = express_1.default();
mongoose_1.default.connect(connections_1.default.mongoDb, {
    useNewUrlParser: true
});
const db = mongoose_1.default.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log(`Connection established to MongoDB: ${connections_1.default.mongoDb}`));
server.use(body_parser_1.default.urlencoded());
server.use(body_parser_1.default.json());
server.use(express_1.default.static(path_1.default.join(__dirname, '../../client/build')));
server.get('/', (req, res) => res.sendFile(path_1.default.join(__dirname, '../client/build', 'index.html')));
server.get('/api/secret', authJwt_1.verifyToken, secret_1.default);
server.get('/api/getBlog', getBlog_1.default);
server.post('/api/makeBlog', makeBlog_1.default);
server.post('/api/signup', signup_1.default);
server.post('/api/login', login_1.default);
server.listen(port, () => console.log(`tonytang.io listening on port ${port}`));

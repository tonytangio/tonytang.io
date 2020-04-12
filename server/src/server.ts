import bodyParser from 'body-parser';
import config from './config';
import connections from './secret/connections';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import signupController from './api/signup';
import loginController from './api/login';
import passport from 'passport';
import configPassport from './passport';

const { port } = config;
const server = express();

mongoose.connect(connections.mongoDb, {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log(`Connection established to MongoDB: ${connections.mongoDb}`));

server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
server.use(passport.initialize());
configPassport(passport);

server.use(express.static(path.join(__dirname, '../../client/build')));


server.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/build', 'index.html')));
server.post('/api/signup', signupController);
server.post('/api/login', loginController);

server.listen(port, () => console.log(`tonytang.io listening on port ${port}`));

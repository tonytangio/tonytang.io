import express from 'express';
import path from 'path';

const server = express();
const port = 8000;

server.use(express.static(path.join(__dirname, '../../client/build')));
server.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/build', 'index.html')));

server.listen(port, () => console.log(`tonytang.io listening on port ${port}`));

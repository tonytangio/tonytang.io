import express from 'express';
import path from 'path';

const app = express();
const port = 8000;

app.use('/static', express.static(path.join(__dirname, '../client/build')));
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/build', 'index.html')));
app.get('/', (req, res) => res.send('hello'));

app.listen(port, () => console.log('tonytang.io started.'));
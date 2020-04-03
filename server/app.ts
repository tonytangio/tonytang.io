import express from 'express';
import path from 'path';

const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/build', 'index.html')));

app.listen(port, () => console.log(`tonytang.io listening on port ${port}`));

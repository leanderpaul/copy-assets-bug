import express from 'express';
import fs from 'fs';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
const dataStr = fs.readFileSync(__dirname + '/assets/data.json', {
  encoding: 'utf-8',
});
const data = JSON.parse(dataStr);
const name = data.name;

app.get('/', (req, res) => {
  res.send({ message: 'Hello API', name });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

import express from 'express';

const port = 4000;
const app = express();

app.get('/', (_req, res) => {
  res.end('Hello World!');
});

app.listen(port, (err: Error) => {
  if (err) throw err;
  console.log(`Ready on port ${port}`);
});
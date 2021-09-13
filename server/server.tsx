const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const api = require('./routes/index.tsx');

app.use('/api', api);

app.use(cors());

app.get('/', (req, res) => {
  res.send(`Server Response Success ${PORT}`);
});

app.get('/test', (req, res) => {
  res.send({ test: 'this is test!!' });
});

app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`);
});

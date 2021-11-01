// https://expressjs.com/en/starter/hello-world.html

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World Express!'));

app.get('/users', (req, res) => res.json([
  {
    name: 'Leonardo',
    age: '19',
    location: 'São Paulo'
  },
  {
    name: 'Maria',
    age: '25',
    location: 'Rio de Janeiro'
  }
  ]
));


app.listen(port, () => console.log(`App sendo escutado na porta ${port}!`));
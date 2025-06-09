const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors({
  origin: ['https://gyanaprakashkhandual.github.io', 'http://127.0.0.1:5500'],
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
} 
);
const testResults = require('./apis/testresult.json');
app.get('/testresults', (req, res) => {
  res.json(testResults);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
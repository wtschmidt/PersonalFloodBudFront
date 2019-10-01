const express = require('express')

const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');

const app = express();

app.get('/report', (req, res) => {
  res.status(201).send()
})

app.listen(PORT, () => {
  console.log('Floodbuddies be listening on: 8080');
});
const express = require('express')

const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const cors = require('cors')
//the corsOptions below is copied from a website but I'm not totally sure how this works yet.
//this example is just so I can test if the server is actually up and running correctly.
var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

const app = express();
app.use(bodyParser.json())

app.get('/report', (req, res) => {
  res.status(201).send()
})

app.listen(PORT, () => {
  console.log('Floodbuddies be listening on: 8080');
});
const express = require('express');
const bodyParser = require('body-parser')
const mc = require('./controllers/messages_controller');

console.log(__dirname)
const app = express();

app.use(bodyParser.json());
app.use(express.static( __dirname + '/../public/build'))

const baseUrl = '/api/messages'
app.post(baseUrl, mc.create);
app.get(baseUrl, mc.read);
app.put(`${baseUrl}/:id`, mc.update);
app.delete(`${baseUrl}/:id`, mc.delete);
// app.get('/', (req, res) => res.send('Test') )

const port = 3001
app.listen(port, () => console.log(`Server is running on port ${port}`))
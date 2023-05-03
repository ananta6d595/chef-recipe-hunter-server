const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

const chef = require('./data/chefs.json');
const recipes = require('./data/recipes.json');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
    res.send(chef)
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
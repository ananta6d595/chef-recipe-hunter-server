const express = require('express')
const cors = require('cors')
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

app.get('/chefs/:id', (req, res) => {

    const reqId = parseInt(req.params.id);
    const expectedChef = chef.find(cf => cf.id === reqId)

    res.send(expectedChef)
})

app.get('/recipes', (req, res) => {
    res.send(recipes)
})

app.get('/recipe/:id', (req, res) => {

    const reqId = parseInt(req.params.id);
    const expectedRecipe = recipes.recipes.find(cf => cf.id === reqId)

    res.send(expectedRecipe)

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
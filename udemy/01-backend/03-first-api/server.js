let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let ingredients = [
    {
        "id":"232kAK",
        "text":"Eggs"
    },
    {
        "id":"dkP345",
        "text":"Milk"
    }
];

app.get('/ingredients', function(request, response) {
    response.send(ingredients);
});

app.post('/ingredients', function(request, response) {
    let ingredient = request.body;
    if (!ingredient || ingredient.text === "") {
        response.status(500).send({error: "Your ingredient must have a text"});   // 500 az error status
    } else {
        ingredients.push(ingredient);
        response.status(200).send(ingredient);   // 200 az ok status
    }
});

app.put('/ingredients/:ingredientId', function(request, response) {
    let ingredientId = request.params.ingredientId;
    let newText = request.body.text;

    if ((!ingredientId || ingredientId === "") || (!text || text === "")) {
        response.status(500).send({error:"You must provide"})
    } else {
        let objectFound = false;
    for (let i = 0; i < ingredients.length; i++) {
        let ing = ingredients[i];
        if (ing.id === request.params.ingredientId) {
            ingredients[i].text = newText;
            objectFound = true;
            break;
        }
        if (!objectFound) {
            response.status(500).send({error:"ingredient did not found"});
        } else {
            response.send(ingredients);

        }
    }
}
});


app.listen(3110, function() {
    console.log("first API running on port 3000 something");
});
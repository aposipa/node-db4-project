const express = require("express");

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "Was Unable to GET Recipes", err });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Recipes.getRecipesById(id)
    .then(recipe => {
        if(recipe) {
            res.json(recipe);
        } else {
            res.status(404).json({ message: "Recipe with id not found" });
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "Was Unable to GET Recipes by ID", err });
    });
});

router.get('/:id/ingredients', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
    .then(steps => {
        if(steps.length) {
            res.json(steps);
        } else {
            res.status(404).json({ message: "Ingredients not found for specific recipe" });
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "Was Unable to GET ingredients", err });
    });
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
    .then(steps => {
        if(steps.length) {
            res.json(steps);
        } else {
            res.status(404).json({ message: "Given Recipe not found" })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "Failed to get instructions", err });
    });
})

module.exports = router;
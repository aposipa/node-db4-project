const db = require("../data/dbconfig.js");

module.exports = {
    getRecipes,
    getRecipesById,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db("recipes");
}

function getRecipesById(id) {
    return db("recipes")
    .where({ id })
    .first();
}

function getShoppingList(id) {
    return db("recipe_ingredients as ri")
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .select("i.name", "ri.qty", "ri.units")
    .where({ "ri.recipe_id": id });
}

function getInstructions(id) {
    return db("recipes")
    .select("recipes.instructions")
    .where({ id });
}
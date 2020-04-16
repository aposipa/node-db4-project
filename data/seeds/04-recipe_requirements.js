
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_requirements').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_requirements').insert([
        {id: 1, recipe_id: 1, ingredient_id: 2, quantity: 3},
        {id: 2, recipe_id: 1, ingredient_id: 3, quantity: 3.5},
        {id: 3, recipe_id: 1, ingredient_id: 5, quantity: 1},
        {id: 4, recipe_id: 1, ingredient_id: 8, quantity: 2},
        {id: 5, recipe_id: 1, ingredient_id: 9, quantity: 2},
        {id: 6, recipe_id: 1, ingredient_id: 10, quantity: 2},
        {id: 7, recipe_id: 1, ingredient_id: 11, quantity: 2},
        {id: 8, recipe_id: 1, ingredient_id: 12, quantity: 1},
        {id: 9, recipe_id: 1, ingredient_id: 13, quantity: 6},
        {id: 10, recipe_id: 2, ingredient_id: 1, quantity: 8},
        {id: 11, recipe_id: 2, ingredient_id: 4, quantity: 4},
        {id: 12, recipe_id: 2, ingredient_id: 5, quantity: 6.1},
        {id: 13, recipe_id: 2, ingredient_id: 9, quantity: 4},
        {id: 14, recipe_id: 2, ingredient_id: 10, quantity: 9.3},
        {id: 15, recipe_id: 2, ingredient_id: 11, quantity: 2},
        {id: 16, recipe_id: 2, ingredient_id: 14, quantity: 7.8},
        {id: 17, recipe_id: 3, ingredient_id: 6, quantity: 2},
        {id: 18, recipe_id: 3, ingredient_id: 6, quantity: 2},
      ]);
    });
};

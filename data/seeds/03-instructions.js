
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { id: 1, recipe_id: 1, instruction_number: 1, instructions: 'Peel cassava and plantain'},
        {id: 2, recipe_id: 1, instruction_number: 2, instructions: 'Put on fire and add salt (not required) to taste'},
        {id: 3, recipe_id: 1, instruction_number: 3, instructions: 'Add your spices and goat meat'},
        {id: 4, recipe_id: 1, instruction_number: 4, instructions: 'Let the soup boil'},
        {id: 5, recipe_id: 1, instruction_number: 5, instructions: 'Pound the plantain and cassava with the cassava first with pestle and mortar'},
        {id: 6, recipe_id: 2, instruction_number: 1, instructions: 'Peel yam and slice to preferred sizes'},
        {id: 7, recipe_id: 2, instruction_number: 2, instructions: 'Boil yam with salt till it is soft'},
        {id: 8, recipe_id: 2, instruction_number: 3, instructions: 'Prepare your abom with kontomire'},
        {id: 9, recipe_id: 3, instruction_number: 1, instructions: 'Fetch cup of rice'},
        {id: 10,recipe_id: 3, instruction_number: 2, instructions: 'Use 1.5 cup of water and add 2 spoons of oil'},
        {id: 11, recipe_id: 3, instruction_number: 3, instructions: 'Grind pepper with onion and some salt'},
        {id: 12, recipe_id: 4, instruction_number: 1, instructions: 'Prepare jollof'},
      ]);
    });
};

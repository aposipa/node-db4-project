
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Fufu and Goat Light Soup'},
        {id: 2, name: 'Yam with Abom'},
        {id: 3, name: 'Braised Rice'},
        {id: 4, name: 'Jollof Rice'},
        {id: 5, name: 'Waakye'}
      ]);
    });
};


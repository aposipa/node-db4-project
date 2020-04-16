
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'Yam'},
        {id: 2, name: 'Cassava'},
        {id: 3, name: 'Plantain'},
        {id: 4, name: 'Oil'},
        {id: 5, name: 'Onions'},
        {id: 6, name: 'Rice'},
        {id: 7, name: 'Beans'},
        {id: 8, name: 'Water'},
        {id: 9, name: 'Tomatoes'},
        {id: 10, name: 'Pepper'},
        {id: 11, name: 'Salt'},
        {id: 12, name: 'Meat'},
        {id: 13, name: 'Dried fish'},
        {id: 14, name: 'Koobi'},
      ]);
    });
};

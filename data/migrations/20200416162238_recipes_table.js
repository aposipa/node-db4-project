
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.text('name')
        .notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.text('name')
    })
    .createTable('instructions', tbl => {
      tbl.increments();
      tbl.integer('instruction_number')
        .unsigned()
        .notNullable();
      tbl.text('instructions')
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('recipe_requirements', tbl => {
      tbl.increments();
      tbl.float('quantity')
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_requirements')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
//     return knex.schema
//     .createTable("recipes", tbl => {
//         tbl.increments();
//         tbl.string("name").notNullable();
//         tbl.string("description");
//         tbl.string("instructions").notNullable();
//     })
//     .createTable("ingredients", tbl => {
//         tbl.increments();
//         tbl.string("name").notNullable();
//     })
//     .createTable("recipe_ingredients", tbl => {
//         tbl.increments();
//         tbl
//             .integer("recipe_id")
//             .unsigned()
//             .notNullable()
//             .references("id")
//             .inTable("recipes")
//             .onUpdate('CASCADE')
//             .onDelete('CASCADE');
//         tbl
//             .integer("ingredient_id")
//             .unsigned()
//             .notNullable()
//             .references()
//             .inTable("ingredients")
//             .onUpdate('CASCADE')
//             .onDelete('CASCADE');
//         tbl.float("qty").notNullable();
//         tbl.string("units").notNullable();
//         tbl.unique(["recipe_id", "ingredient_id"]);
//     });
// };

// exports.down = function(knex) {
//     return knex.schema
//     .dropTableIfExists("recipe_ingredients")
//     .dropTableIfExists("ingredients")
//     .dropTableIfExists("recipes");
// };
